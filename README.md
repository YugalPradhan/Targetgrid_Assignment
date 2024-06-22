# Targetgrid_Assignment
This repository contains a MERN stack web application for managing customer information and integrating with a CRM system.

# Features
Customer Information Input: Allows users to input customer details including phone number, name, email, address, and current organization.
Data Display: Displays customer data in a grid format below the input area upon submission.
Integration with CRM: Provides functionality to push selected customer data to a CRM system (HubSpot).
Enhancements: Includes features like checkbox selection, row click to select checkbox, and large checkbox UI.

# Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB 
CRM Integration: HubSpot API

# Setup Instructions
To run this project locally, follow these steps:

  # Installation
    1.Clone the repository:
    git clone https://github.com/YugalPradhan/Targetgrid_Assignment.git
    cd Targetgrid_Assignment
  
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend dependencies
    cd ../frontend
    npm install
  
    2.Set up environment variables:
    Create a .env file in the backend directory.
    Add the following environment variables:
      PORT=5000  # Example port number for backend server
      MONGO_URI=mongodb://localhost:27017/targetgrid  # MongoDB connection URI
      HUBSPOT_TOKEN=your_hubspot_api_key_here  # Your HubSpot API key

    3. Run the application:
    # Start backend server (from backend directory)
    cd ../backend
    npm start
    
    # Start frontend server (from frontend directory)
    cd ../frontend
    npm start
  
    4.Access the application:
    Open your web browser and go to http://localhost:3000 to view the application.
  
  # CRM Integration (HubSpot)
  This project integrates with HubSpot CRM using the HubSpot API.
  Ensure you have a valid HubSpot API key and configure it in the .env file (HUBSPOT_API_KEY).
  
  # Folder Structure
  backend: Node.js/Express.js backend for API and CRM integration.
  frontend: React.js frontend for user interface and data display.

  




