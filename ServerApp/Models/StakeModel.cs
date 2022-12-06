using MySql.Data.MySqlClient;
using System.Data.Common;

namespace ServerApp.Models
{
    public class StakeModel
    {
        public string? Name { get; set; }
        public double Locked { get; set; }
        public double Flexible { get; set; }
        public double Time { get; set; }
        public int Total { get; set; }
        public byte[]? Image { get; set; }

        //public static List<StakeModel>? LoadStakesFromDb()
        //{
        //    MySqlConnection? connection = DataBaseConnection.Connection;
        //    if (connection != null)
        //    {
        //        List<StakeModel> stakes = new List<StakeModel>();
        //        connection.Open();
        //        MySqlCommand command = connection.CreateCommand();
        //        command.CommandText = "select * from stakes";
        //        MySqlDataReader reader = command.ExecuteReader();
        //        try
        //        {
        //            while (reader.Read())
        //            {
        //                stakes.Add(new StakeModel()
        //                {
        //                    Name = reader["name"].ToString(),
        //                    Locked = double.Parse(reader["locked"].ToString()),
        //                    Flexible = double.Parse(reader["flexible"].ToString()),
        //                    Time = double.Parse(reader["time"].ToString()),
        //                    Total = int.Parse(reader["total"].ToString()),
        //                    Image = (byte[])reader["image"]
        //                });
        //            }
        //        }
        //        catch (Exception exc)
        //        {

        //        }
        //        finally
        //        {
        //            reader.Dispose();
        //            connection.Close();
        //        }
        //        return stakes;
        //    }
        //    return null;
        //}

        public static List<StakeModel> LoadFromDb(DbConnection? connection)
        {
            if (connection is null)
                throw new NullReferenceException("Database connection can't be null");

            List<StakeModel> stakes = new List<StakeModel>();
            try
            {
                connection.Open();

                DbCommand command = connection.CreateCommand();
                command.CommandText = "select * from stakes";
                using (DbDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        stakes.Add(new StakeModel()
                        {
                            Name = reader["name"].ToString(),
                            Locked = double.Parse(reader["locked"].ToString()),
                            Flexible = double.Parse(reader["flexible"].ToString()),
                            Time = double.Parse(reader["time"].ToString()),
                            Total = int.Parse(reader["total"].ToString()),
                            Image = (byte[])reader["image"]
                        });
                    }
                }
            }
            finally
            {
                connection.Close();
            }
            return stakes;
        }
    }
}
