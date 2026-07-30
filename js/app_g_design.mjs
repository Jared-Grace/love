import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { markdown_render } from "./markdown_render.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { app_g_dev_overlay } from "./app_g_dev_overlay.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export async function app_g_design() {
  ("the #design dev screen: every memory note about this game's design, gathered by ",
    fn_name("g_design_notes"),
    " and read here. one collapsible card per note - its name and one-line description always showing, the whole note underneath when you open it - so the design can be read in the game itself rather than from the files.");
  ("the notes live outside this repo and are never bundled, so this asks the dev api for them. a page with no dev api behind it says so gently instead of showing an empty screen.");
  let div = app_g_dev_overlay("Design");
  let f_name = fn_name("g_design_notes");
  let notes = await catch_null_async(read);
  async function read() {
    let r = await api_read(f_name, []);
    return r;
  }
  if (not(notes)) {
    html_p_text(
      div,
      "The design notes live with this project on the computer it is developed on, so they are only here while it is running. Start the dev server and open this again.",
    );
    return;
  }
  function note_body(text) {
    "the note text with its leading YAML frontmatter (--- name/description/metadata ---) removed: that block is already shown as the card's header and description, so rendering it again as a paragraph is noise. only strips a fence at the very top; a note without one is returned unchanged.";
    let fence = "---";
    let left = text.slice(0, 3);
    let starts_fenced = equal(left, fence);
    if (not(starts_fenced)) {
      return text;
    }
    let close = text.indexOf("\n---", 3);
    if (equal(close, -1)) {
      return text;
    }
    let sum = add(close, 1);
    let line_end = text.indexOf("\n", sum);
    if (equal(line_end, -1)) {
      let r2 = "";
      return r2;
    }
    let body_start = add(line_end, 1);
    let r3 = text.slice(body_start);
    return r3;
  }
  function note_card(note) {
    let card = app_shared_container_blue(div);
    html_style_margin_y(card, "0.15rem");
    let header = html_div_text_bold(card, note.name);
    html_cursor_pointer(header);
    let description = html_div_text(card, note.description);
    html_style_assign(description, {
      "font-size": "0.85em",
      opacity: "0.8",
    });
    let body = html_div(card);
    html_display_none(body);
    html_style_assign(body, {
      margin: "0.5rem 0 0 0",
      "word-break": "break-word",
    });
    let text2 = note_body(note.text);
    markdown_render(body, text2);
    let open = {
      on: false,
    };
    function toggle() {
      open.on = not(open.on);
      if (open.on) {
        html_display_block(body);
        return;
      }
      html_display_none(body);
    }
    html_on_click(header, toggle);
  }
  each(notes, note_card);
}
