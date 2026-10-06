import { list_quoted_join_comma_space } from "./list_quoted_join_comma_space.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_search_words_absent_text(words) {
  "What a reader is told about words every lookup did answer for, and answered that nothing is there.";
  "IT SAYS WE SEARCHED RATHER THAN SAYING THE BIBLE LACKS THE WORD, because only the languages the reader chose were looked through. Claiming more than was looked at would be untrue, and a reader who then met the word somewhere else would have no reason left to believe the rest of what this page says.";
  "Asking about the spelling is only fair here, where every lookup arrived and said nothing is there, so the typing really is the likeliest thing left to look at.";
  let joined = list_quoted_join_comma_space(words);
  let several = list_multiple_is(words);
  if (several) {
    let many = text_combine_multiple([
      "No verse we searched holds ",
      joined,
      ". Are the spellings right?",
    ]);
    return many;
  }
  let one = text_combine_multiple([
    "No verse we searched holds ",
    joined,
    ". Is the spelling right?",
  ]);
  return one;
}
