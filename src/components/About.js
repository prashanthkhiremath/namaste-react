import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        {/* <UserClass name={"First"} location={"Bangalore"} /> */}
        <User name={"First"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
