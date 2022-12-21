import store from "store";
import { setUser } from "store/auth";

export default userHandle = (data) => {
  store.dispatch(setUser(data));
};
