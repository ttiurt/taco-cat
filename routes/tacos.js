import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GETs
router.get('/', tacosCtrl.index)

//POSTs
router.post('/', isLoggedIn, tacosCtrl.create)

export {
  router
}
