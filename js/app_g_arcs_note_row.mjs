import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { each } from "./each.mjs";
export function app_g_arcs_note_row(parent, bench, nickname, number, names) {
  "$plain nickname";
  "A box to write one note in and a press for each part of the thing above it, so that filing a note is one press on the part it is about.";
  "THE PART IS THE BUTTON AND IS NEVER TYPED. A note is addressed by a person, a turn and which part of that turn is wrong, and two of those three are already known by the place this row was drawn - so the only thing left for a hand to get wrong is the part, and a row of presses named after the parts removes that too. Typed into a terminal, a misspelt part files a note nothing later looks for and nothing goes red.";
  "AN EMPTY BOX IS ANSWERED AND NOT FILED. A note with no words in it is addressed correctly and says nothing, so it survives every reader as a fault that was found and cannot be acted on - which costs a reviser a reading to discover.";
  "THE PARTS ARE HANDED IN rather than named here, because this row is drawn under a turn and under a person and those have different parts. Named here it would offer a reviewer a part the thing above it does not have.";
  arguments_assert(arguments, 5);
  let chapter_code = property_get(bench, "chapter_code");
  let status_set = property_get(bench, "status_set");
  let status_working = property_get(bench, "status_working");
  let render = property_get(bench, "render");
  let box = html_textarea(parent);
  html_style_assign(box, {
    width: "100%",
    "min-height": "3rem",
    "margin-top": "0.4rem",
    "font-size": app_shared_font_size_label(),
    "line-height": "1.4",
    "box-sizing": "border-box",
  });
  let controls = html_div(parent);
  html_style_assign(controls, {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "0.4rem",
    "margin-top": "0.3rem",
  });
  function field_button(field) {
    async function on_note() {
      let typed = html_value_get(box);
      let empty = text_empty_is(typed);
      if (empty) {
        status_set("write the note first, then press the part it is about");
        return;
      }
      let v = String(number);
      let said = text_combine_multiple([
        "filing a note against ",
        field,
        " of turn ",
        v,
      ]);
      status_working(said);
      try {
        let f_name = fn_name("g_arc_feedback_add");
        await app_shared_api_named(f_name, [
          chapter_code,
          nickname,
          number,
          field,
          typed,
        ]);
        let v2 = String(number);
        let done = text_combine_multiple([
          "filed a note against ",
          field,
          " of turn ",
          v2,
        ]);
        status_set(done);
        await render();
      } catch (failed) {
        let v3 = String(number);
        let missed = text_combine_multiple([
          "could not file the note against ",
          field,
          " of turn ",
          v3,
        ]);
        status_set(missed);
      }
    }
    app_shared_button(controls, field, on_note);
  }
  each(names, field_button);
}
