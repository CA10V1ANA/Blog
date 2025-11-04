// verify.js
const bcrypt = require('bcryptjs'); // <- com require

const base64 = 'DJiJDEwJGlZMndkdzVsc0hidEtjLk5uYXdsbWVPOGUyWTZiN3k5dUpkc3BaWTFiVFNDeENWN0g2SVQy';
const storedHash = Buffer.from(base64, 'base64').toString('utf-8'); // decodifica para o formato $2b$10$...
const candidate = process.argv[2] || '';

if (!candidate) {
  console.error('Use: node verify.js <senha-candidata>');
  process.exit(1);
}

bcrypt.compare(candidate, storedHash, (err, ok) => {
  if (err) {
    console.error('Erro ao verificar:', err);
    process.exit(2);
  }
  console.log(ok ? 'MATCH ✅ Senha correta!' : 'NO MATCH ❌ Senha incorreta.');
});
