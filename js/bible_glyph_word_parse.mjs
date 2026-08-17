import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function bible_glyph_word_parse(text) {
  "$plain text";
  "the wording is one word of a verse written in the shorthand a person types. It is text to read apart and nothing that runs.";
  "One word of a picture Bible verse, written in the shorthand a person types, turned into the word the verse actually stores.";
  "A dollar opens an emoji group and the next dollar closes it, so the same mark does both and there is nothing to remember about which is which. Names inside a group are joined by a plus. Everything outside a group is ordinary English, so a word can carry text before its picture as easily as after it. Two dollars in a row mean a real dollar.";
  "So heart with an s after it is written $heart$s and stores as an emoji group holding heart followed by the text s, and the burning heart with the cross and the dove is written $heart_fire+cross+dove and stores as one group of three.";
  "A PLUS rather than a doubled underscore separates the names, and that is worth a sentence because the shorthand was first drafted with a doubled underscore. Glyph names already contain single underscores - heart_fire is one name - so a doubled underscore sits one keystroke away from a legal name, and heart__fire and heart_fire would be two different words that look the same. A plus cannot occur in a name at all, so a typo fails loudly instead of quietly meaning something else.";
  "The shorthand exists for the KEYBOARD and nowhere else. What gets stored and shipped is the parsed word, because a stored shorthand would make every reader of this Bible write a parser, and readers written later by other people would each write a slightly different one. There is one parser, it is this, and it runs while a person is typing.";
  let parts = [];
  let buffer = "";
  let inside = false;
  let index = 0;
  function buffer_flush() {
    let empty = equal(buffer, "");
    if (empty) {
      return;
    }
    if (inside) {
      let names = buffer.split("+");
      let group = [];
      for (let name of names) {
        let trimmed = name.trim();
        let blank = equal(trimmed, "");
        if (not(blank)) {
          list_add(group, trimmed);
        }
      }
      list_add(parts, group);
      buffer = "";
      return;
    }
    list_add(parts, buffer);
    buffer = "";
  }
  while (less_than(index, text.length)) {
    let here = text[index];
    let dollar = equal(here, "$");
    if (not(dollar)) {
      buffer = buffer + here;
      index = index + 1;
      continue;
    }
    let next = text[index + 1];
    let doubled = equal(next, "$");
    if (doubled) {
      buffer = buffer + "$";
      index = index + 2;
      continue;
    }
    buffer_flush();
    inside = not(inside);
    index = index + 1;
  }
  buffer_flush();
  let single = equal(parts.length, 1);
  let plain = single && equal(typeof parts[0], "string");
  if (plain) {
    let r = parts[0];
    return r;
  }
  return parts;
}
