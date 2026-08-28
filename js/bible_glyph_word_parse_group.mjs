import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_word_parse_group(buffer) {
  "$plain buffer";
  "the wording is the run of characters gathered since the opening dollar, so it is the inside of one emoji group and nothing that runs.";
  "The names inside one emoji group, taken from the run of characters gathered between the two dollars that opened and closed it.";
  "A PLUS SEPARATES THE NAMES, and the space around a plus is thrown away, so a person may write the group loosely and still get the names they meant. A name that comes out empty is dropped rather than stored, which is what makes a trailing plus harmless.";
  "The answer is a list even when there is one name in it, because a group of one and a group of three are the same thing to everything downstream and telling them apart here would make every reader tell them apart too.";
  arguments_assert(arguments, 1);
  let names = buffer.split("+");
  let group = [];
  for (let name of names) {
    let trimmed = name.trim();
    let blank = equal(trimmed, "");
    if (not(blank)) {
      list_add(group, trimmed);
    }
  }
  return group;
}
