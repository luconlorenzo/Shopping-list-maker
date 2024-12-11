using Microsoft.AspNetCore.Mvc;
using ShoppingListMaker.Models;

namespace ShoppingListMaker.Controllers
{
    public class BaseController : Controller
    {
        protected ShoppingListMakerDBContext DB;
        protected IConfiguration? AppSettings;
        public BaseController(ShoppingListMakerDBContext db)
        {
            DB = db;
        }
        public BaseController(ShoppingListMakerDBContext db, IConfiguration? appSettings)
        {
            DB = db;
            AppSettings = appSettings;
        }
    }
}
