# MERN E-commerce DevOps Project

A fully dockerized MERN stack e-commerce application with complete DevOps pipeline implementation.

## Technologies Used

- **Frontend**: React.js, Material UI, Redux Toolkit
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Orchestration**: Kubernetes

## Project Structure

```
mern-ecommerce/
├── frontend/           # React application
├── backend/            # Node.js API server
├── docker-compose.yml  # Container orchestration
└── README.md
```

## Features

- User authentication (Login/Signup)
- Product catalog with categories
- Shopping cart functionality
- Order management
- Admin dashboard
- User reviews and ratings

## Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed
- Git

### Running the Application

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/mern-ecommerce-devops.git
cd mern-ecommerce-devops
```

2. Start all services:
```bash
docker-compose up -d
```

3. Seed the database:
```bash
docker-compose exec backend npm run seed
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- MongoDB: localhost:27018

### Demo Credentials
- Email: demo@gmail.com
- Password: helloWorld@123

## Services

### Frontend
- **Port**: 3000
- **Technology**: React.js with Nginx
- **Features**: Responsive UI, Material Design

### Backend
- **Port**: 8000
- **Technology**: Node.js/Express
- **Features**: RESTful API, JWT Authentication

### Database
- **Port**: 27018 (external)
- **Technology**: MongoDB
- **Features**: Persistent data storage

## Development

### Local Development
1. Install dependencies for both frontend and backend:
```bash
cd frontend && npm install
cd ../backend && npm install
```

2. Set up environment variables:
- Create `.env` files in both frontend and backend directories
- Copy from `.env.example` and configure

3. Start services locally:
```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm start
```

## DevOps Implementation

- [x] Docker containerization
- [x] Docker Compose orchestration
- [ ] CI/CD with GitHub Actions
- [ ] Kubernetes deployment
- [ ] Helm charts
- [ ] Monitoring and logging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.