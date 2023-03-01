const mongoose = require('mongoose')

const user = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        default:this.firstName+" "+this.lastName
    },
    age:Number,
    bio:String,
    following:{
        type:Array,
        default:[this.username]
    },
    followers:{
        type:Array,
        default:[]
    },
    likes:{
        type:Array,
        default:[]
    },
    dob:Date,
    createdOn:{
        type:Date,
        default:Date.now
    },
    username:{
        type:String,
        required:true
    },
    ratings:{
        type:Array,
        default:[]
    },
    reviews:{
        type:Array,
        default:[]
    },
    watchlist:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    },
    profilepic:String
})

module.exports = mongoose.model('User', user);