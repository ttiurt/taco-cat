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
  req.body.owner = req.user.profile._id
  req.body.tasty = !!req.body.tasty
  console.log(req.body)
  Taco.create(req.body)
  .then(taco => {
    res.redirect('/tacos')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
  Taco.findById(req.params.tacoId)
  .populate('owner')
  .then(taco => {
    res.render('tacos/show', {
      taco,
      title: 'Taco Show'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export{
  index,
  create,
  show,
}