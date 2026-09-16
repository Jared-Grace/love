import { arguments_assert } from "./arguments_assert.mjs";
import { xml_tags_attributes } from "./xml_tags_attributes.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { list_single } from "./list_single.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function ardour_session_tick_seconds(text) {
  "$plain text";
  "How many seconds one beat tick lasts in an Ardour session, read off its tempo, given the text of the session file.";
  "★ A SESSION WHOSE TEMPO CHANGES IS REFUSED. With one tempo every tick lasts the same, so a time in ticks turns into seconds by one multiplication; with two, that multiplication is right up to the change and silently wrong after it.";
  "The tempo counts some note per minute, not always the quarter note, so the quarter's length is scaled by how many of that note a quarter holds.";
  arguments_assert(arguments, 1);
  let tempos = xml_tags_attributes(text, "Tempo");
  let size = list_size(tempos);
  let b = equal(size, 1);
  if (not(b)) {
    error(
      "this Ardour session has " +
        size +
        " tempos and only one steady tempo can be read",
    );
  }
  let tempo = list_single(tempos);
  let b2 = equal(tempo.type, "Constant");
  if (not(b2)) {
    error("this Ardour session's tempo is not steady: " + tempo.type);
  }
  let bottom = Number(tempo.npm);
  let note_seconds = divide(60, bottom);
  let bottom2 = Number(tempo["note-type"]);
  let quarters_per_note = divide(4, bottom2);
  let quarter_seconds = multiply(note_seconds, quarters_per_note);
  let seconds = divide(quarter_seconds, 1920);
  return seconds;
}
