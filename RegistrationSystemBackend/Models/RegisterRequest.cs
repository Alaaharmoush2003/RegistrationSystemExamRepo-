// Models/RegisterRequest.cs
using System.ComponentModel.DataAnnotations;

namespace RegistrationSystemBackend.Models
{
    public class RegisterRequest
    {
        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty; // Add email field with data annotations

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
