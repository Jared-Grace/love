import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_markup_is(t) {
  "$plain t";
  arguments_assert(arguments, 1);
  ("Whether this run of characters is markup rather than language - something a browser reads, with nothing in it a person reads.");
  ("Two shapes, and the same reason under both. A run holding the character a tag opens with is a tag or a piece of one: that character cannot stand in words on a page at all, because a page carrying it would be read as opening a tag, so anywhere it does stand the run is instructions to the browser. And a run made of nothing but the escapes that name single characters is one character said the long way round - a space that will not break, an arrow - which is the same in every language there is.");
  ("It is asked wherever words in one language are being hunted for, beside the older question of whether a run has a letter in it at all. That question was asked so that an arrow or a gap would not be reported as english left untranslated; this is the same question about the same kind of thing, one layer further out, where the arrow has been written as an escape and the gap as a tag.");
  ("It leans the same way that older question does, and the lean is the safe one. Calling language markup would hide a real word, so the test is written to be sure rather than wide: a lone ampersand in ordinary words is language and stays language, and only a run that is escapes end to end is not.");
  let opens = text_includes(t, "<");
  if (opens) {
    return true;
  }
  let escapes = /^(&[a-zA-Z]+;|&#[0-9]+;)+$/;
  let only_escapes = escapes.test(t);
  return only_escapes;
}
