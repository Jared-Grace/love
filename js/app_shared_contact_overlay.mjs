import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_clear } from "./html_clear.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { equal } from "./equal.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_contact_send } from "./app_shared_contact_send.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_contact_overlay(from) {
  "an in-app contact screen: a full-screen panel over the current app, so the reader never leaves the PWA (each app is its own narrow-scope standalone PWA, so opening another page would eject them to the browser). Pre-filled '<app> app: ', sends the message to the developer's inbox, then thanks them. Close returns to the app.";
  let backdrop = html_body_div();
  html_style_assign(backdrop, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    padding: "1.5rem",
    "box-sizing": "border-box",
    "z-index": "1000",
  });
  let card = html_div(backdrop);
  html_style_assign(card, {
    background: "white",
    color: "black",
    "border-radius": "1.5rem",
    padding: "1.5rem",
    width: "100%",
    "max-width": "32rem",
    "box-sizing": "border-box",
    display: "flex",
    "flex-direction": "column",
    gap: "1rem",
  });
  function close() {
    html_remove(backdrop);
  }
  let prefix = text_combine(from, " app: ");
  form();
  function form() {
    html_clear(card);
    html_p_text(card, "Is there anything you would like to tell the developer?");
    let textarea = html_textarea(card);
    html_placeholder(textarea, "Please write your message here");
    app_shared_input_style(textarea);
    html_value_set(textarea, prefix);
    html_focus(textarea);
    async function on_send() {
      let message = html_value_get(textarea);
      let nothing = text_empty_is(message);
      if (nothing) {
        html_focus(textarea);
        return;
      }
      let unchanged = equal(message, prefix);
      if (unchanged) {
        "they have not written anything past the '<app> app: ' prefix yet, so keep the form rather than send an empty note";
        html_focus(textarea);
        return;
      }
      await app_shared_contact_send(from, message);
      thanks();
    }
    app_shared_button_green(
      card,
      text_combine(emoji_email(), " Send"),
      on_send,
    );
    app_shared_button(card, "Close", close);
  }
  function thanks() {
    html_clear(card);
    html_p_text(
      card,
      "Thank you. I have received your message. Lord-willing, I will read it and reply.",
    );
    app_shared_button_green(card, "Close", close);
  }
  return backdrop;
}
