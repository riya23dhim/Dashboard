// 1️⃣  Import mongoose
import mongoose from "mongoose";

// 2️⃣  Build a schema object (blueprint)
const orderSchema = new mongoose.Schema(
  {
    /* ---------- EVERY FIELD YOU SAW IN ordersData ---------- */

    //   OrderID: 10248,OrderID: 10248,
      // CustomerName: 'Vinet',
  
      // TotalAmount: 32.38,
      // OrderItems: 'Fresh Tomato',
      // Location: 'USA',
      // Status: 'pending',
      // StatusBg: '#FB9678',
      // ProductImage:
      //try to keep field s as camel case
    OrderID: {
      type: Number,       // <- Number because 10248, 345653, etc.
      required: true,
     
          // <- no two orders should reuse the same OrderID
    },

    //   CustomerName: 'Vinet',
    CustomerName: {
      type: String,
      required: true,
      trim: true,         // <- remove leading/trailing spaces
    },

    //   TotalAmount: 32.38,
    TotalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    //   OrderItems: 'Fresh Tomato',
    OrderItems: {
      type: String,
      required: true,
    },

    //   Location: 'USA',
    Location: String,     // <- optional, so no “required”

    /*  Status: 'pending',
        StatusBg: '#FB9678', */
    Status: {
      type: String,
      enum: ["pending", "complete", "active", "canceled", "rejected"],
      default: "pending",
    },
    StatusBg: String,

    /*  ProductImage: product6  OR an http URL */
    ProductImage: String,
  },

  /*  Schema options */
  {
    timestamps: true,     // creates createdAt & updatedAt automatically
    versionKey: false,   
  }
);

//   Turn schema into a Model class
export default mongoose.model("Order", orderSchema);
