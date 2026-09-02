import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { functions_rename_generic } from "./functions_rename_generic.mjs";
export async function functions_rename_word(word_before, word_after) {
  arguments_assert(arguments, 2);
  ("Renames every function in the repo whose name is built from a given WORD, swapping that one word for another and leaving the rest of each name exactly as it was.");
  ("A name here is a list of words joined with underscores, so a vocabulary change is a change to one word across every name that spells it. Done by hand it is a run of renames typed out one at a time, which leaves nothing behind, cannot say what it covered, and forces a description into the commit message because a batch has no single command. Asked as one command it finds its own set, so it cannot drift from what is actually named that way.");
  ("The word is matched WHOLE and never as a run of letters. A name holding `household` should change and a name holding `house` should not, and a plain text replacement cannot tell those apart - it would quietly rewrite half of one word inside another and make a name that means nothing.");
  ("Every rename is a separate change and commits as it lands, which is the business of the one underneath rather than of this. That is also why a word swap is safe to ask for with peers editing the same folder: the window each rename is exposed for is one rename wide.");
  function name_words(f_name) {
    let words = text_split(f_name, "_");
    return words;
  }
  function name_holds_is(f_name) {
    let words = name_words(f_name);
    let held = list_includes(words, word_before);
    return held;
  }
  function word_swap(word) {
    let match = equal(word, word_before);
    if (match) {
      return word_after;
    }
    return word;
  }
  function name_change(f_name) {
    let words = name_words(f_name);
    let words_after = list_map(words, word_swap);
    let f_name_after = list_join_underscore(words_after);
    return f_name_after;
  }
  let renamed = await functions_rename_generic(name_holds_is, name_change);
  return renamed;
}
