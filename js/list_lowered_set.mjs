import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_lower } from "./list_map_lower.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
export function list_lowered_set(list) {
  "$plain list";
  "Every different piece of text in a list, put into small letters, as a set to ask membership of.";
  "This is the shape a reading wants whenever it holds one list of words and means to ask, over and over, whether a spelling is in it. Two steps stand between the list and that question - the letters have to come down and the answers have to stop repeating - and a reading that writes them out itself writes them out in the order that happens to occur to it.";
  ("★ THE SPELLING ASKED OF THE ANSWER MUST BE LOWERED TOO, AND NOTHING HERE CAN CHECK THAT. A set holding only small letters answers no to every word carrying a capital, quietly and for every one of them, so a caller that lowers one side and not the other gets a whole column of wrong answers rather than an error. Where the question is about a bible's own words, ask ",
    fn_name("bible_words_written_lowered_set"),
    " instead, which reads the bible and does this in the one place.");
  ("The capitals are gone once this has been asked and cannot be got back from what it hands over. Whoever needs to tell a name from an ordinary word has to keep the list itself as well, because that mark survives only there.");
  arguments_assert(arguments, 1);
  let lowered = list_map_lower(list);
  let set = list_unique_set(lowered);
  return set;
}
