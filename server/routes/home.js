import {Router} from 'express'


let router = Router()


router.get('/', (req, res, next) => {
  res.render('home', { title: 'React Express Hotloader' });
})


export default router
