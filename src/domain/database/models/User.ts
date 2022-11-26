import mongoose from 'mongoose';

export interface IUserInput {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    address: string;
    role: string;
}

export interface UserDocument extends IUserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// presave function for create fullname
UserSchema.pre('save', function(next) {
    this.fullname = `${this.firstname} ${this.lastname}`;
    next();
});

// presave function for hash password
UserSchema.pre('save', function(this: UserDocument, next) {
    this.password = this.password;
    next();
});



// function for compare password
UserSchema.methods.comparePassword = function(password: string) {
    return this.password === password;
}

// create index for search
UserSchema.index({ email: 1 });
// this mean that email is unique and can't be duplicate 
// we can use this for search index

export default mongoose.model<UserDocument>('User', UserSchema);