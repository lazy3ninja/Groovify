<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import { Grid, Button, Typography } from "@material-ui/core";
// import { useParams, useNavigate } from "react-router-dom";

// export default function Room() {
//   const { roomCode } = useParams();
//   const navigate = useNavigate();

//   const [state, setState] = useState({
//     votesToSkip: 2,
//     guestCanPause: false,
//     isHost: false,
//   });

//   useEffect(() => {
//     getRoomDetails();
//   }, []);

//   const getRoomDetails = async () => {
//     try {
//       const response = await fetch("/api/get-room" + "?code=" + roomCode);
//       if (!response.ok) {
//         navigate("/");
//         return;
//       }
//       const data = await response.json();
//       setState({
//         votesToSkip: data.votes_to_skip,
//         guestCanPause: data.guest_can_pause,
//         isHost: data.is_host,
//       });
//     } catch (error) {
//       console.error("Error fetching room details:", error);
//       // Handle error
//     }
//   };

//   const leaveButtonPressed = async () => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     };
//     try {
//       console.log("Leaving room...");
//       const response = await fetch("/api/leave-room", requestOptions);
//       if (response.ok) {
//         console.log("Left room successfully");
//         navigate("/");
//       } else {
//         console.error("Failed to leave room. Server response:", response);
//         // Handle error
//       }
//     } catch (error) {
//       console.error("Error leaving room:", error);
//       // Handle error
//     }
//   };
  

//   return (
//     <Grid container spacing={1}>
//       <Grid item xs={12} align="center">
//         <Typography variant="h4" component="h4">
//           Code: {roomCode}
//         </Typography>
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Typography variant="h6" component="h6">
//           Votes: {state.votesToSkip}
//         </Typography>
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Typography variant="h6" component="h6">
//           Guest Can Pause: {state.guestCanPause.toString()}
//         </Typography>
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Typography variant="h6" component="h6">
//           Host: {state.isHost.toString()}
//         </Typography>
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={leaveButtonPressed}
//         >
//           Leave Room
//         </Button>
//       </Grid>
//     </Grid>
//   );
// }
import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import CreateRoomPage from "./CreateRoomPage";
import { useParams, useHistory, navigate } from "react-router-dom";

const Room = ({ leaveRoomCallback }) => {
  const { roomCode } = useParams();
  const [roomDetails, setRoomDetails] = useState({
=======
import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useParams, useNavigate } from "react-router-dom";

export default function Room() {
  const { roomCode } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });
<<<<<<< HEAD
  const [showSettings, setShowSettings] = useState(false);

  const getRoomDetails = async () => {
    try {
      const response = await fetch(`/api/get-room?code=${roomCode}`);
      if (!response.ok) {
        leaveRoomCallback();
=======

  useEffect(() => {
    getRoomDetails();
  }, []);

  const getRoomDetails = async () => {
    try {
      const response = await fetch("/api/get-room" + "?code=" + roomCode);
      if (!response.ok) {
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
        navigate("/");
        return;
      }
      const data = await response.json();
<<<<<<< HEAD
      setRoomDetails({
=======
      setState({
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
        votesToSkip: data.votes_to_skip,
        guestCanPause: data.guest_can_pause,
        isHost: data.is_host,
      });
    } catch (error) {
      console.error("Error fetching room details:", error);
<<<<<<< HEAD
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, [roomCode, leaveRoomCallback]);

  const leaveButtonPressed = () => {
=======
      // Handle error
    }
  };

  const leaveButtonPressed = async () => {
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
<<<<<<< HEAD
    fetch("/api/leave-room", requestOptions).then((_response) => {
      leaveRoomCallback();
      navigate("/");
    });
  };

  const updateShowSettings = (value) => {
    setShowSettings(value);
  };

  const renderSettings = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <CreateRoomPage
            update={true}
            votesToSkip={roomDetails.votesToSkip}
            guestCanPause={roomDetails.guestCanPause}
            roomCode={roomCode}
            updateCallback={getRoomDetails}
          />
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => updateShowSettings(false)}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    );
  };

  const renderSettingsButton = () => {
    return (
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateShowSettings(true)}
        >
          Settings
        </Button>
      </Grid>
    );
  };

  if (showSettings) {
    return renderSettings();
  }
=======
    try {
      console.log("Leaving room...");
      const response = await fetch("/api/leave-room", requestOptions);
      if (response.ok) {
        console.log("Left room successfully");
        navigate("/");
      } else {
        console.error("Failed to leave room. Server response:", response);
        // Handle error
      }
    } catch (error) {
      console.error("Error leaving room:", error);
      // Handle error
    }
  };
  
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
<<<<<<< HEAD
          Votes: {roomDetails.votesToSkip}
=======
          Votes: {state.votesToSkip}
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
<<<<<<< HEAD
          Guest Can Pause: {roomDetails.guestCanPause.toString()}
=======
          Guest Can Pause: {state.guestCanPause.toString()}
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
<<<<<<< HEAD
          Host: {roomDetails.isHost.toString()}
        </Typography>
      </Grid>
      {roomDetails.isHost ? renderSettingsButton() : null}
=======
          Host: {state.isHost.toString()}
        </Typography>
      </Grid>
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={leaveButtonPressed}
        >
          Leave Room
        </Button>
      </Grid>
    </Grid>
  );
<<<<<<< HEAD
};

export default Room;


=======
}
>>>>>>> c4d18f6911e186bc88bb67b3158065dff18b1c8e
