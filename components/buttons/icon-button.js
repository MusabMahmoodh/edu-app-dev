import { jsx, Box, Container, Flex, Button } from "theme-ui";

export default function IconButton({ text, icon, width }) {
  return (
    <Button
      aria-label="Call Us"
      sx={{
        ...styles.icon__btn,
        width: width ? width : ["200px", null, null, null, null],
      }}
      variant="primary">
      <Box sx={styles.iconLeftStyle}></Box>
      {text}
      <Box sx={styles.iconRightStyle}>{icon && icon}</Box>
    </Button>
  );
}

const styles = {
  icon__btn: {
    flexShrink: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    p: ["6px 8px ", null, null, null, "8px 12px"],

    // mr: [15, 20, null, null, 0],
    // ml: ["auto", null, null, null, 0],
  },
  iconRightStyle: {
    "& > svg": {
      margin: "auto",
      background: "#3F5CE7",
      color: "#FFFFFF",
      p: ["1px", null, null, null, "5px"],
      borderRadius: "100%",
      width: ["18px", null, null, null, "30px"],
      height: ["18px", null, null, null, "30px"],
      mb: "0",
      mr: "0",
      mt: "0",
    },
  },
};
