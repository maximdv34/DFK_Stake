using MySql.Data.MySqlClient;
using System.Data.Common;

namespace ServerApp.Services
{
    public interface IDataBaseConnectionProvider
    {
        DbConnection? Connection { get; }
    }

    public class MySqlConnectionProvider : IDataBaseConnectionProvider
    {
        public DbConnection? Connection
        {
            get
            {
                return _Connection;
            }
        }

        private MySqlConnection? _Connection = null;
        public MySqlConnectionProvider(IConfiguration config)
        {
            IConfigurationSection values = config.GetSection("DataBaseConnection");
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
            builder.Server = values.GetValue<string>("Server");
            builder.Database = values.GetValue<string>("Database");
            builder.UserID = values.GetValue<string>("User");
            builder.Password = values.GetValue<string>("Password");
            _Connection = new MySqlConnection(builder.GetConnectionString(true));
        }
    }
}
