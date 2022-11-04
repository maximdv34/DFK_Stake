namespace ServerApp
{
    
    public class Program
    {
        //Main
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            ConfigureServices(builder.Services);

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.MapControllers();

            app.MapFallbackToFile("index.html");

            app.Run();
        }

        //Configure services
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
        } 

    }
}