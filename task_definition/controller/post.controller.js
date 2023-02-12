
const req = require('express/lib/request');
const res = require('express/lib/response');
const models = require('../models');

function save(req,res){
    const task = {
        task:req.body.task,
        is_completed:req.body.is_completed,
        end_date:req.body.end_date,
        userId: 1
    }

// POST API request
models.Post.create(task).then(result => {
    res.status(201).json ({
        message:"post created succesfully",
        post:result
    });
}).catch(error=> {
    res.status(500).json ({
        message:"something went wrong",
        error:error
    });
});
}

function show(req,res) {
    const id = req.params.id;

// GET API request by ID
models.Post.findByPk(id).then(result =>{
    if(result){
        res.status(200).json(result);
    }else {
        res.status(404).json({
            message:"post not found"
        });
    }
}).catch(error =>{
    res.status(500).json({
        message:"Something went wrong"
    })
});
}

// GET API request for all data
function index (req,res){
    models.Post.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message:"something went wrong"
        })
    });

}

// UPDATE request for all data
function update(req,res){
    const id = req.params.id;
    const updatedPost = {
        task: req.body.task,
        is_completed: req.body.is_completed,
        end_date: req.body.end_date
    }
    
    const  userId= 1;

models.Post.update(updatedPost,{where: {id:id,userId: userId}}).then(result => {
    res.status(200).json ({
        message:"post created succesfully",
        post:result
    });
}).catch(error=> {
    res.status(500).json ({
        message:"something went wrong",
        error:error
    });
})
}

// DELETE request for all data
function destroy(req,res){
    const id=req.params.id;
    const userId=1;

    models.Post.destroy({where : {id:id, userId:userId}}).then(result =>{
        res.status(200).json({
            message:"post deleted successfully"
        });
    }).catch(error =>{
        res.status(500).json({
            message:"Something went wrong"
        });
    })
}



module.exports={
    save:save,
    show:show,
    index:index,
    update:update,
    destroy:destroy
}

