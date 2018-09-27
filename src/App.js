import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./app.css"

class App extends Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

render() {
  
return (
  <Wrapper>
    <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
    {this.state.friends.map(friend => (
      <FriendCard
        clickCount={this.clickCount}
        id={friend.id}
        key={friend.id}
        image={friend.image}
      />
    ))}
  </Wrapper>
   );
  }

 }
export default App;