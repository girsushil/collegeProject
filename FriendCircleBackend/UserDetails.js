const mongoose= require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    name: String,
    gender: String,
    email: String,
    password: String,

},{
    collection: "UserInfo",
}
);
mongoose.model("UserInfo", UserDetailsSchema);