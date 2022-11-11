using MySql.Data.MySqlClient;

namespace ServerApp.Models
{
    public class DataBaseConnection
    {
        private static MySqlConnection? _Connection;
        private DataBaseConnection() { }
        public static MySqlConnection? Connection
        {
            get
            {
                if(_Connection == null)
                {
                    MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
                    builder.Server = "127.0.0.1";
                    builder.Database = "dfk_stake";
                    builder.UserID = "DFK_Client";
                    builder.Password = "ce6776e3-2c2=2c34m9x30278n9-c7r93uifu4r-94untyh3rf493v4nhg804ci";
                    _Connection = new MySqlConnection(builder.GetConnectionString(true));
                }
                return _Connection;
            }
        }

    }
}
