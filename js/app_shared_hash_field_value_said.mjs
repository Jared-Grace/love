import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_hash_field_value_said(field, value) {
  "One word out of a link, worded the way a reader reads it rather than the way the link carries it - John 3:16 where the address says John+3:16.";
  "A link cannot hold a space, so what travels in it is not quite what anybody writes. Said back unchanged, a reader matching the page against their own address bar is shown a plus in the middle of a reference and has to work out for themselves that it is the page's doing rather than one more thing gone wrong.";
  "The field is asked rather than the wording being worked out here, because every kind of word in a link is carried differently: a language travels as a code, a reference as a run of words with the spaces taken out. Only the field that reads a word knows how it was written down.";
  "Everywhere a reader is shown one of these words goes through here - what is wrong, the corrections offered, and the way past it. They are the same word said three times on one screen, and three spellings of it would read as three different things.";
  arguments_assert(arguments, 2);
  let label = property_get(field, "label");
  let said = label(value);
  return said;
}
