import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { each } from "./each.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_arcs_note_pills(parent, notes) {
  "The notes already standing against the thing above them, each one drawn as a quiet band with the part it was filed against in front of it.";
  "THEY ARE SHOWN ABOVE THE BOX, because the commonest thing a second reader does is file again what the first one already filed. The part is shown with the words so a reader can see whether their own finding is the same one.";
  "A TURN AND A PERSON GET THE SAME BAND ON PURPOSE. A note against an occupation and a note against a line are the same kind of thing to read past, and two looks would say they were different kinds.";
  arguments_assert(arguments, 2);
  function note_line(one) {
    let field = property_get(one, "field");
    let words = property_get(one, "note");
    let joined = text_combine_multiple([field, " — ", words]);
    let line = html_div_text(parent, joined);
    html_style_assign(line, {
      "margin-top": "0.3rem",
      "font-size": app_shared_font_size_label(),
      "line-height": "1.4",
      "background-color": "rgba(0,0,0,0.06)",
      padding: "0.3rem 0.4rem",
      "border-radius": "0.25rem",
    });
  }
  each(notes, note_line);
}
