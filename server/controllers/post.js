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

 const createPost = (req,res) =>{

    res.send('create Post')
 }




