using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<StoreDbContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddControllers();

var app = builder.Build();

app.MapControllers();

var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreDbContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

try
{
    context.Database.Migrate();
    DbInitializer.Initialize(context);
}
catch (Exception exception)
{
    logger.LogError(exception, "A problem occurred during migration");
}

app.Run();
