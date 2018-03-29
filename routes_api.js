const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        asignatura: "Programación Avanzada",
        semester: "11",
        city: "Pasto",
        status: "works¡¡"

    });
});
module.exports = router;