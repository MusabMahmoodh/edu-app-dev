import { jsx } from "theme-ui";
import Image from "next/image";
import { Container, Box, Card, Heading, Text } from "theme-ui";
import { MdArrowForward } from "react-icons/md";
import HeroImg from "assets/hero_img.png";
import IconButton from "components/buttons/icon-button";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

export default function Banner() {
  const [value, setValue] = useState();
  return (
    <section sx={styles.banner} id="home">
      <Image src={HeroImg} layout={"fill"} objectFit={"cover"} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}></Box>
        <Box sx={styles.formContainer}>
          <Card sx={styles.formCard}>
            <Heading as="h1" variant="heroPrimary">
              Ready to rock’in the class?
            </Heading>
            <Text as="p" variant="heroSecondary">
              Enter your mobile number to <br /> register or login App
            </Text>
            <Box sx={{ margin: ["20px 0", null, null, null, "50px 0"] }}>
              <PhoneInput
                onlyCountries={["lk"]}
                country="lk"
                value={value}
                onChange={setValue}
                disableDropdown={true}
                countryCodeEditable={false}
                placeholder="Mobile Number"
                containerStyle={{
                  width: "100%",
                  maxWidth: "300px",
                }}
                inputStyle={{
                  width: "100%",
                  height: "35px",
                  fontSize: "13px",
                  paddingLeft: "48px",
                  borderRadius: "5px",
                }}
              />
            </Box>
            <Box>
              <IconButton
                text="Next"
                // width={["100%", "200px", "70%", "300px", null]}
                icon={<MdArrowForward />}
              />
            </Box>
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
    padding: ["30px 12px", null, null, null, , "81px 64px", null],
  },
};
