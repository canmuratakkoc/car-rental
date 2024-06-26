using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rentacar.Data;
using rentacar.Models.Dtos;
using rentacar.Models.Entities;

namespace rentacar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public RentalsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllRentals()
        {
            var AllRentals = dbContext.Rentals.ToList();
            return Ok(AllRentals);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetRentalById(Guid id)
        {
            var Rental = dbContext.Rentals.Find(id);

            if (Rental is null)
            {
                return NotFound();
            }

            return Ok(Rental);
        }

        [HttpPost]
        public IActionResult AddRental(AddRentalDto addRentalDto)
        {
            var RentalEntity = new Rental()
            {
                UserId = addRentalDto.UserId,
                AdvertId = addRentalDto.AdvertId,
                StartDate = addRentalDto.StartDate,
                EndDate = addRentalDto.EndDate,
                Price = addRentalDto.Price,
                Handed = false
            };

            dbContext.Rentals.Add(RentalEntity);
            dbContext.SaveChanges();

            return Ok(addRentalDto);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateRental(Guid id, UpdateRentalDto updateRentalDto)
        {
            var Rental = dbContext.Rentals.Find(id);

            if (Rental is null)
            {
                return NotFound();
            }

            Rental.Handed = updateRentalDto.Handed;

            dbContext.SaveChanges();
            return Ok(Rental);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteRental(Guid id)
        {
            var Rental = dbContext.Rentals.Find(id);

            if (Rental is null)
            {
                return NotFound();
            }

            dbContext.Rentals.Remove(Rental);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
