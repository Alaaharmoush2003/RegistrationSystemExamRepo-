// Models/User.cs
using System.ComponentModel.DataAnnotations;

namespace RegistrationSystemBackend.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string Email { get; set; } = string.Empty; // Ensure email is required

        [Required]
        public string Password { get; set; } = string.Empty;

        public bool IsApproved { get; set; } = false;
    }
}
