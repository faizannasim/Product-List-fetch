import React from 'react';


const UserData = ({ users }) => {
  const tableData = users.map((currentUser) => {
    return {
      id: currentUser.id,
      title: currentUser.title,
      description: currentUser.description,
      price: currentUser.price,
      brand: currentUser.brand,
      category: currentUser.category,
    };
  });

  return (
    <tbody>
      {tableData.map((data, index) => {
        return (
          <tr key={index} className="bg-white hover:bg-gray-100">
            <td className="px-6 py-4">{data.id}</td>
            <td className="px-6 py-4">{data.title}</td>
            <td className="px-6 py-4">{data.description}</td>
            <td className="px-6 py-4">{data.price}</td>
            <td className="px-6 py-4">{data.brand}</td>
            <td className="px-6 py-4">{data.category}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default UserData;