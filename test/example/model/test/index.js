module.exports = {
  sleep: (db, time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  },
  createTable: (db) => {
    return db.execute(`
      CREATE TABLE IF NOT EXISTS simple_test (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        value VARCHAR(32) DEFAULT 'EMPTY'
      );
    `, global.stage)
  },
  insertRecord: (db) => {
    return db.execute(`
      INSERT INTO simple_test
        (value) VALUES (?)
    `, ['test'], global.stage)
  },
  inquiryRecord: (db) => {
    return db.row(`
      SELECT
        *
      FROM
        simple_test
      WHERE
        id = 1
    `, global.stage)
  },
  dummy: (db) => {
    return db.row(`SELECT 1`, global.stage)
  }
}
