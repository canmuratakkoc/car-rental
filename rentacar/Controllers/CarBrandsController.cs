using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using rentacar.Data;
using rentacar.Models.Dtos;
using rentacar.Models.Entities;

namespace rentacar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarBrandsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public CarBrandsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllCarBrands() 
        { 
            var AllCarBrands = dbContext.CarBrands.ToList();
            return Ok(AllCarBrands);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetCarBrandById(Guid id) 
        {
            var carBrand = dbContext.CarBrands.Find(id);

            if (carBrand is null) 
            {
                return NotFound();
            }

            return Ok(carBrand);
        }

        [HttpPost]
        public IActionResult AddCarBrand(AddCarBrandDto addCarBrandDto)
        {
            var carBrandEntity = new CarBrand()
            {
                Name = addCarBrandDto.Name
            };

            dbContext.CarBrands.Add(carBrandEntity);
            dbContext.SaveChanges();

            var result = new { name = addCarBrandDto.Name, result = true };

            return new JsonResult(result);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateCarBrand(Guid id, UpdateCarBrandDto updateCarBrandDto)
        {
            var carBrand = dbContext.CarBrands.Find(id);

            if (carBrand is null)
            {
                return NotFound();
            }

            carBrand.Name = updateCarBrandDto.Name;

            dbContext.SaveChanges();
            return Ok(carBrand);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteCarBrand(Guid id)
        {
            var carBrand = dbContext.CarBrands.Find(id);

            if (carBrand is null)
            {
                return NotFound();
            }

            dbContext.CarBrands.Remove(carBrand);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
