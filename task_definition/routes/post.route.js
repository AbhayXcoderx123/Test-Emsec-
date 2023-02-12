const express=require('express');
const taskscontroller = require('../controller/post.controller');

const router = express.Router();

router.post("/", taskscontroller.save);
router.get("/",taskscontroller.index);
router.get("/:id",taskscontroller.show);
router.patch("/:id",taskscontroller.update);
router.delete("/:id",taskscontroller.destroy);

module.exports= router;
