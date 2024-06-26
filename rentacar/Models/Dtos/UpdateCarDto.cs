﻿namespace rentacar.Models.Dtos
{
    public class UpdateCarDto
    {
        public Guid CarModelId { get; set; }
        public required float Price { get; set; }
        public required string Color { get; set; }
        public required string Image { get; set; }
        public required bool Status { get; set; }
    }
}
