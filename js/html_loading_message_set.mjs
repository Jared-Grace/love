import { arguments_assert } from "./arguments_assert.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { null_is } from "./null_is.mjs";
export function html_loading_message_set(text) {
  "$plain text";
  "Changes the line under the loading spinner while it is showing, for a wait long enough that the person should see it moving - such as how many photos have gone of how many. With no cover showing it does nothing, and the next cover starts with its usual line again, since each is built fresh.";
  arguments_assert(arguments, 1);
  let overlay = html_loading_state().overlay;
  if (null_is(overlay)) {
    return;
  }
  let message = overlay.querySelector("p");
  if (null_is(message)) {
    return;
  }
  message.textContent = text;
}
