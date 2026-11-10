import { equal } from "./equal.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_contact_message_display } from "./app_shared_contact_message_display.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_color_green_deep } from "./app_shared_color_green_deep.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export async function app_messenger_replies_proposed_preview() {
  "Proposed messenger replies waiting for your yes, on the sandbox app at hash messenger_replies: each conversation's messages since your last, the reply proposed under them exactly as it would be sent, and one approve button. Approving sends nothing - it only lets the sending command send those words.";
  "★ IT RUNS ON THE SERVING MACHINE AND SHOWS THE ANSWER HERE: the messages and replies are in the private folder nothing serves, so this works on the dev server and nowhere else, on purpose.";
  "★ THE YES IS GIVEN TO THE WORDS ON THE SCREEN: the button hands back the exact text drawn, and the machine refuses it if the proposal changed in the meantime.";
  "The reply keeps its line breaks, because each answer is its own paragraph and that is part of what is being approved.";
  let root = html_body_div();
  html_font_sans_serif_set_html();
  html_style_overflow_wrap(root, "anywhere");
  html_p_text(root, "Messenger replies waiting on you.");
  let status = html_p_text(root, "Reading...");
  let listed = html_div(root);
  let gray = app_shared_color_gray_dark();
  let waiting = await app_shared_api_named(
    fn_name("messenger_replies_proposed_waiting"),
    [],
  );
  html_text_content_set(
    status,
    equal(waiting.length, 1)
      ? "1 reply waiting."
      : waiting.length + " replies waiting.",
  );
  for (let one of waiting) {
    let head = html_p_text(listed, "conversation " + one.id);
    html_style_font_size(head, "0.8em");
    html_font_color_set(head, gray);
    html_style_margin_top(head, "2.5em");
    for (let m of one.messages) {
      let bubble = app_shared_contact_message_display("right", m.text, listed);
      let background = app_shared_button_uncolored_background_color();
      html_style_background_color_set(bubble, background);
    }
    let mine = app_shared_contact_message_display("left", "", listed);
    let words = html_div_text(mine, one.proposed);
    html_style_assign(words, {
      "white-space": "pre-wrap",
    });
    let row = html_div(listed);
    html_style_margin_top(row, "0.6em");
    let said = html_p_text(row, "not approved yet");
    html_style_font_size(said, "0.8em");
    html_font_color_set(said, gray);
    let holder = html_div(row);
    async function on_press() {
      let answer = await app_shared_api_named(
        fn_name("messenger_reply_proposed_approve"),
        [one.id, one.proposed],
      );
      if (answer.approved) {
        html_clear(holder);
        html_text_content_set(said, "approved by you - it can be sent now");
        let color = app_shared_color_green_deep();
        html_font_color_set(said, color);
        return;
      }
      html_text_content_set(said, "not approved: " + answer.why);
      let color2 = app_shared_color_red();
      html_font_color_set(said, color2);
    }
    app_shared_button_uncolored(holder, "approve this reply", on_press);
  }
}
