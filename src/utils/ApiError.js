class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error = [],
        stack =""
    ){
        super(message)
        this.statusCode =statusCode
        this.data=null
        this.messsage =message
        this.success=false;
        this.error =errors
if(stack){
    this.stack=stack
}
else{
    Error.captureStackTrace(this,this.constuructor)
}

    }
}
export {ApiError}