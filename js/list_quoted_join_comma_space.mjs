import { list_map } from "./list_map.mjs";
import { text_pad_space_quote_double } from "./text_pad_space_quote_double.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function list_quoted_join_comma_space(list) {
  "Every item wearing double quotes and joined by commas, ready to be read inside a sentence a person sees.";
  "A sentence naming words back to the reader has to quote them, because an unquoted word in the middle of a question cannot be told from the question's own words - and a sentence that names two different sets of words has to do it twice, which is the whole reason this is a name rather than three lines copied.";
  let quoted = list_map(list, text_pad_space_quote_double);
  let joined = list_join_comma_space(quoted);
  return joined;
}
