# Project Name: User Management Dashboard

## Description

This project is a user management dashboard built with Laravel and Inertia.js. It allows you to view and manage users, displaying their various attributes including personal information, skills, and availability for remote work.

## Features

- **User Dashboard**: Displays a list of users with detailed information, including:
  - Name, email
  - Index number, location
  - Highest level of education, availability for remote work
  - Software expertise and proficiency level
  - Level of responsibility, language skills, and duty station
- **Responsive Layout**: The dashboard is designed to be responsive and can be viewed on both desktop and mobile devices.
  
## Installation

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/GAndanje/skillsportal.git
cd skillsportal
```

### 2. Install Dependencies
```bash 
composer install
npm install
```

### 3.  Configure Environment
```bash
cp .env.example .env
```

### 4.  Set Up the Database
```bash
mysql -u root -p skillsportal < dump.sql
```
### 5.  Start the Development Server
```bash
php artisan serve
```

### 6.  Frontend Assets
```bash
npm run dev
```

### 7.  Authentication
For testing purposes, you can use the following credentials to log in: 
    **Email**: gilbertandanje@gmail.com 
    **Password**: 3A8!56kt#sQgYwa