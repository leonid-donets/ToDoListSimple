using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDoList.src.Models;


[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private readonly TodoService _service;

    public TodoController(TodoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> Get() =>
        Ok(await _service.GetAsync());

[HttpPost]
public async Task<IActionResult> Create([FromBody] TodoItem item)
{
    await _service.CreateAsync(item);
    return Ok(item);
}
    // [HttpPut("{id}")]
    // public async Task<IActionResult> Update(string id, TodoItem item)
    // {
    //     var existing = await _service.GetAsync(id);
    //     if (existing is null) return NotFound();
    //     item.Id = id;
    //     await _service.UpdateAsync(id, item);
    //     return NoContent();
    // }
[HttpPut("{id}")]
public async Task<IActionResult> Update(string id, TodoItem item)
{
    try
    {
        var existing = await _service.GetAsync(id);
        if (existing is null) return NotFound();

        item.Id = id;
        await _service.UpdateAsync(id, item);
        return NoContent();
    }
    catch (Exception ex)
    {
        // לוג של השגיאה בשרת
        Console.WriteLine(ex);
        return StatusCode(500, "Internal server error: " + ex.Message);
    }
}

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var existing = await _service.GetAsync(id);
        if (existing is null) return NotFound();
        await _service.DeleteAsync(id);
        return NoContent();
    }
}
