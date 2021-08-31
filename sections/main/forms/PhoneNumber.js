import IconButton from "@components/buttons/icon-button";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { MdArrowForward } from "react-icons/md";
import { Container, Box, Card, Heading, Text } from "theme-ui";
const PhoneNumberForm = ({ mobNumber, setMobNumber, onSignInSubmit, ref }) => {
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
          <div id="recaptcha-container" ref={ref}></div>
          <PhoneInput
            // onlyCountries={["lk"]}
            country="lk"
            value={mobNumber}
            onChange={setMobNumber}
            // disableDropdown={true}
            countryCodeEditable={false}
            placeholder="Mobile Number"
            containerStyle={{
              maxWidth: "600px",
              width: "100%",
              borderRadius: "16px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            }}
            inputStyle={{
              width: "100%",
              height: "42px",
              fontSize: "13px",
              paddingLeft: "48px",
              borderRadius: "16px",
              border: "none",
              borderTopRightRadius: "16px",
              borderBottomRightRadius: "16px",
              backgroundColor: "#fff",
            }}
            buttonStyle={{
              height: "42px",
              fontSize: "13px",
              border: "none",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              backgroundColor: "#fff",
            }}
          />
        </form>
      </Box>
      <Box onClick={() => onSignInSubmit()}>
        <IconButton
          text="Next"
          // width={["100%", "200px", "70%", "300px", null]}
          icon={<MdArrowForward />}
        />
      </Box>
    </React.Fragment>
  );
};

export default PhoneNumberForm;
