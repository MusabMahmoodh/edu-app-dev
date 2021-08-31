import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "layout/layout";
import Banner from "../sections/main/banner";


import CoreFeature from "../sections/core-feature";

import Package from "../sections/package";


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="EduApp" />
        <Banner />
     
        <CoreFeature />
    
        <Package />
    
      </Layout>
    </ThemeProvider>
  );
}
