// Services/IUserService.cs
using RegistrationSystemBackend.Models;
using System.Threading.Tasks;

namespace RegistrationSystemBackend.Services
{
    public interface IUserService
    {
        Task<bool> RegisterUserAsync(RegisterRequest registerRequest);
        Task<User?> AuthenticateUserAsync(LoginRequest loginRequest);
    }
}
