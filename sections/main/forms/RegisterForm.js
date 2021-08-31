import IconButton from "@components/buttons/icon-button";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { MdArrowForward } from "react-icons/md";
import { Box, Label, Input, Button, Text } from "theme-ui";
const RegisterForm = ({ regData, setRegData, onRegisterSubmit }) => {
  return (
    <React.Fragment>
      <Text as="p" variant="heroSecondary">
        Register yourself with us!
      </Text>
      <Box
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          onRegisterSubmit();
        }}>
        <Label htmlFor="firstname">First Name</Label>
        <Input
          name="firstname"
          id="firstname"
          mb={3}
          value={regData.firstName}
          onChange={(e) =>
            setRegData({
              firstName: e.target.value,
              lastName: regData.lastName,
            })
          }
        />
        <Label htmlFor="lastname">Last Name</Label>
        <Input
          name="lastname"
          id="lastname"
          mb={3}
          value={regData.lastName}
          onChange={(e) => {
            setRegData({
              lastName: e.target.value,
              firstName: regData.firstName,
            });
          }}
        />

        <Button>Register</Button>
      </Box>
    </React.Fragment>
  );
};

export default RegisterForm;
