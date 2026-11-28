import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_auth_user_or_null } from "./firebase_auth_user_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_text_set } from "./html_text_set.mjs";
export async function app_shared_bible_settings_sign_in_said(button) {
  "Says on the Sign in button that somebody is signed in, once that is known, and leaves it saying Sign in when nobody is (human 2026-11-28: Settings said Sign in while Send and Back up were shown - the person was signed in, and nothing said so).";
  arguments_assert(arguments, 1);
  let user = await firebase_auth_user_or_null();
  if (null_is(user)) {
    return;
  }
  let left = emoji_check();
  let signed_text = text_combine(left, "Signed in");
  html_text_set(button, signed_text);
}
