import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
export function app_g_arcs_read_row(parent, bench, nickname, person) {
  "$plain nickname";
  "A line saying what the moved marks below are measured against and how much has moved, and the press that records this arc as read now.";
  "SAYING IT HAS BEEN READ IS A PRESS ON THE PAGE AND NOT A COMMAND IN A TERMINAL, because the reading happens on a phone. A reviewer who has just finished an arc and has to walk to a keyboard to record it will not record it, and an unrecorded reading is a whole second reading later - which is the one cost this bench was built to remove.";
  "THE PRESS SITS AT THE TOP WITH THE STATE IT CHANGES, not at the foot of the arc where the reading ends. An arc is many screens long, so a press at the bottom is found only by whoever scrolled the whole way; the state and the press being one thing means a reviewer who wants to know where they are and a reviewer who wants to record where they are look in the same place.";
  "THE LINE NAMES WHAT THE MARKS ARE MEASURED FROM AND NEVER ONLY THAT THERE ARE SOME. Moved since you read it and moved since the last backup was taken are different claims about the reader, and the second one said as the first tells somebody they have already been through an arc they have never seen.";
  "AN ARC WITH NOTHING BEHIND IT SAYS SO PLAINLY, because otherwise a page with no marks on it is read as an arc nothing has moved in. Those are opposite facts and they look identical, and the more dangerous of the two is the one where a reviewer trusts an unmarked page.";
  "NOTHING MOVED IS SAID OUT LOUD RATHER THAN LEFT BLANK, which is what makes a second reading cheap. A reviewer told that nothing has moved since they read it can close the arc without reading a line of it, and that is the whole saving.";
  "THE PRESS IS OFFERED WHATEVER THE STATE IS, because the record only ever moves forward. On an arc already read it takes in what moved since; on one measured against a backup it replaces a stand-in with a real reading, and from then on the marks are about this reviewer rather than about a copy taken on some day they had no part in.";
  arguments_assert(arguments, 4);
  let base_source = property_get(person, "base_source");
  let moved_count = property_get(person, "moved_count");
  let chapter_code = property_get(bench, "chapter_code");
  let status_set = property_get(bench, "status_set");
  let status_working = property_get(bench, "status_working");
  let render = property_get(bench, "render");
  let counted = String(moved_count);
  let nothing_moved = equal(moved_count, 0);
  let said =
    "not read yet, and there is no older copy of it, so nothing below is marked as moved";
  let read = equal(base_source, "read");
  if (read) {
    said = text_combine_multiple([
      "read before, and ",
      counted,
      " lines have moved since",
    ]);
  }
  let read_unmoved = read && nothing_moved;
  if (read_unmoved) {
    said = "read before, and nothing has moved since";
  }
  let backed_up = equal(base_source, "backup");
  if (backed_up) {
    said = text_combine_multiple([
      "not read yet, and ",
      counted,
      " lines have moved since the last content backup",
    ]);
  }
  let backup_unmoved = backed_up && nothing_moved;
  if (backup_unmoved) {
    said = "not read yet, and nothing has moved since the last content backup";
  }
  let row = html_div(parent);
  html_style_assign(row, {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "center",
    gap: "0.5rem",
    "margin-top": "0.4rem",
  });
  let line = html_div_text(row, said);
  html_style_assign(line, {
    "font-size": app_shared_font_size_label(),
    opacity: "0.55",
  });
  async function on_read() {
    let working = text_combine_multiple(["recording ", nickname, " as read"]);
    status_working(working);
    try {
      let f_name = fn_name("g_arc_reviewed_write");
      await app_shared_api_named(f_name, [chapter_code, nickname]);
      let done = text_combine_multiple([nickname, " is recorded as read"]);
      status_set(done);
      await render();
    } catch (failed) {
      let missed = text_combine_multiple([
        "could not record ",
        nickname,
        " as read",
      ]);
      status_set(missed);
    }
  }
  app_shared_button_inline(row, "mark read", on_read);
}
