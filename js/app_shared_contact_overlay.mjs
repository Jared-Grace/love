import { app_shared_contact_prompt_text } from "./app_shared_contact_prompt_text.mjs";
import { app_shared_contact_placeholder_text } from "./app_shared_contact_placeholder_text.mjs";
import { app_shared_contact_send_text } from "./app_shared_contact_send_text.mjs";
import { app_shared_close_text } from "./app_shared_close_text.mjs";
import { app_shared_contact_overlay_thread_render } from "./app_shared_contact_overlay_thread_render.mjs";
import { app_shared_contact_message_add } from "./app_shared_contact_message_add.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_remove } from "./html_remove.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_contact_send } from "./app_shared_contact_send.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_contact_overlay() {
  "an in-app contact screen: a full-screen panel over the current app, so the reader never leaves the PWA (each app is its own narrow-scope standalone PWA, so opening another page would eject them to the browser). Shows what they have written before above a box to write the next one, sends it to the developer's inbox, and keeps their copy. Close returns to the app.";
  "It used to thank them and forget, which read as though the message had gone nowhere. The thread is the same one from whichever app the panel is opened over, because it is filed under this shared code's own name rather than under any one app.";
  "The box starts empty. It used to open pre-filled '<app> app: ' so a reply knew which app they were writing about - but the send records the page address itself, which says that and more, and cannot be edited away by the person typing over it.";
  let backdrop = html_body_div();
  html_style_assign(backdrop, {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "overflow-y": "auto",
    padding: "1.5rem",
    "box-sizing": "border-box",
    "z-index": "1000",
  });
  ("sized by its four edges rather than by the viewport's height, and the one thing that scrolls. A height in viewport units moves when the soft keyboard opens, and a box being typed into that sits inside a second scrolling box within that height is the shape that has twice left a phone keyboard up with the letters going nowhere");
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
  ("the thread sits above the box they write in, the way a conversation does. It is deliberately not a scrolling box of its own - the panel behind it scrolls as one piece, so the box being typed into never sits inside something that can re-lay-out under it");
  let thread = html_div(card);
  html_style_assign(thread, {
    display: "flex",
    "flex-direction": "column",
  });
  app_shared_contact_overlay_thread_render(thread);
  form();
  function form() {
    let prompt = app_shared_contact_prompt_text();
    html_p_text(card, prompt);
    let textarea = html_textarea(card);
    let placeholder = app_shared_contact_placeholder_text();
    html_placeholder(textarea, placeholder);
    app_shared_input_style(textarea);
    ("the box is deliberately not focused as the panel opens. Taking focus in the same moment the panel is built and laid out asks the phone to raise its keyboard against a layout that is still settling, which is the same race that has left keys going nowhere before - so the person taps the box themselves, the way every ordinary page works");
    async function on_send() {
      let message = html_value_get(textarea);
      let nothing = text_empty_is(message);
      if (nothing) {
        html_focus(textarea);
        return;
      }
      await app_shared_contact_send(message);
      ("their copy is kept only once the send has gone through, so the thread shows what actually reached the developer rather than what was typed");
      app_shared_contact_message_add(message);
      html_value_set(textarea, "");
      app_shared_contact_overlay_thread_render(thread);
      html_focus(textarea);
    }
    let left2 = emoji_email();
    let send = app_shared_contact_send_text();
    let text = text_combine(left2, send);
    app_shared_button_green(card, text, on_send);
    let close_text = app_shared_close_text();
    app_shared_button(card, close_text, close);
  }
  return backdrop;
}
