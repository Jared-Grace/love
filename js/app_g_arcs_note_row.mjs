import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_note_box } from "./app_shared_note_box.mjs";
export function app_g_arcs_note_row(parent, bench, nickname, number, names) {
  "$plain nickname";
  "A box to write one note in and a press for each part of the turn above it, filing what is wrong with that turn of that person's arc.";
  ("IT IS THE ADDRESS AND NOT THE BOX. Everything a reviewer touches here - the box, the row of presses, the refusal to file an empty one, the line that says what happened - is the same wherever a note is being filed, and lives in ",
    fn_name("app_shared_note_box"),
    ". What is left here is the only part that is about an arc: which chapter, which person, which turn, and which store takes it.");
  ("THE TURN NUMBER IS CLOSED OVER RATHER THAN PASSED THROUGH. The box hands back the part and the words and knows nothing else, so an address it never carries is an address it cannot get wrong.");
  arguments_assert(arguments, 5);
  let chapter_code = property_get(bench, "chapter_code");
  async function filed(field, typed) {
    let f_name = fn_name("g_arc_feedback_add");
    await app_shared_api_named(f_name, [
      chapter_code,
      nickname,
      number,
      field,
      typed,
    ]);
  }
  let v = String(number);
  let subject = text_combine_multiple(["turn ", v]);
  app_shared_note_box(parent, bench, subject, names, filed);
}
