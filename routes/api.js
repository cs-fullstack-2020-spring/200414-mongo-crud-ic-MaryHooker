//create route
let express = require('express');
let router = express.Router();

//Create a new video
router.post('/',(req,res)=>{
    res.send(`Created new video`);
})

//Find a video by title
router.get('/:videoTitle',(req,res)=>{
    res.send(`Found new video by title`);
})

//Find all videos
router.get('/',(req,res)=>{
    res.send(`Found all new videos`);
})

//Find a video by title and Update it
router.put('/:videoTitle',(req,res)=>{
    res.send(`Updated video`);
})

//Find video by title and delete it
router.delete('/:videoTitle',(req,res)=>{
    res.send(`Deleted video`);
})

//export route
module.exports = router;