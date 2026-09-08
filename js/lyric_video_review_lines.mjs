import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { property_get } from "./property_get.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { each } from "./each.mjs";
export function lyric_video_review_lines(parent, lines) {
  "$plain parent";
  "$plain lines";
  "The words sung over one background picture, written out under the drawing so the two can be looked at together.";
  "THE WORDS ARE THE WHOLE POINT OF LOOKING AT THE DRAWING. The only question this screen asks is whether the picture belongs behind these words, and that question cannot be answered from the picture alone. A reviewer who had to remember which verses were coming would be answering it from memory of a psalm rather than from the psalm.";
  "EACH LINE CARRIES THE SECOND IT STARTS AT. A note about timing has to say which line was late, and the line's own second is the one thing that names it to whoever goes back to the document - where a line's position in the list would name it only until somebody split a line in two.";
  "THE SECOND IS ROUNDED TO ONE PLACE, because it is read off a phone to be typed into a note and six decimals of it are noise. The document keeps the exact number.";
  "A PICTURE WITH NOTHING SUNG OVER IT SAYS SO RATHER THAN SHOWING A BLANK. A blank would read as a screen that had failed to load, and the reviewer would wait instead of judging.";
  arguments_assert(arguments, 2);
  let holder = html_div(parent);
  html_style_assign(holder, {
    "margin-top": "8px",
    "line-height": "1.5",
  });
  let empty = list_empty_is(lines);
  if (empty) {
    app_shared_text_quiet(holder, "nothing is sung over this picture");
    return holder;
  }
  function line_row(one) {
    let start = property_get(one, "start");
    let text = property_get(one, "text");
    let at = number_round_places(start, 1);
    let counted = text_from_number(at);
    let said = text_combine_multiple([counted, "s   ", text]);
    let row = html_div(holder);
    html_text_set(row, said);
  }
  each(lines, line_row);
  return holder;
}
