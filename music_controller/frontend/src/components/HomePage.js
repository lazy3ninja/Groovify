// import React, { useState, useEffect } from "react";
// import { Grid, Button, ButtonGroup, Typography } from "@mui/material";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import RoomJoinPage from "./RoomJoinPage";
// import CreateRoomPage from "./CreateRoomPage";
// import Room from "./Room";

// export default function HomePage() {
//   const [roomCode, setRoomCode] = useState(null);

//   useEffect(() => {
//     fetch("/api/user-in-room")
//       .then((response) => response.json())
//       .then((data) => {
//         setRoomCode(data.code);
//       });
//   }, []);

//   const renderHomePage = () => {
//     return (
//       <Grid container spacing={3}>
//         <Grid item xs={12} align="center">
//           <Typography variant="h3">
//             House Party
//           </Typography>
//         </Grid>
//         <Grid item xs={12} align="center">
//           <ButtonGroup disableElevation variant="contained" color="primary">
//             <Button color="primary" component={Link} to="/join">
//               Join a Room
//             </Button>
//             <Button color="secondary" component={Link} to="/create">
//               Create a Room
//             </Button>
//           </ButtonGroup>
//         </Grid>
//       </Grid>
//     );
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={roomCode ? <Navigate to={`/room/${roomCode}`} /> : renderHomePage()} />
//         <Route path="/join" element={<RoomJoinPage />} />
//         <Route path="/create" element={<CreateRoomPage />} />
//         <Route path="/room/:roomCode" element={<Room />} />
//       </Routes>
//     </Router>
//   );
// }
import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("/api/user-in-room");
      const data = await response.json();
      this.setState({
        roomCode: data.code,
      });
    } catch (error) {
      console.error("Error fetching user-in-room:", error);
    }
  }

  renderHomePage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" component={Link} to="/join">
              Join a Room
            </Button>
            <Button color="secondary" component={Link} to="/create">
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };

  clearRoomCode = () => {
    this.setState({
      roomCode: null,
    });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              this.state.roomCode ? <Navigate to={`/room/${this.state.roomCode}`} /> : this.renderHomePage()
            }
          />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route
            path="/room/:roomCode"
            element={<Room leaveRoomCallback={this.clearRoomCode} />}
          />
        </Routes>
      </Router>
    );
  }
}

