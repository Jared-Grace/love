import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_history_texts_substitute_replacements_text } from "./git_history_texts_substitute_replacements_text.mjs";
import { git_history_replacements_rehearse } from "./git_history_replacements_rehearse.mjs";
export async function git_history_texts_substitute_rehearse(
  folder,
  words_text,
  replacement,
) {
  "$plain folder";
  "$plain words_text";
  "$plain replacement";
  "Puts one innocent word in the place of each of a list of words, everywhere a repository has ever written them, on a copy nobody is using - and proves the result before anybody is asked to accept it. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  ("★ THE CASE THIS EXISTS FOR IS A WORD ITS OWN PURGE CANNOT REACH. ",
    fn_name("git_history_texts_replace_rehearse"),
    " asks for each word only where a word begins, which is what stops a short word being torn out of innocent longer ones. A past can hold the word with a letter welded to its front, and then there is no word beginning for the rule to stand on and the occurrence survives silently. The one that forced this was a note quoting the purge's own rule back at itself, where the mark for a word start is written as a backslash and the letter b - so the word sat behind a b, and the purge walked past its own written form.");
  ("★ EXCHANGING IS WHAT LETS THE ASKING BE WIDER, AND THE TWO CANNOT BE SEPARATED. Asking wider with an emptying replacement would hollow out every innocent name that happens to hold the run of letters, in every commit since it was written, with no way back - which is the harm the word start mark was put there to prevent. Asking wider with an exchange cannot hollow anything: an innocent word holding the run comes back as an innocent word holding a different run, still a word and still readable. So this is not a looser version of its sibling; it is the only shape in which looser is allowed.");
  ("★ A REPLACEMENT IS A PERSON'S CHOICE AND IS NEVER DERIVED. Nothing in the letters of the word being removed can say what is innocent in its place - that depends on the sentence around it. A real town becomes a large town, because a large town names nobody; the same exchange was already made by hand in the working tree before this existed, which is the evidence it reads well rather than only running.");
  ("★ THE PROOF THAT MATTERS IS COUNTING THE WORD BEFORE AND AFTER, AND IT IS THE ONLY ONE THAT CAN DISAGREE. The copy, the trees, the blobs and the number of commits all come back identical for a rewrite which replaced nothing at all, so none of them is evidence that anything happened. That count is worth asking by the wider rule as well as the narrow one, because the gap between the two answers is exactly where a welded occurrence hides.");
  arguments_assert(arguments, 3);
  let words = text_split_comma(words_text);
  let any = list_empty_not_is(words);
  assert_json(any, {
    hint: "no words were named to exchange out of the history - would you like to pass them as one comma-joined word?",
    words_text,
  });
  let replacements = git_history_texts_substitute_replacements_text(
    words,
    replacement,
  );
  let r = await git_history_replacements_rehearse(folder, replacements, words);
  return r;
}
