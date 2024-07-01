Sure! Here's a comprehensive README file for your website project:

---

# Registration System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Registration System is a web application that allows users to register and log in, and provides an admin interface to manage user approvals. It uses a .NET Core backend with a SQL Server database and a React frontend.

## Features
- User registration
- User login (only for approved users)
- Admin login
- Admin dashboard to view and manage unapproved users
- User approval/rejection by admin

## Technologies Used
- **Backend**: .NET Core, Entity Framework Core, SQL Server
- **Frontend**: React, Axios
- **Authentication**: BCrypt
- **Styling**: CSS

## Installation

### Prerequisites
- .NET Core SDK
- Node.js and npm
- SQL Server

### Steps
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd registration-system
   ```

2. **Backend Setup**
   - Navigate to the backend directory
     ```bash
     cd RegistrationSystemBackend
     ```
   - Restore the packages
     ```bash
     dotnet restore
     ```
   - Update the database connection string in `appsettings.json`
   - Apply migrations and update the database
     ```bash
     dotnet ef database update
     ```
   - Run the backend server
     ```bash
     dotnet run
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory
     ```bash
     cd ../registration-system-frontend
     ```
   - Install the dependencies
     ```bash
     npm install
     ```
   - Start the development server
     ```bash
     npm start
     ```

## Usage

### User Registration
- Navigate to the registration page and fill out the form.
- On successful registration, the user will be added to the database but not approved.

### User Login
- Only approved users can log in.
- If a user is not approved, they cannot log in.

### Admin Login
- Admins can log in using the admin credentials.

### Admin Dashboard
- Admins can view the list of unapproved users.
- Admins can approve or reject users.
- Approved users will be able to log in.

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user
  - Request Body: `{ "username": "string", "email": "string", "password": "string" }`
- **POST /api/auth/login**: User login
  - Request Body: `{ "username": "string", "password": "string" }`
- **POST /api/auth/admin-login**: Admin login
  - Request Body: `{ "username": "string", "password": "string" }`

### Admin
- **GET /api/admin/unapproved-users**: Get all unapproved users
- **POST /api/admin/approve-user/{userId}**: Approve or reject a user
  - Request Body: `{ "approve": "boolean" }`

## Database Schema

### Users Table
| Column     | Type    | Description           |
|------------|---------|-----------------------|
| Id         | int     | Primary key           |
| Username   | string  | User's username       |
| Email      | string  | User's email          |
| Password   | string  | Hashed password       |
| IsApproved | boolean | Approval status       |

### Admins Table
| Column     | Type    | Description           |
|------------|---------|-----------------------|
| Id         | int     | Primary key           |
| Username   | string  | Admin's username      |
| Password   | string  | Hashed password       |

## Contributing
Contributions are welcome! Please create a pull request or raise an issue to contribute.

## License
This project is licensed under the MIT License and is created by alaa harmoush .

---
