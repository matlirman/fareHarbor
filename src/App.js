import React, { useCallback, useState, useEffect } from "react";
import './App.css';
import Pusher from 'pusher-js';
import axios from "axios"

function App() {
  const [userName, setUserName] = useState("")
  const [nickname, setNickname] = useState("")
  const [page, setPage] = useState("login")
  const [currentUser, setCurrentUser] = useState("")
  const [channel, setChannel] = useState()

  const pusher = new Pusher('915969ca71380d782b9e', {
    cluster: 'us2',
    authEndpoint: 'https://liogec05ek.execute-api.us-east-1.amazonaws.com/prod/pusher/auth'
  });

  const login = () => {
    console.log("ehre")
    const pusher = new Pusher('915969ca71380d782b9e', {
      cluster: 'us2',
      authEndpoint: 'https://liogec05ek.execute-api.us-east-1.amazonaws.com/prod/pusher/auth'
    });

    const channel = pusher.subscribe('my-channel', {
      userID: 1,
      user_info: {
        userName: "yerbamati",
        nickname: "mati",
        image: "https://maxinbodyshop.s3.us-east-2.amazonaws.com/builder/10/Background/beige.png"
      }
    })

    console.log(channel)

    channel.bind('user-connected', function(data) {
      console.log('User connected:', data);
    });

    setChannel( {channel} )

    // channel.bind('pusher:subscription_succeeded', (data) => {
    //   console.log('Connected to channel');
    //   console.log(data)
    // });
    //
    // pusher.connection.bind('error', (err) => {
    //   console.log(err);
    // });
  }

  const login2 = () => {
    const channel2 = pusher.subscribe('my-channel', {
      userID: 2,
      user_info: {
        userName: "aguCab",
        nickname: "agu",
        image: "https://maxinbodyshop.s3.us-east-2.amazonaws.com/builder/10/Background/red.png"
      }
    });

  }

  const scream = (data) => {
    console.log('')
  }

  return (
    <div className="App">
      <div style={{display: "flex"}}>
          <button onClick={()=> login2()}>
            login2
          </button>
          <button onClick={()=> login()}>
            Login1
          </button>
      </div>
      { page === "login" ?
          <div>
            <p>
              userName
            </p>
            <input onChange={(e) => setCurrentUser(e.target.value)} type="text" name="userName">
            </input>
            <br></br><br></br>
            <button onClick={() => {login()}}>
              Lets login!
            </button>
          </div>
          :
          <div>
            <div>
              <p>
                userName
              </p>
              <input type="text" name="userName">
              </input>
            </div>
            <div>
              <p>
                nickname
              </p>
              <input type="text" name="nickname">
              </input>
            </div>
            <br></br>
            <button>
              Lets do it
            </button>
          </div>
      }
    </div>

  );
}

export default App;
