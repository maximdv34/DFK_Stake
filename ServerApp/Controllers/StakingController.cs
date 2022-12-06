using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using ServerApp.Services;

namespace ServerApp.Controllers
{
    [Route("api")]
    public class StakingController : Controller
    {
        private readonly IDataBaseConnectionProvider _databaseProvider;
        private readonly ILogger<StakingController> _logger;

        public StakingController(
            IDataBaseConnectionProvider databaseProvider, 
            ILogger<StakingController> logger)
        {
            _databaseProvider = databaseProvider;
            _logger = logger;
        }

        [Route("stakes")]
        [HttpGet]
        public async Task<IActionResult> LoadStakes()
        {
            await Task.Delay(50);

            //var stakes = StakeModel.LoadStakesFromDb();
            try
            {
                List<StakeModel> stakes = StakeModel.LoadFromDb(_databaseProvider.Connection);
                return Json(stakes);
            }
            catch(Exception)
            {
                _logger.LogError(
                    "Failed to get stakes from StakeModel in StakingController (/api/stakes) "
                    );
                return NotFound();
            }  
        }
    }
}
