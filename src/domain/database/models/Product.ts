import mongoose from 'mongoose';

export interface IproductInput {
    name: string;
    price: Number;
    description: string;
    category: string;
    image: string;
    type: string;
}

export interface ProductDocument extends IproductInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    image: {
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

// create index for search
ProductSchema.index({ type: 1, category: 1 });

// presave function for increase price
ProductSchema.pre('save', function(next) {
    // tax 7%
    this.price = this.price + (this.price * 0.07);
    next();
});

const ProductModel = mongoose.model<ProductDocument>('Product', ProductSchema);
export default ProductModel
        