// Import routes
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv';
import api from './routes/index.js';

// Initialize express
const app = express();

// Load environment variables
dotenv.config();

// Middleware setup
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => {
       console.error('MongoDB connection error:', err);
       process.exit(1);
   });

// Apply routes
app.use('/api', api);

// Dynamic route loading
const routes = [
   'user'
];

for (const item of routes) {
   const route = await import(`../../routes/${item}.js`);
   app.use('/api', route.default);
}

// Error handling
app.use((err, req, res, next) => {
   console.error(err.stack);
   const message = process.env.NODE_ENV === 'production'
       ? 'Internal server error'
       : err.message;
   res.status(err.status || 500).json({ error: message });
});

// Server startup
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
   console.log('Received SIGTERM signal. Closing server...');
   server.close(() => {
       mongoose.connection.close(false, () => {
           console.log('Server closed. Database connection terminated.');
           process.exit(0);
       });
   });
});

export default server;  // Export for testing