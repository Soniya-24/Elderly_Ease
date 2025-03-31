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

## Detailed Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### 1. Clone the Repository
```bash
git clone https://github.com/Soniya-24/Elderly_Ease.git
cd Elderly_Ease
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit the `.env` file and add your MongoDB connection string:
```env
PORT=5002
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

Start the backend server:
```bash
npm start
```

The backend server will start on http://localhost:5002

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../Field_project_37

# Install dependencies
npm install

# Start the frontend application
npm start
```

The frontend will start on http://localhost:3001

### 4. Testing the Application
1. Open http://localhost:3001 in your browser
2. Browse available services
3. Try submitting an admission form
4. Check MongoDB Atlas to see the stored data

## Common Issues and Solutions

1. **Port Already in Use**
   - Change the port in backend/.env file
   - Update the port in frontend/src/services/api.js

2. **MongoDB Connection Issues**
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Check if the connection string is correct
   - Verify network connectivity

3. **Frontend Can't Connect to Backend**
   - Verify both servers are running
   - Check if the API base URL is correct in frontend/src/services/api.js

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

## Support

If you encounter any issues, please open an issue in the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details
