import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_119_stanza_names } from "./psalms_119_stanza_names.mjs";
import { list_map } from "./list_map.mjs";
import { text_replace_space_underscore_lower } from "./text_replace_space_underscore_lower.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_index_of_add } from "./list_index_of_add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function psalms_119_stanza_verses_or_null(stanza_name) {
  arguments_assert(arguments, 1);
  ("$plain stanza_name");
  ("The first and last verse of Psalm 119 that a named stanza covers, or nothing where the name is not one of the twenty-two.");
  ("★ IT REFUSES AN UNKNOWN NAME INSTEAD OF GUESSING AT ONE, BECAUSE THE ANSWER IS EIGHT VERSES OF A PSALM AND A WRONG ONE IS SILENT. Every name of this shape looks equally plausible - a stanza called Vav or Tzadi is a real transliteration of a real letter that this list happens not to spell that way - so a near miss would be answered with somebody else's verses and the words shown under the song would simply be the wrong eight. Nothing downstream can tell those from the right eight; a refusal, on the other hand, arrives as a song that could not be placed and gets looked at.");
  ("The verses are arithmetic rather than a table: the stanzas are eight verses each in order, so the one in position n ends at eight n and starts seven before that. Where a stanza sits is asked of the list of names, which is the one place the order is written down.");
  ("★ CASE AND THE MARK BETWEEN WORDS ARE BOTH IGNORED, ON BOTH SIDES. A file name is written by whoever saved it, so the same letter arrives as Aleph and aleph and ALEPH, none of which is a different stanza; and one of the twenty-two is named by two words, which arrives with a space in a name typed by hand and with an underscore in a name a download has been through. Both are turned to the one key shape a phrase takes when it becomes a file name, which is a reading this repo already spells in one place.");
  let names = psalms_119_stanza_names();
  let keyed = list_map(names, text_replace_space_underscore_lower);
  let wanted = text_replace_space_underscore_lower(stanza_name);
  let known = list_includes(keyed, wanted);
  if (not(known)) {
    return null;
  }
  let left = list_index_of_add(keyed, wanted, 1);
  let last = multiply(left, 8);
  let first = subtract(last, 7);
  let verses = {
    first: first,
    last: last,
  };
  return verses;
}
