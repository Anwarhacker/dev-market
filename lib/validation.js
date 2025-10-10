// Input sanitization - simple server-safe version
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  // Basic sanitization without DOMPurify for server compatibility
  return input.trim().replace(/<script[^>]*>.*?<\/script>/gi, '').replace(/<[^>]*>/g, '');
};

// Validation schemas
export const projectValidation = {
  title: (value) => {
    if (!value || value.length < 3 || value.length > 100) {
      return 'Title must be between 3 and 100 characters';
    }
    return null;
  },
  
  description: (value) => {
    if (!value || value.length < 10 || value.length > 1000) {
      return 'Description must be between 10 and 1000 characters';
    }
    return null;
  },
  
  price: (value) => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > 10000) {
      return 'Price must be between 0 and 10000';
    }
    return null;
  },
  
  category: (value) => {
    const validCategories = ['major', 'minor'];
    if (!validCategories.includes(value)) {
      return 'Category must be major or minor';
    }
    return null;
  },
  
  technologies: (value) => {
    if (!Array.isArray(value) || value.length === 0 || value.length > 10) {
      return 'Technologies must be an array with 1-10 items';
    }
    return null;
  }
};

// Validate project data
export const validateProject = (data) => {
  const errors = {};
  
  Object.keys(projectValidation).forEach(field => {
    const error = projectValidation[field](data[field]);
    if (error) errors[field] = error;
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Sanitize project data
export const sanitizeProject = (data) => {
  return {
    title: sanitizeInput(data.title),
    description: sanitizeInput(data.description),
    price: parseFloat(data.price),
    category: sanitizeInput(data.category),
    technologies: Array.isArray(data.technologies) 
      ? data.technologies.map(tech => sanitizeInput(tech))
      : [],
    featured: Boolean(data.featured),
    githubUrl: sanitizeInput(data.githubUrl),
    liveUrl: sanitizeInput(data.liveUrl),
    imageUrl: sanitizeInput(data.imageUrl)
  };
};