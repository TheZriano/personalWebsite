const db = require('./db');
const tg = require('./botTelegram');

async function getProjects() {
  try {
    const res = await db.query('SELECT id, title, description, "bannerSrc" FROM projects');
    return res.rows;
  } catch (err) {
    tg.brodcastError('Errore durante la query:', err);
    return [];
  }
}

async function getProjectById(id) {
  try {
    const res = await db.query('SELECT * FROM projects WHERE id = $1', [id]);
    return res.rows[0];
  } catch (err) {
    tg.brodcastError('Errore durante la query:', err);
    return null;
  }
}

module.exports = {
  getProjects, getProjectById
}
