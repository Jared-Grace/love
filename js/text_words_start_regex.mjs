import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_word_regex_plain_assert } from "./text_word_regex_plain_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
export function text_words_start_regex(words) {
  arguments_assert(arguments, 1);
  ("Several words at once, written as the single pattern that finds any one of them where it begins a word and lets it run on to whatever ending follows.");
  ("★ IT EXISTS BECAUSE ASKING A WHOLE PAST ONE WORD AT A TIME COSTS AN AFTERNOON. Reading every commit a repository has ever held, looking for one word, took twenty minutes here. Eight words asked one after another is most of a day, and the answer wanted was never per word anyway - it was the set of files that hold any of them, so that a later reading can be pointed at those files instead of at everything. Asked as one pattern the past is walked once. Which word was found where is a cheap question afterwards, because by then the files are few.");
  ("★ EACH WORD IS STILL JUDGED BY THE SAME RULE ONE WORD WOULD BE, AND THAT IS THE WHOLE RISK HERE. Joining words with a bar is the one place where a word that is not plain stops meaning itself: a bracket or a bar written inside a word would close the group early and turn the rest of the list into something else entirely, and the pattern would still run and still answer. So every word is refused here by the same rule the single-word form refuses by, before any of them is joined to another.");
  ("The mark at the start stands in front of the whole group rather than in front of each word, and the ending runs on after it, so the group is read exactly as each word would have been read alone. Whether a capital letter counts is not decided here, for the same reason it is not decided for one word: the readers of this pattern each have to be told in their own words.");
  let any = list_empty_not_is(words);
  assert_json(any, {
    hint: "no words were named, and a pattern built from no words would ask for an empty group and match wherever a word begins - would you like to name the words?",
    words,
  });
  function lambda(word) {
    text_word_regex_plain_assert(word);
    return word;
  }
  let checked = list_map(words, lambda);
  let joined = list_join(checked, "|");
  let pattern = "\\b(" + joined + ")\\w*";
  return pattern;
}
