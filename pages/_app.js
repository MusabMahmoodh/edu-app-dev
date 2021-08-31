import "react-multi-carousel/lib/styles.css";
import "react-phone-input-2/lib/style.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
// import initFirebase from "../firebase/initFirebase";

export default function CustomApp({ Component, pageProps }) {
  // initFirebase();
  return <Component {...pageProps} />;
}
