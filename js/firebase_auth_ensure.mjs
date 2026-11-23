import { getAuth } from "firebase/auth";
import { firebase_auth_user_or_null } from "./firebase_auth_user_or_null.mjs";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
import { html_clear } from "./html_clear.mjs";
import { firebase_login_email } from "./firebase_login_email.mjs";
export async function firebase_auth_ensure(container) {
  "resolve the logged-in user; if none, render an inline email/password login into container and resolve after sign-in";
  let user = await firebase_auth_user_or_null();
  if (user) {
    return user;
  }
  let app = await firebase_app_initialize();
  let auth = getAuth(app);
  html_clear(container);
  let signed_in = await firebase_login_email(container, auth);
  html_clear(container);
  return signed_in;
}
