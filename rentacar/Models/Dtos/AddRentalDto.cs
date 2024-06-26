namespace rentacar.Models.Dtos
{
    public class AddRentalDto
    {
        public Guid UserId { get; set; }
        public Guid AdvertId { get; set; }
        public required DateOnly StartDate { get; set; }
        public required DateOnly EndDate { get; set; }
        public required float Price { get; set; }
        public required bool Handed { get; set; }
    }
}
