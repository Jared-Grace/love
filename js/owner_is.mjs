import { owner_email } from "./owner_email.mjs";
export function owner_is(user) {
  "whether a signed-in user is the site owner, matched by their email address";
  let email = user.email;
  let is_owner = email === owner_email();
  return is_owner;
}
