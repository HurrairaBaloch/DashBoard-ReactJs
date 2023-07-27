import { useEffect, useState } from "react";
import axios from "axios";
export default function RecentOrder() {
  const [recentOrderData, setRecentOrderData] = useState([]);

 useEffect(() => {
   axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then((response) => {
       setRecentOrderData(response.data);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 }, []);

  return (
    <div className="bg-white rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium text-lg">
        Recent Orders
      </strong>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse text-gray-700">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Product ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2 pr-4">Email</th>
              {/* Add pr-4 (padding-right: 1rem) to create some right margin */}
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2">#{order.id}</td>
                <td className="px-4 py-2">#{order.address.zipcode}</td>
                <td className="px-4 py-2">{order.name}</td>
                <td className="px-4 py-2">{order.address.city}</td>
                <td className="px-4 py-2 pr-1">{order.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
