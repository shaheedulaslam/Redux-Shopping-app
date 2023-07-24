// import React from "react";
// import Header from "./Header";
// import Products from "./Products";
// import "./Layout.css";
// import CartItems from "./CartItems";
// import { useSelector } from "react-redux";
// const Layout = () => {
//   let total = 0;
//   const itemsList = useSelector((state)=>state.cart.itemsList)
//   itemsList.forEach(items => {
//     total += items.totalPrice
//   });
//   const showCart = useSelector((state)=>state.cart.showCart)

//   return (
//     <React.Fragment>
//       <div className="layout">
//         <Header />
//         <Products />
//       {showCart?<CartItems/>:''}
//         <div className="total-price">
//           <h3>Total: ${total.toFixed()}</h3>
//           <button className="orderBtn">Place Order</button>
//         </div>{" "}
//       </div>
//     </React.Fragment>
//   );
// };

// export default Layout;

import React from "react";
import Header from "./Header";
import Products from "./product/Products";
import "./Layout.css";
import CartItems from "./cart/CartItems";
import { useSelector } from "react-redux";

const Layout = () => {
  const itemsList = useSelector((state) => state.cart.itemsList);
  const showCart = useSelector((state) => state.cart.showCart);

  // Calculate the total price using the 'reduce' function
  const total = itemsList.reduce((acc, item) => acc + item.totalPrice, 0);
  console.log(total,"price");

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart ? <CartItems /> : ""}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;

