import { jsx, Container, Box } from "theme-ui";
import Image from "next/image";
import TextFeature from "components/text-feature";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import FeatureThumb from "assets/core-feature.png";
import IconButton from "components/buttons/icon-button";
// import shapePattern from "assets/shape-pattern2.png";

const data = {
  subTitle: "AM I LIMITED TO WEB?",
  title: "An app specially designed for Students and Tutors",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
          <Box sx={styles.btnGroup}>
            <Box sx={{ width: ["100%", null, null, "48%"], mb: "10px" }}>
              <IconButton
                text="Get it on IOS"
                icon={<FaAppStore />}
                width="100%"
              />
            </Box>
            <Box sx={{ width: ["100%", null, null, "48%"] }}>
              <IconButton
                text="Get it on Android"
                width="100%"
                icon={<FaGooglePlay />}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          {/* <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],

    p: 0,
  },
  btnGroup: {
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    justifyContent: "space-between",
  },
  contentBox: {
    flexShrink: 1,

    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, "50%"],
    pb: ["50px", "60px", null, 0],
    mx: 0,
    ml: 0,
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",

    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
