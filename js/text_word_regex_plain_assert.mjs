import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
export function text_word_regex_plain_assert(word) {
  "$plain word";
  arguments_assert(arguments, 1);
  ("Stops unless a word is made of nothing but letters, digits and the mark between parts - the one thing that has to be true of a word before it may be written into a pattern and still mean itself.");
  ("★ IT IS WRITTEN ONCE BECAUSE MORE THAN ONE PATTERN IS BUILT OUT OF THESE WORDS. One asks for a single word; another asks for several at once as one pattern. If those two disagreed about what a word may be made of, the one that is stricter would refuse work the other had already done, or worse, the looser one would take a dot or a bracket and quietly ask for something other than what it was handed.");
  ("This is not fussiness about input. Everything other than letters, digits and the mark between parts - a dot, a slash, a bracket, a bar - means something of its own to anything reading a pattern, so a path or a phrase handed in would ask for a different thing entirely and answer confidently. Refusing is also what makes a mark at the start of a word mean anything at all, because such a mark stands between a letter and something that is not one.");
  let plain = /^[A-Za-z0-9_]+$/.test(word);
  assert_json(plain, {
    hint: "this is not one plain word of letters, digits and underscores, and everything else means something of its own to a pattern - would you like to name the word itself rather than a path or a phrase holding it?",
    word,
  });
}
