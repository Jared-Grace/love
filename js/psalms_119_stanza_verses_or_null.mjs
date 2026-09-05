import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_119_stanza_names } from "./psalms_119_stanza_names.mjs";
import { list_map } from "./list_map.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function psalms_119_stanza_verses_or_null(stanza_name) {
  arguments_assert(arguments, 1);
  ("$plain stanza_name");
  ("The first and last verse of Psalm 119 that a named stanza covers, or nothing where the name is not one of the twenty-two.");
  ("★ IT REFUSES AN UNKNOWN NAME INSTEAD OF GUESSING AT ONE, BECAUSE THE ANSWER IS EIGHT VERSES OF A PSALM AND A WRONG ONE IS SILENT. Every name of this shape looks equally plausible - a stanza called Vav or Sin or Tzadi is a real transliteration of a real letter that this list happens not to spell that way - so a near miss would be answered with somebody else's verses and the words shown under the song would simply be the wrong eight. Nothing downstream can tell those from the right eight; a refusal, on the other hand, arrives as a song that could not be placed and gets looked at.");
  ("The verses are arithmetic rather than a table: the stanzas are eight verses each in order, so the one in position n ends at eight n and starts seven before that. Where a stanza sits is asked of the list of names, which is the one place the order is written down.");
  ("Upper and lower case are ignored on both sides. A file name is written by whoever saved it and the same letter arrives as Aleph and aleph and ALEPH, none of which is a different stanza.");
  let names = psalms_119_stanza_names();
  let lowered = list_map(names, text_lower_to);
  let wanted = text_lower_to(stanza_name);
  let known = list_includes(lowered, wanted);
  if (not(known)) {
    return null;
  }
  let index = list_index_of(lowered, wanted);
  let left = add(index, 1);
  let last = multiply(left, 8);
  let first = subtract(last, 7);
  let verses = {
    first: first,
    last: last,
  };
  return verses;
}
