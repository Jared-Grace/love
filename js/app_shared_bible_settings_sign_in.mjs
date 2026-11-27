import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_div } from "./html_div.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_shared_bible_settings_sign_in(container, sign_in) {
  ("The Sign in entry of Settings, for an app that wrote how to sign in (",
    fn_name("app_shared_bible_settings_sign_in_key"),
    "). sign_in is handed the place under the button to draw its form in, and resolves once somebody is signed in; the button then says so with a tick, as the device report does. Pressed while already signed in, it says so at once.");
  arguments_assert(arguments, 2);
  let text = "Sign in";
  let button = app_shared_button_wide(container, text, press);
  let place = html_div(container);
  async function press() {
    await sign_in(place);
    let left = emoji_check();
    let signed_text = text_combine(left, "Signed in");
    html_text_set(button, signed_text);
  }
}
