/**
 * Generates a unique user ID combining timestamp and random characters
 * @param {Object} options - Configuration options for ID generation
 * @param {number} [options.randomLength=6] - Length of random string (default: 6)
 * @param {string} [options.prefix='usr'] - Prefix for the ID (default: 'usr')
 * @returns {string} A unique string ID for user
 * @throws {Error} If randomLength is less than 1 or greater than 32
 */
export function generateUserId(options: { randomLength?: number; prefix?: string } = {}): string {
  const { 
    randomLength = 6,       // Ubah panjang random string untuk jumlah random karakter
    prefix = 'usr'          // Ubah prefix jika perlu (kata awal)
  } = options;

  // Input validation
  if (randomLength < 1 || randomLength > 32) {
    throw new Error('Random length must be between 1 and 32 characters');
  }

  const timestamp = Date.now().toString(36); // Convert timestamp ke base36
  const randomStr = Math.random()
    .toString(36)
    .substring(2, 2 + randomLength); // Get angka yang ditentukan untuk random karakter
  
  return `${prefix}_${timestamp}${randomStr}`;
}

// Contoh puki:
// Default: generateUserId() -> "usr_[timestamp][6 random chars]"
// Custom length: generateUserId({ randomLength: 10 }) -> "usr_[timestamp][10 random chars]"
// Custom prefix: generateUserId({ prefix: 'user' }) -> "user_[timestamp][6 random chars]"
// Both: generateUserId({ randomLength: 8, prefix: 'u' }) -> "u_[timestamp][8 random chars]" 