import { list_join_newline } from "./list_join_newline.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { reply_approved_verdict } from "./reply_approved_verdict.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_clear } from "./html_clear.mjs";
import { equal } from "./equal.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_color_green_deep } from "./app_shared_color_green_deep.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_reply_rules_approve_button(
  root,
  f_name,
  lines,
  approvals,
  diff,
) {
  "The one control on this bench: a reviewer saying that this file, as the lines above it stand, is right.";
  "★ IT IS PER FILE AND NOT PER CHANGE, because a change is several files and a reader gets through them one at a time. A single button at the foot of a change asks for a verdict on all of it at once, which leaves two ways to answer and both are bad: pass files that have not been read, or put the whole change down and read every file again on the next visit. A button under each file lets the reading be stopped and picked up, and records exactly as much as has actually been read and no more.";
  "★ WHAT IS PASSED IS THE TEXT ABOVE THE BUTTON AND NOT THE FILE ON DISK. They are the same thing at the moment of reading and can stop being so a minute later, and the reviewer can only have meant the lines they were looking at. Storing what the file says instead would record a verdict on something nobody read.";
  "A file already passed says so instead of offering the button again, because offering it again asks a question that has been answered and makes a page of answered questions look like a page of waiting ones.";
  "A file passed in a wording it no longer has says that in red, and it is the loudest thing on the screen on purpose. It is the state where somebody could act on a permission that was given for different words.";
  "★ A FILE PASSED AS IT STANDS HAS ITS LINES PUT AWAY, and nothing else is. The lines are the long part of the page and a passed file is a question already answered, so leaving them out is what lets the files still waiting be found by scrolling. A file passed in a wording it no longer has shows its lines again, because those are exactly the lines that now need reading.";
  let text = list_join_newline(lines);
  let approved = property_get_or_null(approvals, f_name);
  let verdict = reply_approved_verdict(text, approved);
  let row = html_div(root);
  html_style_margin_top(row, "0.6em");
  let said = html_p_text(row, "");
  html_style_font_size(said, "0.8em");
  html_style_margin(said, "0");
  let holder = html_div(row);
  function state_show(now) {
    html_clear(holder);
    let passed = equal(now, "approved");
    html_display_none_or_block(passed, diff);
    if (passed) {
      let text2 = text_combine_multiple([
        f_name,
        " is approved by you, as it stood. Its lines are put away.",
      ]);
      html_text_content_set(said, text2);
      let green = app_shared_color_green_deep();
      html_font_color_set(said, green);
      return;
    }
    let stale = equal(now, "stale");
    if (stale) {
      html_text_content_set(
        said,
        "You approved this file in a wording it no longer has, so what is above it is not approved.",
      );
      let red = app_shared_color_red();
      html_font_color_set(said, red);
    }
    let fresh = equal(now, "none");
    if (fresh) {
      let text3 = text_combine_multiple([f_name, " is not approved yet."]);
      html_text_content_set(said, text3);
      let gray = app_shared_color_gray_dark();
      html_font_color_set(said, gray);
    }
    async function on_press() {
      let f = fn_name("reply_approved_write");
      await app_shared_api_named(f, [f_name, text]);
      state_show("approved");
      ("Every approval may be the last one a change was waiting on, so each one asks for the finished changes to be put into the code, and says so here when one was.");
      let f_apply = fn_name("reply_proposals_approved_apply");
      let applied = await app_shared_api_named(f_apply, []);
      let none = list_empty_is(applied);
      if (none) {
        return;
      }
      let titles = list_join_comma_space(applied);
      let put = text_combine_multiple([
        "Approved by you, and that was the last file. Now in the code: ",
        titles,
        ".",
      ]);
      html_text_content_set(said, put);
    }
    ("The button names the file it approves, because a page of cards is a page of identical buttons otherwise, and the one being pressed may be the only one on the screen with the name scrolled away above it.");
    let label = text_combine_multiple(["approve ", f_name]);
    app_shared_button_uncolored(holder, label, on_press);
  }
  state_show(verdict);
  return row;
}
