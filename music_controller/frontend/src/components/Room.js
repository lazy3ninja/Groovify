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
//     showSettings: false,
//     spotifyAuthenticated: false,
//   });

//   useEffect(() => {
//     const getRoomDetails = async () => {
//       try {
//         const response = await fetch(`/api/get-room?code=${roomCode}`);
//         if (!response.ok) {
//           leaveRoomCallback();
//           navigate("/");
//           return;
//         }
//         const data = await response.json();
//         setRoomDetails({
//           votesToSkip: data.votes_to_skip,
//           guestCanPause: data.guest_can_pause,
//           isHost: data.is_host,
//         });
//         if (data.is_host) {
//           authenticateSpotify();
//         }
//       } catch (error) {
//         console.error("Error fetching room details:", error);
//       }
//     };
//     getRoomDetails();
//   }, [roomCode]);

//   const authenticateSpotify = () => {
//     fetch("/spotify/is-authenticated")
//       .then((response) => response.json())
//       .then((data) => {
//         setRoomDetails((prevRoomDetails) => ({
//           ...prevRoomDetails,
//           spotifyAuthenticated: data.status,
//         }));
//         console.log(data.status);
//         if (!data.status) {
//           fetch("/spotify/get-auth-url")
//             .then((response) => response.json())
//             .then((data) => {
//               window.location.replace(data.url);
//             });
//         }
//       });
//   };

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
//     setRoomDetails((prevRoomDetails) => ({
//       ...prevRoomDetails,
//       showSettings: value,
//     }));
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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React, { useState, useEffect } from "react";
// import { Grid, Button, Typography } from "@material-ui/core";
// import CreateRoomPage from "./CreateRoomPage";
// import MusicPlayer from "./MusicPlayer";
// import { useNavigate, useParams } from "react-router-dom";

// function Room() {
//   const { roomCode } = useParams();
//   const navigate = useNavigate();
//   const [votesToSkip, setVotesToSkip] = useState(2);
//   const [guestCanPause, setGuestCanPause] = useState(false);
//   const [isHost, setIsHost] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);
//   const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
//   const [song, setSong] = useState({});

//   useEffect(() => {
//     const interval = setInterval(getCurrentSong, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     getRoomDetails();
//   }, []);

//   const getRoomDetails = () => {
//     fetch("/api/get-room" + "?code=" + roomCode)
//       .then((response) => {
//         if (!response.ok) {
//           navigate("/");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setVotesToSkip(data.votes_to_skip);
//         setGuestCanPause(data.guest_can_pause);
//         setIsHost(data.is_host);
//         if (data.is_host) {
//           authenticateSpotify();
//         }
//       });
//   };

//   const authenticateSpotify = () => {
//     fetch("/spotify/is-authenticated")
//       .then((response) => response.json())
//       .then((data) => {
//         setSpotifyAuthenticated(data.status);
//         if (!data.status) {
//           fetch("/spotify/get-auth-url")
//             .then((response) => response.json())
//             .then((data) => {
//               window.location.replace(data.url);
//             });
//         }
//       });
//   };

//   const getCurrentSong = () => {
//     fetch("/spotify/current-song")
//       .then((response) => {
//         if (!response.ok) {
//           return {};
//         } else {
//           return response.json();
//         }
//       })
//       .then((data) => {
//         setSong(data);
//       });
//   };

//   const leaveButtonPressed = () => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     };
//     fetch("/api/leave-room", requestOptions).then((_response) => {
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
//             votesToSkip={votesToSkip}
//             guestCanPause={guestCanPause}
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
//       <MusicPlayer {...song} />
//       {isHost ? renderSettingsButton() : null}
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

// export default Room;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import CreateRoomPage from "./CreateRoomPage";
import MusicPlayer from "./MusicPlayer";
import { useNavigate, useParams } from "react-router-dom";

function Room() {
  const { roomCode } = useParams();
  const navigate = useNavigate();
  const [roomDetails, setRoomDetails] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
    showSettings: false,
    spotifyAuthenticated: false,
    song: {}
  });

  useEffect(() => {
    const interval = setInterval(getCurrentSong, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getRoomDetails();
  }, []);

  const getRoomDetails = () => {
    fetch("/api/get-room" + "?code=" + roomCode)
      .then((response) => {
        if (!response.ok) {
          navigate("/");
        }
        return response.json();
      })
      .then((data) => {
        setRoomDetails({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host
        });
        if (data.is_host) {
          authenticateSpotify();
        }
      });
  };

  const authenticateSpotify = () => {
    fetch("/spotify/is-authenticated")
      .then((response) => response.json())
      .then((data) => {
        setRoomDetails(prevRoomDetails => ({
          ...prevRoomDetails,
          spotifyAuthenticated: data.status
        }));
        if (!data.status) {
          fetch("/spotify/get-auth-url")
            .then((response) => response.json())
            .then((data) => {
              window.location.replace(data.url);
            });
        }
      });
  };

  const getCurrentSong = () => {
    fetch("/spotify/current-song")
      .then((response) => {
        if (!response.ok) {
          return {};
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setRoomDetails(prevRoomDetails => ({
          ...prevRoomDetails,
          song: data
        }));
      });
  };

  const leaveButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/api/leave-room", requestOptions).then((_response) => {
      navigate("/");
    });
  };

  const updateShowSettings = (value) => {
    setRoomDetails(prevRoomDetails => ({
      ...prevRoomDetails,
      showSettings: value
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
      <MusicPlayer {...roomDetails.song} />
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
}

export default Room;

