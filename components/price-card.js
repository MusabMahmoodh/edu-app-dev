import { Box, Card, Text, Heading, Button, Image } from "theme-ui";
import React from "react";

export default function PriceCard({
  data: { header, name, description, title },
}) {
  return (
    <Card
      className={header ? "package__card active" : "package__card"}
      sx={styles.pricingBox}>
      {header && <Text sx={styles.header}>{header}</Text>}
      <Image
        sx={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        src="https://source.unsplash.com/random/250x150"
      />
      <Box sx={{ p: "0 15px" }}>
        <Box className="package__header" sx={styles.cardHeader}>
          <Text as="small" sx={{ color: "primary" }}>
            {title}
          </Text>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>

          <Text as="p" sx={{ color: "primary" }}>
            {description}
          </Text>

          <Text as="small" sx={{ color: "primary" }}>
            Read More...
          </Text>
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: "0 0 2px 0",
    width: "250px",
    backgroundColor: "background",
    // mb: "40px",
    mt: "40px",
    // mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1,
    },
    "&:hover": {
      "&:before": {
        opacity: 0,
      },
    },
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    left: "15px",
    letterSpacing: "-.14px",
    px: "12px",
  },
  cardHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
  },
};
