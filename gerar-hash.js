const { default: bcrypt } = await import('bcryptjs');

const password = '2007'; // <-- aqui você muda se quiser outra senha
const hash = await bcrypt.hash(password, 10);
const base64 = Buffer.from(hash).toString('base64');

console.log('Hash Base64:', base64);
