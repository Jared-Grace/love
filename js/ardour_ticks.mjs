import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { text_skip } from "./text_skip.mjs";
export function ardour_ticks(value) {
  "$plain value";
  "The count of beat ticks in one time written into an Ardour session, where a time kept in beats is spelled with a b in front and a quarter note is 1920 ticks.";
  "★ A TIME KEPT IN SAMPLES IS REFUSED RATHER THAN READ AS TICKS. Ardour spells those with an a in front and counts them far finer, so reading one as ticks would put a note hours from where it is heard.";
  arguments_assert(arguments, 1);
  let beats = text_starts_with(value, "b");
  if (not(beats)) {
    error("this Ardour time is not kept in beats: " + value);
  }
  let count_text = text_skip(value, 1);
  let ticks = Number(count_text);
  return ticks;
}
