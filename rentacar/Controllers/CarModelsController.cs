using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rentacar.Data;
using rentacar.Models.Dtos;
using rentacar.Models.Entities;

namespace rentacar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarModelsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public CarModelsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllCarModels()
        {
            var AllCarModels = dbContext.CarModels.ToList();
            return Ok(AllCarModels);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetCarModelById(Guid id)
        {
            var carModel = dbContext.CarModels.Find(id);

            if (carModel is null)
            {
                return NotFound();
            }

            return Ok(carModel);
        }

        [HttpPost]
        public IActionResult AddCarModel(AddCarModelDto addCarModelDto)
        {
            var carModelEntity = new CarModel()
            {
                CarBrandId = addCarModelDto.CarBrandId,
                Name = addCarModelDto.Name,
                Year = addCarModelDto.Year,
                Type = addCarModelDto.Type,
                SeatCount = addCarModelDto.SeatCount,
                DoorCount = addCarModelDto.DoorCount,
                GearType = addCarModelDto.GearType,
                FuelType = addCarModelDto.FuelType,
                AirConditioner = addCarModelDto.AirConditioner
            };

            dbContext.CarModels.Add(carModelEntity);
            dbContext.SaveChanges();
            var result = new {result = true};

            return new JsonResult(result);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateCarModel(Guid id, UpdateCarModelDto updateCarModelDto)
        {
            var carModel = dbContext.CarModels.Find(id);

            if (carModel is null)
            {
                return NotFound();
            }

            carModel.CarBrandId = updateCarModelDto.CarBrandId;
            carModel.Name = updateCarModelDto.Name;
            carModel.Year = updateCarModelDto.Year;
            carModel.Type = updateCarModelDto.Type;
            carModel.SeatCount = updateCarModelDto.SeatCount;
            carModel.DoorCount = updateCarModelDto.DoorCount;
            carModel.GearType = updateCarModelDto.GearType;
            carModel.FuelType = updateCarModelDto.FuelType;
            carModel.AirConditioner = updateCarModelDto.AirConditioner;

            dbContext.SaveChanges();
            var result = new { result = true };

            return new JsonResult(result);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteCarModel(Guid id)
        {
            var carModel = dbContext.CarModels.Find(id);

            if (carModel is null)
            {
                return NotFound();
            }

            dbContext.CarModels.Remove(carModel);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
