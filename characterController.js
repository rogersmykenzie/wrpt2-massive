const addCharacter = (req, res) => {
  // resources
  const {
    name,
    age,
    isForceSensitive
  } = req.body;

  const db = req.app.get('db');
  // logic
  db
    .adding
    .add_character(name, age, isForceSensitive)
    .then(() => {
      // response
      res.sendStatus(200);
    })
    .catch((e) => {
      res.status(500).json(e);
    })
}

module.exports = {
  addCharacter
};