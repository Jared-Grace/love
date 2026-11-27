import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_auth_user_or_null } from "./firebase_auth_user_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { each } from "./each.mjs";
import { html_display_block } from "./html_display_block.mjs";
export async function app_bible_record_signed_in_show(elements) {
  "Shows elements that start hidden, once it is known somebody is signed in, and leaves them hidden when nobody is (human 2026-11-27: show Send and Back up only when signed in). Signing in is in Settings, so a stranger never sees a way to send.";
  arguments_assert(arguments, 1);
  let user = await firebase_auth_user_or_null();
  if (null_is(user)) {
    return;
  }
  each(elements, html_display_block);
}
