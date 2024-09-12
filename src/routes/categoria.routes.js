import {Router} from "express"


const router = Router()


router.get("/list/categoria", async (req, res) => {
        try{
            res.render("categoria/list")
        }catch(err){
            res.status(500).json({message:err.message});
        }
    })

router.get("/addCategoria", async (req, res) => {
        res.render("categoria/add")
})


router.post("/addCategoria", async (req, res) => {
    try{
        res.redirect("/add/categoria")
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get("/editCategoria", async (req, res) => {
    res.render("categoria/edit")
})


router.post("/editCategoria", async (req, res) => {
try{
    res.redirect("/edit/categoria")
}catch(err){
    res.status(500).json({message:err.message});
}
})

export default router;