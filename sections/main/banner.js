import { jsx } from "theme-ui";
import Image from "next/image";
import { Container, Box, Card, Heading } from "theme-ui";

import HeroImg from "assets/hero_img.png";

import { useEffect, useRef, useState } from "react";

// import { db } from "../../firebase/initFirebase";
import {
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, createUser, fetchUser } from "../../firebase/initFirebase";

import PhoneNumberForm from "./forms/PhoneNumber";
import OTPForm from "./forms/OTPForm";
import RegisterForm from "./forms/RegisterForm";
export default function Banner() {
  const [mobNumber, setMobNumber] = useState();
  const [formState, setFormState] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [OTP, setOTP] = useState("");
  const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
  });
  const element = useRef(null);

  const setUpRecaptcha = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit((next = true));
          },
        },
        auth
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSignInSubmit = async (next) => {
    setIsLoading(true);
    // e.preventDefault();
    if (!next) {
      setUpRecaptcha();
    }

    const phoneNumber = `+${mobNumber}`;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setFormState(2);
        setIsLoading(false);
        // ...
        // const code = getCodeFromUserInput();
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        setIsLoading(false);
        window.recaptchaVerifier?.render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        });
        console.log(error);
      });
    setIsLoading(false);
  };

  const onOTPsubmit = () => {
    setIsLoading(true);
    window.confirmationResult
      .confirm(OTP)
      .then(async (result) => {
        // User signed in successfully.
        const user = result.user;

        fetchUser(user.uid);
        setFormState(3);
        setIsLoading(false);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        setIsLoading(false);
        window.recaptchaVerifier?.render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        });
        console.log(error);
      });
    setIsLoading(false);
  };

  const registerUser = () => {
    setIsLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        const isUserCreated = await createUser(uid, {
          ...regData,
          phoneNumber: `+${mobNumber}`,
        });
        if (isUserCreated) {
          setIsLoading(false);
          setFormState(4);
        } else {
          setIsLoading(false);
          setFormState(1);
        }
        // ...
      } else {
        setIsLoading(false);
      }
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const isUserCreated = await fetchUser(uid);

        if (isUserCreated) {
          setFormState(4);
          setIsLoading(false);
        } else {
          setFormState(3);
          setIsLoading(false);
        }
        setIsLoading(false);
        // ...
      } else {
        // User is signed out
        // ...
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <section sx={styles.banner} id="home">
      <Image
        src={HeroImg}
        layout={"fill"}
        objectFit={"cover"}
        priority="true"
        loading="eager"
      />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}></Box>
        <Box sx={styles.formContainer}>
          <Card sx={styles.formCard}>
            <Heading as="h1" variant="heroPrimary">
              Ready to rock’in the class?
            </Heading>
            {isLoading ? (
              <h5>Loading...</h5>
            ) : formState === 1 ? (
              <PhoneNumberForm
                mobNumber={mobNumber}
                setMobNumber={setMobNumber}
                onSignInSubmit={onSignInSubmit}
                ref={element}
              />
            ) : formState === 2 ? (
              <OTPForm OTP={OTP} setOTP={setOTP} confirmOTP={onOTPsubmit} />
            ) : formState === 3 ? (
              <RegisterForm
                regData={regData}
                setRegData={setRegData}
                onRegisterSubmit={registerUser}
              />
            ) : (
              <h3>User logged in</h3>
            )}
          </Card>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["120px", "125px", "125px", "130px", null, null],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",

    zIndex: 2,
    minHeight: "100vh",
    height: "calc(0.5609 * 100vw)",
  },
  containerBox: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7],
  },
  formContainer: {
    width: ["100%", null, null, "48%", null, null, null, null],

    zIndex: "8888",

    maxWidth: "600px",

    flexShrink: 0,
    mb: [7, null, 60, 0],
  },

  contentBox: {
    width: ["100%", null, null, "48%", null, null, null, null],
    display: ["none", null, null, "block", null, null, null, null],
    flexShrink: 0,
    mb: [7, null, 60, 0],
  },

  formCard: {
    display: "flex",
    // alignItems: "flex-start",
    justifyContent: "center",

    alignItems: "center",
    flexDirection: "column",
    transition: "all 0.3s",
    backgroundColor: "background",
    borderRadius: "16px",
    padding: [" 12px 30px", null, null, null, , "56px 64px ", null],
  },
};
