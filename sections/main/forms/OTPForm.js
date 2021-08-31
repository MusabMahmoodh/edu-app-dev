import IconButton from "@components/buttons/icon-button";
import React from "react";
import OtpInput from "react-otp-input";
import { MdArrowForward } from "react-icons/md";
import { Container, Box, Card, Heading, Text } from "theme-ui";
const OTPForm = ({ OTP, setOTP, confirmOTP }) => {
  return (
    <React.Fragment>
      <Text as="p" variant="heroSecondary">
        Enter your mobile number to <br /> register or login App
      </Text>
      <Box
        sx={{
          margin: ["20px 0", null, null, null, "50px 0"],

          maxWidth: "330px",
          width: "100%",
        }}>
        <form>
          <OtpInput
            value={OTP}
            onChange={(val) => setOTP(val)}
            numInputs={6}
            separator={<span> </span>}
          />
        </form>
      </Box>
      <Box onClick={() => confirmOTP()}>
        <IconButton
          text="Next"
          // width={["100%", "200px", "70%", "300px", null]}
          icon={<MdArrowForward />}
        />
      </Box>
    </React.Fragment>
  );
};

export default OTPForm;
