import { words_reached_for_plain } from "./words_reached_for_plain.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function words_reached_for_plain_lines() {
  "The reached-for words and their plain twins written out one pair to a line, ready to drop into a prompt.";
  "IT IS SEPARATE FROM THE TABLE SO THE TABLE CAN BE READ BY SOMETHING ELSE. A check wants to look a word up, a report wants to count them, and only a prompt wants them as English - built into the table, the shape a prompt happens to need would be the shape everybody got.";
  "ONE PAIR TO A LINE RATHER THAN A RUN OF THEM. Fifty pairs in a single paragraph is a wall a writer skims, and skimming is exactly the failure this exists to fix - the plain-words rule was already in the prompt, in a sentence, and a writer read past it and reached for SINCE five times.";
  let pairs = words_reached_for_plain();
  let words = object_property_names(pairs);
  let lines = [];
  for (let word of words) {
    let plain = property_get(pairs, word);
    let line = list_join_space([word, "-", plain]);
    list_add(lines, line);
  }
  let text = list_join_newline(lines);
  return text;
}
