import { Typography } from "@mui/material";
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
        <input
          type="email"
          onChange={(e) => {
            emailValidation(e);
          }}
        ></input>
        <button
          disabled={buttonOn}
          onClick={(e) => {
            e.preventDefault();
            sendPost();
          }}
        >
          Subscribe
        </button>
      </form>
      <div style={{ display: `${subscribeResponse}` }}> Subscribed </div>
    </div>
  );
}

export default Subscription;
