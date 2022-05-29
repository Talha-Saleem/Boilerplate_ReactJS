import axios from "axios";
import { CREATE_USER } from "../../config/constants/url.constants";
import { auth } from "../../config/firebase.includes";
import { CurrentUser } from "../../model/user/user.model";

const createUser = async (currentUser: CurrentUser) => {
  // await setDoc(doc(collectionRef, currentUser.uid), {
  //     email:currentUser.email,
  //     role: currentUser.role,
  //     uid: currentUser.uid
  //   });

  try {
    await axios.post(CREATE_USER, currentUser);
    await auth.currentUser?.getIdToken(true);
  } catch (err) {
    alert(err);
  }
};

export { createUser };
