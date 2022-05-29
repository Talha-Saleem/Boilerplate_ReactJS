import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../config/firebase.includes";
import { CurrentUser } from "../../model/user/user.model";
import { createUser } from "../user/api.user";

const verifyEmail = () => async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      await sendEmailVerification(user);
    }
  } catch (e: any) {
    alert(e.message);
  }
};

const login = async (email: string, pass: string) => {
  try {
    console.log("login trying");
    await signInWithEmailAndPassword(auth, email, pass);
    console.log("login success");
    verifyEmail();
    console.log("verification email sent");
    return "success";
  } catch (e: any) {
    // alert(e.message);
    return e.message;
  }
};

const updateUserIDToken = () => {
  if (auth.currentUser) {
    auth.currentUser.getIdToken(true);
  }
};

const signUp = async (email: string, pass: string, userRole: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    const user: CurrentUser = { email, role: userRole, uid: res.user.uid };
    await createUser(user);
    // enforcing token refresh
    // await auth.currentUser?.getIdToken(true);
    return "success";
  } catch (e: any) {
    return e.message;
  }
};

const logOut = async () => {
  try {
    await auth.signOut();
    console.log("user sign out");
  } catch (e: any) {
    alert(e.message);
  }
};

const getUserClaims = async () => {
  let role = null;
  await auth.currentUser?.getIdToken(true);
  auth.currentUser?.getIdTokenResult().then((result) => {
    console.log("role is...: ", result.claims.role);
    if (result.claims.role && typeof result.claims.role === "string") {
      role = result.claims.role;
    }
  });

  return role;
};

export { login, signUp, logOut, verifyEmail, getUserClaims, updateUserIDToken };
