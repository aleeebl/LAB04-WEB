import {Router} from "express"


const router = Router()


router.get("/list/producto", async (req, res) => {
        try{
            res.render("producto/list")
        }catch(err){
            res.status(500).json({message:err.message});
        }
    })

router.get("/addProducto", async (req, res) => {
        res.render("producto/add")
})


router.post("/addProducto", async (req, res) => {
    try{
        res.redirect("/list/producto")
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get("/editProducto", async (req, res) => {
    res.render("producto/edit")
})


router.post("/editProducto", async (req, res) => {
try{
    res.redirect("/list/producto")
}catch(err){
    res.status(500).json({message:err.message});
}
})

export default router;