using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;

namespace ServerApp.Controllers
{
    [Route("api")]
    public class StakingController : Controller
    {
        [Route("stakes")]
        [HttpGet]
        public IActionResult LoadStakes()
        {
            return Json(StakeModel.StaticStakes);
        }
    }
}
