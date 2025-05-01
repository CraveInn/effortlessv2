// Generate a random device ID
const generateDeviceId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Get or create device ID
const getDeviceId = () => {
  const STORAGE_KEY = 'effortless_device_id';
  
  // Try to get existing device ID from localStorage
  let deviceId = localStorage.getItem(STORAGE_KEY);
  
  // If no device ID exists, generate a new one and store it
  if (!deviceId) {
    deviceId = generateDeviceId();
    localStorage.setItem(STORAGE_KEY, deviceId);
  }
  
  return deviceId;
};

export { getDeviceId }; 