import { list_quoted_join_comma_space } from "./list_quoted_join_comma_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_search_words_unreachable_text(words) {
  "What a reader is told about words whose lookup never arrived, so nothing is known about them yet.";
  "IT SAYS NOTHING ABOUT SPELLING, because the spelling was never tested. A lookup that did not arrive answered no question at all, so pointing at their typing here would send them correcting a word that was already right - and trying again, which is the one thing that can actually help, would never occur to them.";
  "One wording covers one word and several, because the sentence never names how many there are - so there is no plural to get right, and no second sentence to keep in step with the first.";
  let joined = list_quoted_join_comma_space(words);
  let text = text_combine_multiple([
    "We could not finish looking for ",
    joined,
    ". Would trying again help?",
  ]);
  return text;
}
