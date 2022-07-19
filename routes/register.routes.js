import { Router } from "express";
import {createUser} from "../services/users.service.js"
const router = Router()

router.get('/register', (req,res) => {
    res.render('register')
})

router.post('/register', (req,res) => {
    const {name,surname,username,password} = req.body
    createUser(name,surname,username,password)
    res.send('register')
})

export default router