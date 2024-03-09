// // import React, { useState, useEffect } from "react";
// // import { Grid, Button, Typography } from "@material-ui/core";
// // import { useParams, useNavigate } from "react-router-dom";

// // export default function Room() {
// //   const { roomCode } = useParams();
// //   const navigate = useNavigate();

// //   const [state, setState] = useState({
// //     votesToSkip: 2,
// //     guestCanPause: false,
// //     isHost: false,
// //   });

// //   useEffect(() => {
// //     getRoomDetails();
// //   }, []);

// //   const getRoomDetails = async () => {
// //     try {
// //       const response = await fetch("/api/get-room" + "?code=" + roomCode);
// //       if (!response.ok) {
// //         navigate("/");
// //         return;
// //       }
// //       const data = await response.json();
// //       setState({
// //         votesToSkip: data.votes_to_skip,
// //         guestCanPause: data.guest_can_pause,
// //         isHost: data.is_host,
// //       });
// //     } catch (error) {
// //       console.error("Error fetching room details:", error);
// //       // Handle error
// //     }
// //   };

// //   const leaveButtonPressed = async () => {
// //     const requestOptions = {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //     };
// //     try {
// //       console.log("Leaving room...");
// //       const response = await fetch("/api/leave-room", requestOptions);
// //       if (response.ok) {
// //         console.log("Left room successfully");
// //         navigate("/");
// //       } else {
// //         console.error("Failed to leave room. Server response:", response);
// //         // Handle error
// //       }
// //     } catch (error) {
// //       console.error("Error leaving room:", error);
// //       // Handle error
// //     }
// //   };
  

// //   return (
// //     <Grid container spacing={1}>
// //       <Grid item xs={12} align="center">
// //         <Typography variant="h4" component="h4">
// //           Code: {roomCode}
// //         </Typography>
// //       </Grid>
// //       <Grid item xs={12} align="center">
// //         <Typography variant="h6" component="h6">
// //           Votes: {state.votesToSkip}
// //         </Typography>
// //       </Grid>
// //       <Grid item xs={12} align="center">
// //         <Typography variant="h6" component="h6">
// //           Guest Can Pause: {state.guestCanPause.toString()}
// //         </Typography>
// //       </Grid>
// //       <Grid item xs={12} align="center">
// //         <Typography variant="h6" component="h6">
// //           Host: {state.isHost.toString()}
// //         </Typography>
// //       </Grid>
// //       <Grid item xs={12} align="center">
// //         <Button
// //           variant="contained"
// //           color="secondary"
// //           onClick={leaveButtonPressed}
// //         >
// //           Leave Room
// //         </Button>
// //       </Grid>
// //     </Grid>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import { Grid, Button, Typography } from "@material-ui/core";
// import CreateRoomPage from "./CreateRoomPage";
// import { useParams, useNavigate } from "react-router-dom";

// const Room = ({ leaveRoomCallback }) => {
//   const { roomCode } = useParams();
//   const navigate = useNavigate();

//   const [roomDetails, setRoomDetails] = useState({
//     votesToSkip: 2,
//     guestCanPause: false,
//     isHost: false,
//   });
//   const [showSettings, setShowSettings, spotifyAuthenticated] = useState(false);

//   const getRoomDetails = async () => {
//     try {
//       const response = await fetch(`/api/get-room?code=${roomCode}`);
//       if (!response.ok) {
//         leaveRoomCallback();
//         navigate("/");
//         return;
//       }
//       const data = await response.json();
//       setRoomDetails({
//         votesToSkip: data.votes_to_skip,
//         guestCanPause: data.guest_can_pause,
//         isHost: data.is_host,
//       });
//     } catch (error) {
//       console.error("Error fetching room details:", error);
//     }
//   };

//   useEffect(() => {
//     getRoomDetails();
//   }, [roomCode, leaveRoomCallback]);

//   const authenticateSpotify = () => {
    
//   }

//   const leaveButtonPressed = () => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     };
//     fetch("/api/leave-room", requestOptions).then((_response) => {
//       leaveRoomCallback();
//       navigate("/");
//     });
//   };

//   const updateShowSettings = (value) => {
//     setShowSettings(value);
//   };

//   const renderSettings = () => {
//     return (
//       <Grid container spacing={1}>
//         <Grid item xs={12} align="center">
//           <CreateRoomPage
//             update={true}
//             votesToSkip={roomDetails.votesToSkip}
//             guestCanPause={roomDetails.guestCanPause}
//             roomCode={roomCode}
//             updateCallback={getRoomDetails}
//           />
//         </Grid>
//         <Grid item xs={12} align="center">
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => updateShowSettings(false)}
//           >
//             Close
//           </Button>
//         </Grid>
//       </Grid>
//     );
//   };

//   const renderSettingsButton = () => {
//     return (
//       <Grid item xs={12} align="center">
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => updateShowSettings(true)}
//         >
//           Settings
//         </Button>
//       </Grid>
//     );
//   };

//   if (showSettings) {
//     return renderSettings();
//   }

//   return (
//     <Grid container spacing={1}>
//       <Grid item xs={12} align="center">
//         <Typography variant="h4" component="h4">
//           Code: {roomCode}
//         </Typography>
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Typography variant="h6" component="h6">
//           Votes: {roomDetails.votesToSkip}
//         </Typography>
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Typography variant="h6" component="h6">
//           Guest Can Pause: {roomDetails.guestCanPause.toString()}
//         </Typography>
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Typography variant="h6" component="h6">
//           Host: {roomDetails.isHost.toString()}
//         </Typography>
//       </Grid>
//       {roomDetails.isHost ? renderSettingsButton() : null}
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
// };

// export default Room;
import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import CreateRoomPage from "./CreateRoomPage";
import { useParams, useNavigate } from "react-router-dom";

const Room = ({ leaveRoomCallback }) => {
  const { roomCode } = useParams();
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
    showSettings: false,
    spotifyAuthenticated: false,
  });

  useEffect(() => {
    const getRoomDetails = async () => {
      try {
        const response = await fetch(`/api/get-room?code=${roomCode}`);
        if (!response.ok) {
          leaveRoomCallback();
          navigate("/");
          return;
        }
        const data = await response.json();
        setRoomDetails({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
        if (data.is_host) {
          authenticateSpotify();
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };
    getRoomDetails();
  }, [roomCode]);

  const authenticateSpotify = () => {
    fetch("/spotify/is-authenticated")
      .then((response) => response.json())
      .then((data) => {
        setRoomDetails((prevRoomDetails) => ({
          ...prevRoomDetails,
          spotifyAuthenticated: data.status,
        }));
        console.log(data.status);
        if (!data.status) {
          fetch("/spotify/get-auth-url")
            .then((response) => response.json())
            .then((data) => {
              window.location.replace(data.url);
            });
        }
      });
  };

  const leaveButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/api/leave-room", requestOptions).then((_response) => {
      leaveRoomCallback();
      navigate("/");
    });
  };

  const updateShowSettings = (value) => {
    setRoomDetails((prevRoomDetails) => ({
      ...prevRoomDetails,
      showSettings: value,
    }));
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

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Votes: {roomDetails.votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Guest Can Pause: {roomDetails.guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Host: {roomDetails.isHost.toString()}
        </Typography>
      </Grid>
      {roomDetails.isHost ? renderSettingsButton() : null}
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
};

export default Room;


