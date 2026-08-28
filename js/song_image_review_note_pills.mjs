import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter_property_exclude_if_exists } from "./list_filter_property_exclude_if_exists.mjs";
import { app_shared_note_pill } from "./app_shared_note_pill.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { api_read } from "./api_read.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { each } from "./each.mjs";
export function song_image_review_note_pills(parent, key, notes, render) {
  "$plain key";
  "The notes still standing against one couplet's drawing, each drawn as a band with one press at the end of it to say it has been answered.";
  "THE ANSWERED ONES ARE NOT DRAWN AT ALL. A note whose fault has been drawn out of the picture asks a reader for a judgment they have already made, and a round's worth of them stacked over the box buries the one or two that are still true. A picture is looked at on a phone, so the notes and the drawing are competing for the same screen and every band that need not be there costs the drawing height.";
  "THE PRESS ASKS THE STORE AGAIN RATHER THAN TAKING ITS OWN BAND DOWN. Taking the band down would show what the browser hoped had happened; asking again shows what was actually written, so a press that failed leaves its note standing where it can be pressed a second time instead of vanishing and staying filed.";
  "THE STORE KEEPS AN ANSWERED NOTE AND ONLY THIS LIST STOPS SHOWING IT, so nothing a reviewer said is lost by pressing - which is what makes the press safe to give a reader who cannot undo it.";
  arguments_assert(arguments, 4);
  let open = list_filter_property_exclude_if_exists(notes, "done", true);
  function note_line(one) {
    let line = app_shared_note_pill(parent, one);
    async function answered() {
      let f_name = fn_name("song_image_note_done");
      let words = property_get(one, "note");
      await api_read(f_name, [key, words]);
      await render();
    }
    let press = html_button(line, "answered", answered);
    html_style_assign(press, {
      "margin-left": "0.5rem",
      "font-size": app_shared_font_size_label(),
      padding: "0.35rem 0.8rem",
      "border-radius": "0.25rem",
      "white-space": "nowrap",
    });
  }
  each(open, note_line);
}
