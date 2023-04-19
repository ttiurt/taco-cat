import { Taco } from '../models/taco.js'

function index(req, res){
  Taco.find({})
  .populate('owner')
  .then(tacos => {
    console.log(tacos)
    res.render('tacos/index', {
      tacos,
      title: 'Tacos'
    })
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/')
  })
}

function create(req, res){
  console.log('CREATING')
  console.log(req.body)
}

export{
  index,
  create,
}