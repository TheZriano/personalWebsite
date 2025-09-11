const db = require('./db');
const tg = require('./botTelegram');

async function getProjects(id) {
  try {
    const res = await db.query("SELECT (id, title, description, bannerSrc) FROM projects", [id]);
    const projects = res.rows;
    return projects;
  } catch (err) {
    tg.brodcastError('Errore durante la query:', err);
  }
}



module.exports = {
  getProjects
}
