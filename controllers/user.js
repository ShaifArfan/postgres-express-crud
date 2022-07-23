const db = require("../db")

const getAllUsers =async (req, res) => {
  try{
    const users = await db.query('SELECT * FROM user_accounts');
    res.json(users.rows);
  }catch(err){
    console.log(err);
    req.status(500).send(err);
  }
}

const createUser =async (req, res) => {
  try{
    const newUser = await db.query('INSERT INTO user_accounts (name, email) VALUES ($1, $2) RETURNING *', [req.body.name, req.body.email]) ;

    res.json(newUser.rows);
  }catch(err){
    console.log(err);
    req.status(500).send(err);
  }
}

const updateUser =async (req, res) => {
  try{
    const user = await db.query(
      'UPDATE user_accounts SET name = $1, email = $2 WHERE id = $3 RETURNING *', [req.body.name, req.body.email, req.params.userId]
    ) ;
    res.json(user.rows);
  }catch(err){
    console.log(err);
    req.status(500).send(err);
  }
}

const deleteUser =async (req, res) => {
  try{
    const user = await db.query(
      'DELETE FROM user_accounts WHERE  id = $1', [req.params.userId]
    );
    res.json('User deleted');
  }catch(err){
    console.log(err);
    req.status(500).send(err);
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}