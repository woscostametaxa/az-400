# .NET Core Build

- Requires [.NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)
- Show Build pipeline with designer and yaml
- Show simple release just to prove that is works

## Demo Instructions

### Create a simple .NET Core Api

Create a .NET Core Api outside of this repo:

```
dotnet new webapi -n SimpleApi
```

Delete unused files:

```
WeatherForecast.cs
WeatherForecastController.cs
```

Create `SimpleController.cs`:

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SimpleApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimpleController : ControllerBase
    {
        public SimpleController()
        {
        }

        [HttpGet("")]
        public ActionResult<IEnumerable<Data>> GetDatas()
        {
            return new List<Data> { new Data{Id=1, Name="Simple Data"} };
        }
    }

    public class Data{
        public int Id { get; set; }
        public string Name { get; set; }
    }
}


```

Test using:

```
dotnet watch run
```

### Upload to a new DevOps Project and Create Pipelines

- Create a new DevOps Project `AZ-400-M04-AzurePipelines`
- Get the default repo url - example: `https://YourOrg@dev.azure.com/YourOrg/AZ-400-M04-AzurePipelines/\_git/AZ-400-M04-AzurePipelines`
- Upload your proj to this repo
