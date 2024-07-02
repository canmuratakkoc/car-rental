using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rentacar.Data;
using rentacar.Models.Dtos;
using rentacar.Models.Entities;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace rentacar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public CarsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllCars()
        {
            var options = new JsonSerializerOptions
            {
                WriteIndented = true
            };

            var cars = dbContext.Cars
                                .Include(c => c.CarModel)  // Include carModel navigation property
                                .Select(c => new CarDto
                                {
                                    Id = c.Id,
                                    Price = c.Price,
                                    Color = c.Color,
                                    Image = c.Image,
                                    Status = c.Status,
                                    CarModelId = c.CarModelId,
                                    CarModel = new CarModelDto
                                    {
                                        Id = c.CarModel.Id,
                                        Name = c.CarModel.Name,
                                        Year = c.CarModel.Year,
                                        Type = c.CarModel.Type,
                                        SeatCount = c.CarModel.SeatCount,
                                        DoorCount = c.CarModel.DoorCount,
                                        GearType = c.CarModel.GearType,
                                        FuelType = c.CarModel.FuelType,
                                        AirConditioner = c.CarModel.AirConditioner,
                                        CarBrandId = c.CarModel.CarBrandId,
                                        CarBrand = c.CarModel.CarBrand  // Assuming CarBrand is another entity or complex type
                                    }
                                })
                                .ToList();

            return Ok(JsonSerializer.Serialize(cars, options));
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetCarById(Guid id)
        {
            var Car = dbContext.Cars.Find(id);

            if (Car is null)
            {
                return NotFound();
            }

            return Ok(Car);
        }

        [HttpPost]
        public IActionResult AddCar(AddCarDto addCarDto)
        {
            var CarEntity = new Car()
            {
                CarModelId = addCarDto.CarModelId,
                Price = addCarDto.Price,
                Color = addCarDto.Color,
                Image = addCarDto.Image,
                Status = addCarDto.Status,
            };

            dbContext.Cars.Add(CarEntity);
            dbContext.SaveChanges();

            var result = new { result = true };

            return new JsonResult(result);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateCar(Guid id, UpdateCarDto updateCarDto)
        {
            var Car = dbContext.Cars.Find(id);

            if (Car is null)
            {
                return NotFound();
            }

            Car.CarModelId = updateCarDto.CarModelId;
            Car.Price = updateCarDto.Price;
            Car.Color = updateCarDto.Color;
            Car.Image = updateCarDto.Image;
            Car.Status = updateCarDto.Status;

            dbContext.SaveChanges();
            var result = new { result = true };

            return new JsonResult(result);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteCar(Guid id)
        {
            var Car = dbContext.Cars.Find(id);

            if (Car is null)
            {
                return NotFound();
            }

            dbContext.Cars.Remove(Car);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
