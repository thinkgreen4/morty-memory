import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./app.css"

class App extends Component {
  state = {
    friends,
    count: 0
  };
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
changeState = id => {
  const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });

};
render() {
  return (
      <Wrapper>
    <Title>Image Guess Game   Click each image once, click the same image and lose!         Score:{this.state.count}    Top Score:{}</Title>
    {this.state.friends.map(friend => (
   <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
             />
    ))};
  </Wrapper>
   );
  }
}

export default App;
