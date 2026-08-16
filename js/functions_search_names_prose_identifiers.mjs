import { property_equals_not } from "./property_equals_not.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { equal_not } from "./equal_not.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_search } from "./functions_search.mjs";
import { functions_search_any_word } from "./functions_search_any_word.mjs";
import { functions_prose_search } from "./functions_prose_search.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { functions_name_vocabulary } from "./functions_name_vocabulary.mjs";
import { functions_search_shown_count } from "./functions_search_shown_count.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_set } from "./property_set.mjs";
export async function functions_search_names_prose_identifiers(words_comma) {
  "Ask the whole repo whether a capability is already here, in every way the asking can miss differently, from one set of words and one command.";
  "The four searches under this each fail at a different thing. A name search only works for somebody who already half knows the name. The any-word search catches the guess that was right about one word and wrong about the rest. The purpose search reaches a function whose name shares not one word with the question, and is the only one that can. The identifier search answers who already mentions the thing, which is what says whether a capability is reached or merely present.";
  "It is one command because the log says the ladder was already being walked by hand, every time, four processes deep. Over the life of the repo the name search was run seven thousand times and is the single most run command there is; it was followed by the any-word search three hundred and seventy one times, by the identifier search three hundred and eight, and by the purpose search two hundred and ninety. Those nine hundred and sixty nine second commands are the same question asked again down another channel, and each one cost a whole process start and a whole reply.";
  "The words this repo names things with are handed back only when neither name channel found anything, because that is the one moment the advice applies and the moment it is worth a screenful. When a name search comes back empty the first suspect is the asker's words rather than the repo, and the vocabulary is what translates them; shown on every answer it would be noise, withheld when it is needed it is the step everybody skips.";
  "Nothing here narrows or merges the four answers. Each is kept whole, under the channel that produced it, so the counts every one of them reports about its own reach survive - the purpose search says how much of the repo is silent, the name searches say how many names they matched before shortening. A merged list would throw away exactly the numbers that say how much to trust an empty answer.";
  arguments_assert(arguments, 1);
  let names = await functions_search(words_comma);
  let names_any_word = await functions_search_any_word(words_comma);
  let purpose = await functions_prose_search(words_comma);
  async function identifiers_attempt() {
    "The identifier search refuses a word no function mentions, and refusing is right for it on its own - somebody asking who calls a name has misspelt the name. Here it is the ordinary case rather than a mistake, because the whole question is whether the thing exists at all, and the channel most likely to find nothing must not be the one that ends the run. So a refusal is kept as nothing found, and the three answers already paid for survive it.";
    let found = await data_identifiers_search(words_comma);
    return found;
  }
  let identifiers = await catch_null_async(identifiers_attempt);
  function names_found_none_is() {
    "Empty means empty in both name channels at once. One word answering is enough to say the asker's words reach this repo, so the vocabulary would be answering a question nobody has.";
    let some = property_equals_not(names, "found", 0);
    if (some) {
      return false;
    }
    let words_asked = object_property_names(names_any_word);
    for (let word_asked of words_asked) {
      let count_word = property_path_get_2(names_any_word, word_asked, "found");
      let any = equal_not(count_word, 0);
      if (any) {
        return false;
      }
    }
    return true;
  }
  let report = {
    asked: words_comma,
    names,
    names_any_word,
    purpose,
    identifiers,
  };
  let none_is = names_found_none_is();
  if (none_is) {
    let count_shown = functions_search_shown_count();
    let vocabulary = await functions_name_vocabulary(count_shown);
    property_set(report, "vocabulary", vocabulary);
  }
  return report;
}
