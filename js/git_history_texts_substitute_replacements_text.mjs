import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_word_regex_plain_assert } from "./text_word_regex_plain_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function git_history_texts_substitute_replacements_text(
  words,
  replacement,
) {
  "$plain replacement";
  arguments_assert(arguments, 2);
  ("The instructions a history rewrite reads to put one innocent word in the place of each of a list of words, everywhere a repository has ever written them - one line per word, in the form the rewriting tool reads, reading a capital letter as the same letter as a small one.");
  ("★ THIS ASKS FOR EACH WORD WHEREVER ITS LETTERS STAND, AND ITS NEIGHBOUR ",
    fn_name("git_history_texts_replacements_text"),
    " ASKS ONLY WHERE A WORD BEGINS. The difference is deliberate and it is the whole reason this exists. A word can be written into a past with a letter welded to its front - the case that forced this was a note quoting the purge's own rule, which spells the mark for the start of a word as a backslash and the letter b, so the word it named came to sit behind a b and the start mark found no boundary to stand on. The rewrite walked past its own written form and left it there, and no count of trees or commits could have shown that, because a rewrite that replaces nothing matches every such count perfectly.");
  ("★ PUTTING A WORD IN THE PLACE OF ONE IS WHAT MAKES THAT WIDER ASKING SAFE, and asking wider is not safe without it. The reason the neighbour marks the start is that a short word is a run of letters inside many innocent longer ones, and it empties whatever it matches - so a wider ask there would hollow out real names in every commit since they were written. Here nothing is hollowed: letters are exchanged for letters, and an innocent word that happened to hold the run comes back as an innocent word holding a different run. What is left is readable rather than gutted, and every file whose content moved is handed back to be looked at before anybody accepts the result.");
  ("★ AN EMPTY REPLACEMENT IS REFUSED BY ASKING THE SAME QUESTION OF BOTH SIDES. The replacement is held to the same rule as the words - letters, digits and the mark between parts - so it cannot be nothing, cannot be a path and cannot be a phrase. Nothing standing on the far side of the arrow is how the tool is told to delete rather than exchange, which is the neighbour's job and not this one's, and a deletion here would weld the two sides of a sentence together with no space between them.");
  ("A replacement is chosen by a person and never derived from the word it replaces. What counts as innocent depends on what the sentence around it is for: a town is replaced by a large town, because a large town names nobody, and nothing in the letters of the first could ever say so.");
  text_word_regex_plain_assert(replacement);
  function lambda(word) {
    text_word_regex_plain_assert(word);
    let line = "regex:(?i)" + word + "==>" + replacement;
    return line;
  }
  let lines = list_map(words, lambda);
  let text = list_join_newline(lines);
  return text;
}
