# Next-Gen Business Consultancy Website

A modern full-stack web application built with React, TypeScript, and Node.js for Next-Gen Business Consultancy services.

## Project Overview

This project consists of:

- **Frontend**: React + TypeScript + Vite application with TailwindCSS
- **Backend**: Express.js API with MongoDB

## Features

- Modern, responsive UI with TailwindCSS
- Contact form with backend integration
- Dynamic routing with React Router
- MongoDB database integration
- REST API endpoints
- Form validation and error handling

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- Helmet (security)
- Compression
- Morgan (logging)

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB database
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FullStackDev
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create a `.env` file in the backend directory with:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.tsx
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   └── package.json
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.