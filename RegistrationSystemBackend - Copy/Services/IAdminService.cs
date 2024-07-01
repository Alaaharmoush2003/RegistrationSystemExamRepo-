// Services/IAdminService.cs
using RegistrationSystemBackend.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace RegistrationSystemBackend.Services
{
    public interface IAdminService
    {
        Task<Admin?> AuthenticateAdminAsync(LoginRequest loginRequest);
        Task<List<User>> GetUnapprovedUsersAsync();
        Task<bool> ApproveUserAsync(int userId, bool approve);
    }
}
