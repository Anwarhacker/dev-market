import connectToDatabase from './mongodb.js';
import { createIndexes } from './dbOptimization.js';

export const initializeDatabase = async () => {
  try {
    await connectToDatabase();
    await createIndexes();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
  }
};