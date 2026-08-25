import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_skip } from "./list_skip.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
export async function pronunciation_dictionary_stresses(file_path) {
  "$plain file_path";
  "Every word the pronouncing dictionary holds, against the run of stress digits its syllables carry - one digit per syllable, written in the order the syllables are said.";
  "abandon comes back as 010: the first syllable unstressed, the second carrying the main stress, the third unstressed. The number of digits is the number of syllables, because the dictionary writes a digit on every vowel and a syllable is a vowel.";
  "★ THIS IS THE SHAPE A TUNE IS FITTED TO, AND A COUNT OF SYLLABLES ALONE IS NOT. Eight syllables that go light-heavy eight times over and eight that go heavy-light eight times over are the same count and are not the same line, and a melody written for one of them fights the other on every bar. So the pattern is kept whole rather than being reduced to its length, and whoever only wants the length can take it.";
  "Where the dictionary offers a word more than one way to say it, the first is kept and the rest are passed over. They differ in the sounds far more often than in where the stress falls, and a caller asking for one answer per word cannot be handed two.";
  arguments_assert(arguments, 1);
  let lines = await file_read_lines(file_path);
  let stresses = {};
  function line_add(line) {
    let fields = text_split_space(line);
    let first = fields[0];
    let bare = first.replace(/\(\d+\)$/, "");
    let word = text_lower_to(bare);
    let written = greater_than(word.length, 0);
    if (not(written)) {
      return;
    }
    let already = property_get_or_null(stresses, word);
    let fresh = null_is(already);
    if (not(fresh)) {
      return;
    }
    let sounds = list_skip(fields, 1);
    let joined = list_join_empty(sounds);
    let pattern = joined.replace(/[^0-9]/g, "");
    property_set(stresses, word, pattern);
  }
  for (let line of lines) {
    line_add(line);
  }
  return stresses;
}
