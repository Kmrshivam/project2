import React, { useState, useEffect } from 'react'

const ApiFetch = () => {

    const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://assessment.api.vweb.app/orders")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h1 className="text-center">Storing Product Id in Table</h1>
      <br />
      <div className="container">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Order_id</th>
            <th scope="col">Product_id</th>
            <th scope="col">Quantity</th>
            <th scope="col">User_id</th>
            <th scope="col">Order_Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.order_id}</td>
              <td>{item.product_id}</td>
              <td>{item.quantity}</td>
              <td>{item.user_id}</td>
              <td>{item.order_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ApiFetch