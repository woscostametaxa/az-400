using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace FoodApi {
    [Route ("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase {
        public FoodController () { }

        [HttpGet ()]
        public IEnumerable<FoodItem> GetFood () {
            List<FoodItem> list = new List<FoodItem> ();
            list.Add (new FoodItem { ID = 1, Name = "Butter Chicken", Price = 12, Calories = 1200 });
            list.Add (new FoodItem { ID = 2, Name = "Blini with Salmon", Price = 9, Calories = 900 });
            list.Add (new FoodItem { ID = 3, Name = "Wurstknödel mit Sauerkraut", Price = 8, Calories = 1250 });
            return list;
        }
    }
}