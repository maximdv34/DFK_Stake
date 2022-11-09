namespace ServerApp.Models
{
    public class StakeModel
    {
        public string? Name { get; set; }
        public double Locked { get; set; }
        public double Flexible { get; set; }
        public double Time { get; set; }
        public int Total { get; set; }
        public string? Image { get; set; }

        public static List<StakeModel> StaticStakes = new List<StakeModel>() 
        { 
            new StakeModel(){Name="BTC", Locked=25.5, Flexible=31.2, Time=6.5, Total=1234567, Image="./static/images/Bitcoin.png"},
            new StakeModel(){Name="ETH", Locked=10.2, Flexible=19.8, Time=1.2, Total=7654321, Image="./static/images/Ethereum.svg"},
            new StakeModel(){Name="MATIC", Locked=18.9, Flexible=11.1, Time=3.3, Total=1112223, Image="./static/images/CryptoPlaceholder.png"},
            new StakeModel(){Name="MANA", Locked=40, Flexible=9.78, Time=0.3, Total=8646748, Image="./static/images/CryptoPlaceholder.png"},
            new StakeModel(){Name="AVAX", Locked=20.3, Flexible=5.9, Time=7.9, Total=6588579, Image="./static/images/CryptoPlaceholder.png"},
            new StakeModel(){Name="BNB", Locked=85.6, Flexible=12.45, Time=11.9, Total=978648, Image="./static/images/CryptoPlaceholder.png"}
        };

    }
}
