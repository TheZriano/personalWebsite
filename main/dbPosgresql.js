const db = require('./db');

async function getUserById(id) {
  try {
    const res = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = res.rows[0];
    return user;
  } catch (err) {
    console.error('Errore durante la query:', err);
  }
}



module.exports = {
  getUserById
}
