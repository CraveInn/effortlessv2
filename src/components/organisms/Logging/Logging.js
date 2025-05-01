import axios from 'axios';
import { getDeviceId } from '../../../utils/deviceId';

const logEvent = async (phoneNumber = null, type = 'page_visit') => {
  try {
    const endpoint = process.env.REACT_APP_API_URL || 'https://script.google.com/macros/s/AKfycbxxFMMSf30zvBdjcvon-8T1n-mStB5hq7TyZH14fWOwCqmBQeudgtEd47p3VzR4BAFgaQ/exec';
    const payload = {
      type,
      timestamp: new Date().toISOString(),
      deviceId: getDeviceId(),
      ...(phoneNumber && { phoneNumber }),
      // Additional analytics data
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      referrer: document.referrer || 'direct',
    };

    await axios.post(endpoint, payload, {
  headers: {
        'Content-Type': 'text/plain' // change from application/json
  }
});
  } catch (error) {
    console.error('Error logging event:', error);
  }
};

export default logEvent; 