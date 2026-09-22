import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
export function text_word_start_regex(word) {
  "$plain word";
  arguments_assert(arguments, 1);
  ("One word, written as the pattern that finds it where it begins a word and lets it run on to whatever ending follows - the rule by which a word is judged to be really there rather than sitting as letters inside an innocent longer one.");
  ("★ THIS IS WRITTEN ONCE BECAUSE TWO DIFFERENT JOBS HAVE TO AGREE ABOUT IT EXACTLY. One of them takes a word out of everything a repository has ever held; the other decides which forgotten files a purge should drop, by asking whether their names hold the word. If those two read the same word by two rules, the purge takes a file's contents out and leaves its name, or takes a name out that the contents were allowed to keep - and neither mistake announces itself. Spelled here, the two cannot drift, because there is nothing for them to drift apart from.");
  ("The mark at the start is the whole of the safety. The words worth taking out are short, and a short word is a run of letters in the middle of many innocent ones: one of them sat inside the name of a drawing function in three files that had nothing to do with it, and a plain sweep would have rewritten those in every commit since they were written, quietly, with no way back. A letter standing in front of the word takes the match away.");
  ("Past the start the name is allowed to run on, because the names worth taking out come in families sharing a beginning - one beginning here had eleven endings - and marking the far end too would mean writing every ending down, where the one that gets forgotten is the one nobody will look for again.");
  ("A word is refused unless it is made of letters, digits and the mark between parts. That is not fussiness about input: everything else - a dot, a slash, a bracket - means something of its own to anything reading a pattern, so a path or a phrase handed in here would quietly ask for something other than itself. Refusing is also what makes the mark at the start mean anything, because it stands between a letter and something that is not one.");
  let plain = /^[A-Za-z0-9_]+$/.test(word);
  assert_json(plain, {
    hint: "this is not one plain word of letters, digits and underscores, and everything else means something of its own to a pattern - would you like to name the word itself rather than a path or a phrase holding it?",
    word,
  });
  let pattern = "\\b" + word + "\\w*";
  return pattern;
}
