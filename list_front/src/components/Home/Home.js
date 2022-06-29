import React, { Component } from "react";
import Card from 'react-bootstrap/Card'


class Home extends Component {
  render() {
    return (
      <div>
<h1 className="m-5">Home</h1>
<Card className="m-5" bg="primary" text="white" body >This is the Magic Disappearing List App</Card>
<Card className="m-5" border="dark" body>This was created for people who can NOT do the same thing every day. <br/> Unlike other list  apps, this will be cleared EVERY 24 HOURS to allow for an entirely new day to be planned. <br/> This is not a habits app. <br/> While you will be allowed to save actions to repeat on a daily basis, the point is to plan out one day at a time. This is to allow the user to sit down once a day and really decide how to spend their time. 

 </Card>
      </div >

    );
  }
}

export default Home;
