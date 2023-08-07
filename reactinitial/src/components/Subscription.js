import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Subscription() {
  const [email, setEmail] = useState("");
  const [buttonOn, setButtonON] = useState(true);
  const [displaySubs, setDisplaySubs] = useState("none");
  const [emailSent, setEmailSent] = useState(false);
  const [subscribeResponse, setSubscribeResponse] = useState("none");
  const [displayForm, setDisplayForm] = useState("block");

  const emailValidation = (e) => {
    setEmail(e.target.value);

    if (email.includes("@") && email.includes(".")) {
      setButtonON(false);
    } else {
      setButtonON(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplaySubs("block");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplaySubs("none");
    }, 5000);
    return () => clearTimeout(timer);
  }, [emailSent]);

  const sendPost = () => {
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(`Email sent: ${email}`);
      });

    setEmailSent(true);

    setSubscribeResponse("block");
    setDisplayForm("none");
  };

  return (
    <div id="subscribeDiv" style={{ display: `${displaySubs}` }}>
      <Typography variant="h2" sx={{ fontSize: "2.5rem", textAlign: "center" }}>
        Subscribe to our newsletter
      </Typography>
      <form style={{ display: `${displayForm}` }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => {
            emailValidation(e);
          }}
        />

        <Button
          variant="contained"
          disabled={buttonOn}
          onClick={(e) => {
            e.preventDefault();
            sendPost();
          }}
        >
          Subscribe
        </Button>
      </form>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <div style={{ display: `${subscribeResponse}` }}> Subscribed </div>
      </Box>
    </div>
  );
}

export default Subscription;
