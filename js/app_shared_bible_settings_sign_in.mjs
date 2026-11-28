import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_settings_sign_in_said } from "./app_shared_bible_settings_sign_in_said.mjs";
export async function app_shared_bible_settings_sign_in(container, sign_in) {
  ("The Sign in entry of Settings, for an app that wrote how to sign in (",
    fn_name("app_shared_bible_settings_sign_in_key"),
    "). sign_in is handed the place under the button to draw its form in, and resolves once somebody is signed in; the button then says so with a tick, as the device report does. Pressed while already signed in, it says so at once.");
  arguments_assert(arguments, 2);
  let text = "Sign in";
  let button = app_shared_button_wide(container, text, press);
  let place = html_div(container);
  await app_shared_bible_settings_sign_in_said(button);
  async function press() {
    await sign_in(place);
    await app_shared_bible_settings_sign_in_said(button);
  }
}
