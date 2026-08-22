import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
export function text_split_comma_trimmed(text) {
  "$plain text";
  "One line of comma separated items, cut into the items with the spaces around each one taken off, and nothing at all for an empty line.";
  "A LIST A PERSON TYPED IS SPACED FOR READING AND NOT FOR PARSING. Somebody writing three references writes a comma and then a space, because that is what a line of text is supposed to look like, so trimming is not a tidy-up afterwards - it is half of what cutting the line means. Splitting without it hands back items with a space stuck to the front, which then fail to match anything they are looked up against.";
  arguments_assert(arguments, 1);
  let split = text_split_comma_or_empty(text);
  let items = list_map(split, text_trim);
  return items;
}
