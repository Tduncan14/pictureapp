import React from 'react';
import Post from './Post/Post';

import {useSelector} from 'react-redux';



// import useStyles from './style.';



const Posts = () =>{

    const posts = useSelector((state) => state.posts)

       
    console.log(posts)
 

    // const classes = useStyles();


    return(
        <div>
         Posts

         <Post/>
         <Post/>
        </div>
    )

}



export default Posts