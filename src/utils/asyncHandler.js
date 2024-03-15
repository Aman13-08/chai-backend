const asyncHandler = (requestHandelr) => {
    return   (req,res,next)=>{
       Promise.resolve(requestHandelr(req,res,next)).catch((err)=> next(err))
   }
      
   }
   
   export {asyncHandler}


// export {asyncHandler}
// const asyncHandler = () => {}
// const asyncHandler = (func) => async() => {}

// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
