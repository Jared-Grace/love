import { equal } from "./equal.mjs";
import { owner_email } from "./owner_email.mjs";
export function owner_is(user) {
  "whether a signed-in user is the site owner, matched by their email address";
  let email = user.email;
  let right = owner_email();
  let is_owner = equal(email, right);
  return is_owner;
}
