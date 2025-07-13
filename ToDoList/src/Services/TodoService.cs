using MongoDB.Driver;
using ToDoList.src.Models;
public class TodoService
{
    private readonly IMongoCollection<TodoItem> _todos;

    public TodoService(IConfiguration config)
    {
        var settings = config.GetSection("TodoDatabase").Get<TodoDatabaseSettings>()!;
        var client = new MongoClient(settings.ConnectionString);
        var database = client.GetDatabase(settings.DatabaseName);
        _todos = database.GetCollection<TodoItem>(settings.CollectionName);
    }

    public async Task<List<TodoItem>> GetAsync() =>
        await _todos.Find(_ => true).ToListAsync();

    public async Task<TodoItem?> GetAsync(string id) =>
        await _todos.Find(t => t.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(TodoItem item) =>
        await _todos.InsertOneAsync(item);

    public async Task UpdateAsync(string id, TodoItem item) =>
        await _todos.ReplaceOneAsync(t => t.Id == id, item);

    public async Task DeleteAsync(string id) =>
        await _todos.DeleteOneAsync(t => t.Id == id);
}
