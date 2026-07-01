import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  salePrice?: number;
  sku: string;
  stock: number;
  category: mongoose.Types.ObjectId;
  brand: string;
  material?: string;
  countryOfOrigin: string;
  images: string[];
  thumbnail: string;
  colors: string[];
  sizes: string[];
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  tags: string[];
  averageRating: number;
  reviewCount: number;
  isActive: boolean;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },

    description: { type: String, required: true },
    shortDescription: { type: String, default: "" },

    price: { type: Number, required: true, min: 0 },
    salePrice: { type: Number, min: 0 },

    sku: { type: String, required: true, unique: true, uppercase: true, trim: true },
    stock: { type: Number, required: true, min: 0, default: 0 },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    brand: { type: String, required: true, trim: true },
    material: { type: String, default: "" },
    countryOfOrigin: { type: String, default: "Ghana" },

    images: [{ type: String }],
    thumbnail: { type: String, required: true },

    colors: [{ type: String }],
    sizes: [{ type: String }],

    featured: { type: Boolean, default: false },
    bestSeller: { type: Boolean, default: false },
    newArrival: { type: Boolean, default: true },

    tags: [{ type: String }],

    averageRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);