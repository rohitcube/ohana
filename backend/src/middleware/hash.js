const bcrypt = require('bcrypt');

const saltRounds = 10;

async function generateHash(plainText) {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(plainText, saltRounds)
      .then((hash) => {
        resolve(hash);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function resolveHash(plainText, hash) {
  try {
    return await bcrypt.compare(plainText, hash);
  } catch (err) {
    return new Error(err);
  }
}

module.exports = {
  generateHash,
  resolveHash,
};
