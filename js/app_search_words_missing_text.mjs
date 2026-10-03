import { list_map } from "./list_map.mjs";
import { text_pad_space_quote_double } from "./text_pad_space_quote_double.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_search_words_missing_text(words_missing) {
  "a lookup comes back with nothing either when the word appears nowhere in the Bible or when the connection dropped, so name the words and ask about both, rather than asserting the one that happens to be wrong";
  "BOTH CAUSES ARE NOW SAID RATHER THAN LEFT INSIDE THE WORD LOOKUP. The reader has no idea what a lookup is, and the question on its own - is the spelling right, or would trying again help - reads as a connection that may come good, so a word that is simply in no verse sends them back to try again forever. Naming the likelier cause first costs nothing and still asserts neither.";
  let quoted = list_map(words_missing, text_pad_space_quote_double);
  let joined = list_join_comma_space(quoted);
  let several = list_multiple_is(words_missing);
  if (several) {
    let many = text_combine_multiple([
      "Nothing came back for ",
      joined,
      ". Either no verse holds those words, or the connection dropped. Are the spellings right, or would trying again help?",
    ]);
    return many;
  }
  let text = text_combine_multiple([
    "Nothing came back for ",
    joined,
    ". Either no verse holds that word, or the connection dropped. Is the spelling right, or would trying again help?",
  ]);
  return text;
}
