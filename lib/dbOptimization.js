import mongoose from 'mongoose';

// Database optimization utilities
export const createIndexes = async () => {
  try {
    const Project = mongoose.models.Project;
    if (!Project) return;

    // Create indexes for better query performance
    await Project.collection.createIndex({ category: 1 });
    await Project.collection.createIndex({ featured: 1 });
    await Project.collection.createIndex({ createdAt: -1 });
    await Project.collection.createIndex({ title: 'text', description: 'text' });
    await Project.collection.createIndex({ price: 1 });
    
    console.log('Database indexes created successfully');
  } catch (error) {
    console.error('Error creating indexes:', error);
  }
};

// Optimized query builders
export const buildProjectQuery = (filters = {}) => {
  const query = {};
  
  if (filters.category) {
    query.category = filters.category;
  }
  
  if (filters.featured !== undefined) {
    query.featured = filters.featured;
  }
  
  if (filters.search) {
    query.$text = { $search: filters.search };
  }
  
  if (filters.minPrice || filters.maxPrice) {
    query.price = {};
    if (filters.minPrice) query.price.$gte = parseFloat(filters.minPrice);
    if (filters.maxPrice) query.price.$lte = parseFloat(filters.maxPrice);
  }
  
  return query;
};

// Pagination helper
export const getPaginationOptions = (page = 1, limit = 10) => {
  const pageNum = Math.max(1, parseInt(page));
  const limitNum = Math.min(50, Math.max(1, parseInt(limit)));
  
  return {
    skip: (pageNum - 1) * limitNum,
    limit: limitNum
  };
};