import express from "express";
//creando un router
const router = express.Router();

router.get("/", (req,res)=>{
    res.render("index",{}) //por ahora solo se renderiza la vista, sin pasar objeto {}, despues ... vemos.
})

export default router;