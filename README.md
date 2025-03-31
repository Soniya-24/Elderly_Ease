# Healthcare Facility Management System

A full-stack web application for managing healthcare facility services, admissions, and payments.

## Features

- Browse healthcare services
- Online admission process
- Family details management
- Payment processing
- Real-time data management with MongoDB

## Tech Stack

- **Frontend**: React.js with styled-components
- **Backend**: Node.js with Express
- **Database**: MongoDB Atlas
- **Additional Libraries**: 
  - axios for API calls
  - react-router-dom for routing
  - react-icons for UI icons

## Project Structure

```
healthcare-facility/
├── backend/               # Backend server
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Server configuration
│
└── Field_project_37/     # Frontend application
    ├── public/           # Static files
    └── src/
        ├── components/   # Reusable components
        ├── pages/        # Page components
        └── services/     # API services
```

## Setup Instructions

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../Field_project_37
npm install
```

3. Set up environment variables
- Create `.env` file in backend directory
- Add your MongoDB connection string and other configurations

4. Start the application
```bash
# Start backend server (from backend directory)
npm start

# Start frontend application (from Field_project_37 directory)
npm start
```

## API Endpoints

- `GET /api/services` - Get all services
- `GET /api/services/:slug` - Get service details
- `POST /api/admissions` - Create new admission
- `POST /api/family-details` - Add family details
- `POST /api/payments` - Process payment

## Database Collections

- `services` - Healthcare services
- `admissions` - Patient admissions
- `familydetails` - Family information
- `payments` - Payment records

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
