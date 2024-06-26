using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rentacar.Data;
using rentacar.Models.Dtos;
using rentacar.Models.Entities;

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
            var AllCars = dbContext.Cars.ToList();
            return Ok(AllCars);
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

            return Ok(addCarDto);
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
            return Ok(Car);
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
