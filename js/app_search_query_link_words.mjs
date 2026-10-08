import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_query_hash_word_gap } from "./app_search_query_hash_word_gap.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
import { text_url_decode_or_same } from "./text_url_decode_or_same.mjs";
export function app_search_query_link_words(carried) {
  "$plain carried";
  "The words to search for, read back out of what a link was carrying for them.";
  "THE PLUS IS UNDONE FIRST AND THE SPELLING AFTER, NEVER THE OTHER WAY. A plus between words means a gap, and a plus somebody actually typed is carried spelled out, so undoing the spelling first would turn their plus into a gap as well and a search for C++ would open as a search for C.";
  "AN ADDRESS HANDS BACK ITS OWN SPELLING AND MUST BE READ BACK OUT OF IT. A page is given its address exactly as the browser stores it, which spells every letter outside the plain alphabet as percent pairs - so a shared search for one Persian word arrived as six of them, the word cutter made d8, ae, af and a7 out of it, and the page said nothing came back for those, which was true and told the reader nothing.";
  "It is taken as text rather than read off the page, which is what lets a check standing outside a browser read a link the same way the page does.";
  arguments_assert(arguments, 1);
  let gap = app_search_query_hash_word_gap();
  let spaced = text_replace_to_space(carried, gap);
  let words = text_url_decode_or_same(spaced);
  return words;
}
