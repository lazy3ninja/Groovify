import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useParams, useNavigate } from "react-router-dom";

export default function Room() {
  const { roomCode } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    votesToSkip: 2,
    guestCanPause: false,
    isHost: false,
  });

  useEffect(() => {
    getRoomDetails();
  }, []);

  const getRoomDetails = async () => {
    try {
      const response = await fetch("/api/get-room" + "?code=" + roomCode);
      if (!response.ok) {
        navigate("/");
        return;
      }
      const data = await response.json();
      setState({
        votesToSkip: data.votes_to_skip,
        guestCanPause: data.guest_can_pause,
        isHost: data.is_host,
      });
    } catch (error) {
      console.error("Error fetching room details:", error);
      // Handle error
    }
  };

  const leaveButtonPressed = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
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
  

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h4" component="h4">
          Code: {roomCode}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Votes: {state.votesToSkip}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Guest Can Pause: {state.guestCanPause.toString()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
          Host: {state.isHost.toString()}
        </Typography>
      </Grid>
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
