import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"; // Assuming you have an authReducer file
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer
     // Assuming 'authReducer' handles the isLoggedIn state
    // Add other reducers if needed
  },
});

export default store;


