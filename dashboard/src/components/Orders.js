import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-backend-pkvo.onrender.com/allOrders")
      .then((res) => {
        console.log("Orders:", res.data);
        setOrders(res.data);
      })
      .catch((error) => {
        console.log("Orders Error:", error);
      });
  }, []);

  return (
    <div className="orders">

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <button
            className="btn"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Get started
          </button>
        </div>
      ) : (
        <>
          <h3 className="title">
            Orders ({orders.length})
          </h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>
                      ₹{Number(order.price).toFixed(2)}
                    </td>

                    <td
                      className={
                        order.mode === "BUY"
                          ? "profit"
                          : "loss"
                      }
                    >
                      {order.mode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

    </div>
  );
};

export default Orders;