const PostMessage = require('../models/PostModel');

const getPosts =  async (req,res )  => {

    try{

      const PostMessages = await PostMessage.find();
      
       console.log(postMessage);


       res.status(200).json(postMessages)
       

   }

   catch(err){

     res.status(404).json('messages not found')

   }


     



  }

const createPost = async  (req,res) =>{

 const post = req.body;

     const newPost = new PostMessage(post)

  try{

        await newPost.save()

        res.status(201).json(newPost);

  }

   catch(err){

     res.status(409).json({message:err.message})

   }
 }



 module.exports = { getPosts,createPost}

