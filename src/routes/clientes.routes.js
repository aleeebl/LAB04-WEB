import {Router} from "express"


const router = Router()

router.get("/list", async (req, res) => {
        try{
            res.render("clientes/list")
        }catch(err){
            res.status(500).json({message:err.message});
        }
    })

router.get("/list/categoria", async (req, res) => {
        try{
            res.render("categoria/list")
        }catch(err){
            res.status(500).json({message:err.message});
        }
    })

router.get("/list/producto", async (req, res) => {
        try{
            res.render("producto/list")
        }catch(err){
            res.status(500).json({message:err.message});
        }
    })

router.get("/add", async (req, res) => {
        res.render("clientes/add")
})


router.post("/add", async (req, res) => {
    try{
        res.redirect("/list")
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get("/edit", async (req, res) => {
    res.render("clientes/edit")
})


router.post("/edit", async (req, res) => {
try{
    res.redirect("/list")
}catch(err){
    res.status(500).json({message:err.message});
}
})

export default router;