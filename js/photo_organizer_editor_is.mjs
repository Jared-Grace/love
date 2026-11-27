import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_auth_user_or_null } from "./firebase_auth_user_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { owner_email } from "./owner_email.mjs";
export async function photo_organizer_editor_is() {
  "Whether the person on this page may change the photo organizer: only the owner, signed in. Anybody else, signed in or not, only looks - the permission rules refuse their changes anyway, so offering the buttons would only show them failing.";
  arguments_assert(arguments, 0);
  let user = await firebase_auth_user_or_null();
  if (null_is(user)) {
    return false;
  }
  let right = owner_email();
  let eq = equal(user.email, right);
  return eq;
}
