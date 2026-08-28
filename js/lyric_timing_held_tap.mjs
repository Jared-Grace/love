import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_held_tap(held, seconds) {
  arguments_assert(arguments, 2);
  ("$plain held");
  ("$plain seconds");
  ("Records that the line the cursor is on begins at this moment of the song, and moves on to the next one.");
  ("A TAP PAST THE LAST LINE DOES NOTHING RATHER THAN GROWING THE LIST. The button is large and is being pressed by somebody who is listening rather than looking, so one press too many is the ordinary way a song ends, not a mistake worth punishing. Letting it write would put a line with a time and no words into the document, which renders as a card of nothing standing over the music.");
  let total = held.texts.length;
  let ended = greater_than_equal(held.cursor, total);
  if (ended) {
    return;
  }
  held.starts[held.cursor] = seconds;
  held.cursor = held.cursor + 1;
}
