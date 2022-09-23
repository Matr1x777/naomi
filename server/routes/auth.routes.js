const Router = require("express");
const User = require("./../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const {check, validationResult} = require("express-validator")
const router = new Router()
const authMiddleware = require('./../middleware/auth.middleware')

router.post('/registration',
    [
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3,max:12})
    ],
    async (req,res) =>{
    try{
        console.log(req.body)
        const  errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({message:"Uncorrect request",errors})
        }

        const {login, password,secretWorld,answer} = req.body

        const candidate = await User.findOne({login})
        if(candidate){
            return res.status(400).json({message:"User with login ${login} already exist"})
        }

        const hashPassword = await bcrypt.hash(password,8)
        const user = new User({login,password:hashPassword,secretWorld,answer})
        await user.save()
        return res.json({message:' User was created'})

    }catch (e){
        console.log(e)
        res.send({message:"Server error"})
    }
})

router.post('/login',async (req,res) =>{
        try{
            const {login, password} = req.body
            const user = await  User.findOne({login})
            if(!user){
                return res.status(404).json({message:'User not found'})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if(!isPassValid){
                return res.status(400).json({message:'Invalid password'})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user:{
                    id:user.id,
                    login: user.login,
                    secretWorld:user.secretWorld,
                    answer: user.answer,
                }
            })

        }catch (e){
            console.log(e)
            res.send({message:"Server error"})
        }
    })

router.get('/auth',authMiddleware,
    async (req,res) =>{
    try{
        const user = await User.findOne({_id: req.user.id})
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
        return res.json({
            token,
            user:{
                id:user.id,
                login: user.login,
                secretWorld:user.secretWorld,
                answer: user.answer,
            }
        })
    }catch (e){
        console.log(e)
        res.send({message:"Server error"})
    }
})
router.post('/refresh-user',async (req,res) =>{
    try{
        const {userId} = req.body
        const user = await  User.findOne({_id:userId})
        return res.json({
            user:{
                id:user.id,
                login: user.login,
                secretWorld:user.secretWorld,
                answer: user.answer,
            }
        })

    }catch (e){
        console.log(e)
        res.send({message:"Користувача не завантажено"})
    }
})
router.post('/edit-password', async (req,res) =>{
    try{
        const {userId,oldPassword,newPassword} = req.body
        const user = await  User.findOne({_id:userId})
      /*  const isPassValid = bcrypt.compareSync(oldPassword, user.password)
        if(!isPassValid){
            return res.status(400).json({message:'Невірний пароль'})
        }*/
        const hashPassword = await bcrypt.hash(newPassword,8)
        const editPassword = await User.updateOne({_id:userId},
            {$set:{
                    password:hashPassword
                }});
        return res.json({
            editPassword
        })
    }catch (e){

    }
})
router.post('/edit-secret', async (req,res) =>{
    try{
        const {userId,secretWorld,secretAnswer} = req.body
        const editSecret = await User.updateOne({_id:userId},
            {$set:{
                    secretWorld:secretWorld,
                    answer:secretAnswer
                }});
        return res.json({
            editSecret
        })
    }catch (e){

    }
})
router.post('/find',async (req,res) =>{
        try{
            const {login} = req.body
            const user = await User.findOne({login: login})
            return res.json({
                user:{
                    id:user._id,
                    login:user.login,
                    secretWorld:user.secretWorld,
                    answer:user.answer
                }
            })
        }catch (e){
           /* console.log(e)*/
            res.send({message:"Користувача не знайдено"})
        }
    })
module.exports = router