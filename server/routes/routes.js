const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/usuario', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM usuario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('http://localhost:3001/Register',(req,res)=>{
const {nombres,correo,contraseña} = req.body;
let usuario = [nombres,correo,contraseña];
let nuevoUsuario = `INSERT INTO usuario(nombres,correo,contraseña)
                  VALUES(?,?,?)`;
mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Usuario Registrado`, })
  });
});  

router.put('/actor/:id', (req, res) => {
  const {nombres,apellidos,correo,documento,telefono_celular,
    fecha_nacimiento,institucion_id} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE actores SET nombres = ?,apellidos = ?,
  correo = ?,documento = ?,telefono_celular = ?,fecha_nacimiento = ?,
  institucion_id = ? WHERE id = ?`, 
  [nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,
    institucion_id,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Estudiante actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/actor/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM actores WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Estudiante eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;