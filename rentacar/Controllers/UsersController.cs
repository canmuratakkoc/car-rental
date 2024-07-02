using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using rentacar.Data;
using rentacar.Models.Dtos;
using rentacar.Models.Entities;

namespace rentacar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public UsersController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var AllUsers = dbContext.Users.ToList();
            return Ok(AllUsers);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetUserById(Guid id)
        {
            var User = dbContext.Users.Find(id);

            if (User is null)
            {
                return NotFound();
            }

            return Ok(User);
        }

        [HttpPost]
        public IActionResult AddUser(AddUserDto addUserDto)
        {
            var UserEntity = new User()
            {
                Firstname = addUserDto.Firstname,
                Lastname = addUserDto.Lastname,
                Email = addUserDto.Email,
                Phone = addUserDto.Phone,
                IdentityNumber = addUserDto.IdentityNumber
            };

            dbContext.Users.Add(UserEntity);
            dbContext.SaveChanges();

            var result = new { result = true };

            return new JsonResult(result);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public IActionResult UpdateUser(Guid id, UpdateUserDto updateUserDto)
        {
            var User = dbContext.Users.Find(id);

            if (User is null)
            {
                return NotFound();
            }

            User.Firstname = updateUserDto.Firstname;
            User.Lastname = updateUserDto.Lastname;
            User.Email = updateUserDto.Email;
            User.Phone = updateUserDto.Phone;
            User.IdentityNumber = updateUserDto.IdentityNumber;

            dbContext.SaveChanges();
            var result = new { result = true };

            return new JsonResult(result);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteUser(Guid id)
        {
            var User = dbContext.Users.Find(id);

            if (User is null)
            {
                return NotFound();
            }

            dbContext.Users.Remove(User);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
