import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "primary",
        }}>
        {title}
      </Heading>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.subTitle",
          color: isWhite ? "white" : "primary",
          opacity: isWhite ? 0.8 : 1,
        }}>
        {slogan}
      </Text>
    </Box>
  );
}
