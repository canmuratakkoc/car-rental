﻿namespace rentacar.Models.Dtos
{
    public class UpdateUserDto
    {
        public required string Firstname { get; set; }
        public required string Lastname { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public required string IdentityNumber { get; set; }
    }
}
