import { useEffect, useState } from "react";
import UserData from "./component/Userdata";



const API = "https://dummyjson.com/products";

const App = () => { 
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.products.length > 0) {
        setUsers(data.products);
      }
      console.log(data);
    } catch (e) {
      console.error(e)
    }
  }


  useEffect(() => {
    fetchUsers(API);
  }, [])
  return <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Category</th>
        </tr>
      </thead>
      
        <UserData users={users} />

    </table>
  </>
}

export default App;
