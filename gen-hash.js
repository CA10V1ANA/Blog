const bcrypt = require('bcryptjs');

const plain = process.argv[2] || '';
if (!plain) {
  console.error('Use: node gen-hash.js <senha>');
  process.exit(1);
}

const hash = bcrypt.hashSync(plain, 10); // gera $2b$10$...
const base64 = Buffer.from(hash).toString('base64');

console.log('hashDaSuaSenhaEmBase64: \'' + base64 + '\'');
