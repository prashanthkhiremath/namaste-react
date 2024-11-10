import { useEffect, useState } from "react";

const User = ({ name, location } = props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    setInterval(() => {
      console.log("Namaste React");
    }, 1000);
    console.log("useEffect");

    return () => {
      console.log("use Effect Return");
    };
  }, []);

  console.log("render");
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @mepraash</h4>
    </div>
  );
};

export default User;
