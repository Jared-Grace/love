import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_drawn_attempts_known } from "./song_image_drawn_attempts_known.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_last } from "./list_last.mjs";
export function song_image_drawn_attempt_newest(key) {
  "$plain key";
  "The highest-numbered attempt that has been drawn for one couplet, or nothing when none has.";
  "IT READS THE GENERATED TABLE AND NEVER THE FOLDER, because the only readers of this are pages drawn in a browser, where the disk is not there to ask. The table is written out by the same command that draws, so it is as fresh as the last draw and never fresher.";
  "THE NEWEST IS THE LAST ONE IN THE LIST rather than the largest number found by searching, because the table is written in the order the attempts were drawn and an attempt number is only ever handed out by taking the next free one. A search for the largest would be answering a question the list has already answered.";
  arguments_assert(arguments, 1);
  let text_key = String(key);
  let known = song_image_drawn_attempts_known();
  let b = property_exists(known, text_key);
  if (not(b)) {
    let r = 0;
    return r;
  }
  let attempts = property_get(known, text_key);
  let newest = list_last(attempts);
  return newest;
}
