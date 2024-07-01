// Models/LoginRequest.cs
using System.ComponentModel.DataAnnotations;

namespace RegistrationSystemBackend.Models
{
    public class LoginRequest
    {
        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
