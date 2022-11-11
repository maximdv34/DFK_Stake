using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    [Route("api")]
    public class StakingController : Controller
    {
        [Route("stakes")]
        [HttpGet]
        public async Task<IActionResult> LoadStakes()
        {
            await Task.Delay(50);
            var stakes = StakeModel.LoadStakesFromDb();
            if (stakes != null)
                return Json(stakes);
            else
                return NotFound();
        }
    }
}
