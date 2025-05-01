import express from 'express';
import cors from 'cors';

const router = express.Router();

// Enable CORS
router.use(cors());

// Store logs in memory (in a real application, you'd want to use a database)
const logs = [];

// Validation middleware
const validateLogEntry = (req, res, next) => {
  const { type, timestamp } = req.body;
  
  if (!type || !timestamp) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      details: 'type and timestamp are required'
    });
  }

  if (type !== 'page_visit' && type !== 'form_submission') {
    return res.status(400).json({ 
      error: 'Invalid type',
      details: 'type must be either page_visit or form_submission'
    });
  }

  if (type === 'form_submission' && !req.body.phoneNumber) {
    return res.status(400).json({ 
      error: 'Missing phone number',
      details: 'phoneNumber is required for form_submission type'
    });
  }

  next();
};

router.post('/logs', validateLogEntry, (req, res) => {
  const { 
    type, 
    timestamp, 
    phoneNumber,
    userAgent,
    screenResolution,
    language,
    referrer
  } = req.body;

  // Create log entry
  const logEntry = {
    type,
    timestamp,
    phoneNumber: phoneNumber || null,
    userAgent: userAgent || null,
    screenResolution: screenResolution || null,
    language: language || null,
    referrer: referrer || null,
    id: Date.now().toString()
  };

  // Add to logs array
  logs.push(logEntry);

  // In a real application, you would save this to a database
  console.log('New log entry:', logEntry);

  res.status(200).json({ 
    success: true, 
    log: logEntry,
    message: `Successfully logged ${type}`
  });
});

// Get all logs (for admin purposes)
router.get('/logs', (req, res) => {
  res.status(200).json({
    success: true,
    count: logs.length,
    logs
  });
});

export default router; 