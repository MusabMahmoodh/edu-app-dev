import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "layout/layout";
import Banner from "../sections/main/banner";

import CoreFeature from "../sections/core-feature";

import Package from "../sections/package";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { fetchUser, auth } from "../firebase/initFirebase";

export default function IndexPage() {
  const [user, loading, error] = useAuthState(auth);
  const [checkUserLoading, setCheckUserLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const getUserStatus = async () => {
      if (!loading && user) {
        const uid = user.uid;
        const isUserCreated = await fetchUser(uid);
        if (isUserCreated) {
          await router.push("/app");

          setCheckUserLoading(false);
        } else {
          setCheckUserLoading(false);
        }
      } else if (!loading && !user) {
        setCheckUserLoading(false);
      }
    };
    getUserStatus();
  }, [loading, user]);

  if (!checkUserLoading) {
    console.log("State changed");
    return (
      <ThemeProvider theme={theme}>
        <SEO title="Home" />
        <Layout>
          <Banner user={user} router={router} />
          <CoreFeature />
          <Package />
        </Layout>
      </ThemeProvider>
    );
  }
  return <h5>Loading...</h5>;
}
