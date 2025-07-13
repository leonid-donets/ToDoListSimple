var builder = WebApplication.CreateBuilder(args);

// ✨ הוספת שירותים לפני Build()
builder.Services.AddControllers();
builder.Services.AddSingleton<TodoService>();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("AllowAll", p =>
        p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

// OpenAPI / Swagger (אם אתה רוצה)
builder.Services.AddEndpointsApiExplorer();
var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AllowAll");

app.MapControllers();
app.Run();
