import { text_pad_space_quote_double } from "./text_pad_space_quote_double.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
export function app_search_words_missing_text(words_missing) {
  ("a lookup comes back with nothing either when the word appears nowhere in the Bible or when the connection dropped, so name the words and ask about both, rather than asserting the one that happens to be wrong");
  let quoted = list_map(words_missing, text_pad_space_quote_double);
  let joined = list_join_comma_space(quoted);
  let text = text_combine_multiple([
    "No lookup came back for ",
    joined,
    ". Is the spelling right, or would trying again help?",
  ]);
  return text;
}
