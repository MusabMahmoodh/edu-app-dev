import { signOut } from "firebase/auth";
import { auth } from "../../firebase/initFirebase";
import React from "react";
import { useRouter } from "next/router";
import {
  Customer,
  CurrencyType,
  PayhereCheckout,
  CheckoutParams,
} from "payhere-js-sdk";
import { useAuthState } from "react-firebase-hooks/auth";
// import { fetchUser, auth } from "../../firebase/initFirebase";
export default function IndexPage() {
  const [user, loading, error] = useAuthState(auth);
  function onPayhereCheckoutError(errorMsg) {
    alert(errorMsg);
  }

  async function checkout() {
    // using async await
    try {
      const customer = new Customer({
        first_name: "Test",
        last_name: "User",
        phone: "+94771234567",
        email: "plumberhl@gmail.com",
        address: "Test rd",
        city: "Puttlam",
        country: "Sri Lanka",
      });
      const checkoutData = new CheckoutParams({
        returnUrl: "https://eduappdev.netlify.app/app",
        cancelUrl: "https://eduappdev.netlify.app/app",
        notifyUrl: "http://localhost:8080/notify",
        order_id: "112233",
        itemTitle: "Demo Item",
        currency: CurrencyType.LKR,
        amount: 1000,
      });

      const checkout = new PayhereCheckout(
        customer,
        checkoutData,
        onPayhereCheckoutError
      );
      checkout.start();
    } catch (err) {
      console.log(err);
    }
  }
  const router = useRouter();
  const userSignOut = () => {
    signOut(auth)
      .then(async () => {
        await router.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <h4>DashBoard</h4>
      {/* {JSON.stringify(user)} */}
      <h6>Courses you have enrolled</h6>
      <div style={{ display: "flex" }}>
        <div style={{ border: "1px solid", padding: "10px", margin: "5px" }}>
          <h3>Course 1</h3>
          <button disabled>paid</button>
        </div>
        <div style={{ border: "1px solid", padding: "10px", margin: "5px" }}>
          <h3>Course 2</h3>
          <button onClick={checkout}>purchase</button>
        </div>
      </div>

      <button onClick={userSignOut}>Sign Out</button>
    </div>
  );
}
