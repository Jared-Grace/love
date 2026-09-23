import { text_word_start_regex } from "./text_word_start_regex.mjs";
import { git_history_texts_replacements_text } from "./git_history_texts_replacements_text.mjs";
import { text_words_start_regex } from "./text_words_start_regex.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function git_history_purge_case_blind_cases() {
  "The things that have to be true about how a history purge reads a word - one word or several at once - each written out as what is claimed and whether it holds, with made-up words standing in for real ones so the cases can be read by anybody.";
  "★ THE ONE THAT MATTERS IS THE FIRST, BECAUSE IT IS THE ONLY ONE THAT FAILS WITHOUT SAYING ANYTHING. The words a purge takes out of a past are names, and a name is written with a capital wherever it stands in an ordinary sentence. If the instructions handed to the rewriting tool stop saying to ignore the letter, the rewrite runs, finishes, reports every other proof green, and leaves every capitalised occurrence exactly where it was - for ever, on a public history, about a real person. The three other readers in this job fail loudly instead: the reading that counts what is left stops the rehearsal with a word still found, and the one that matches file names hands back a short list a human is reading anyway.";
  "The next three say what the first one is allowed to cost. The fear worth having about ignoring the letter is that a word starts matching inside other words, which would rewrite innocent code in every commit it ever stood in. It does not, and these say so: the mark at the start still stands between a letter and something that is not one, so a capital is found, a run-on ending is found, and the same letters sitting inside a longer word are left alone.";
  "★ THE LAST THREE ARE ABOUT ASKING FOR SEVERAL WORDS AS ONE PATTERN, WHICH IS WHERE THE SAFETY COULD QUIETLY BE LOST. Joining words with a bar puts a group around them, and a mark written in front of a group can be read as belonging to the group rather than to each word inside it. If that ever slipped, the pattern would still run and still answer - with a word now matching in the middle of innocent longer ones, in a rewrite nobody can undo. So the group is asked the same three questions one word is asked, and one more: that asking for one word this way says exactly what asking for that one word has always said, which is what stops the two forms drifting apart.";
  "Made-up words are used rather than real ones on purpose. This repository is public, so a case written with one of the words a purge exists to remove would be one more public copy of it, published by the very thing meant to take it away.";
  let word = "widget";
  let pattern = text_word_start_regex(word);
  let text = git_history_texts_replacements_text([word]);
  let wanted = "regex:(?i)" + pattern;
  let matcher = new RegExp(pattern, "i");
  let b = matcher.test("midwidget");
  let one = text_words_start_regex([word]);
  let several = text_words_start_regex([word, "gadget"]);
  let group = new RegExp(several, "i");
  let inside = group.test("midgadget");
  let cases = [
    {
      claim:
        "the instructions handed to the rewriting tool say to ignore the letter",
      ok: equal(text, wanted),
    },
    {
      claim: "the word is found where it is written with a capital",
      ok: matcher.test("Widget"),
    },
    {
      claim: "the word is found where an ending runs on after it",
      ok: matcher.test("widgetry"),
    },
    {
      claim: "the word is left alone where it sits inside a longer one",
      ok: not(b),
    },
    {
      claim:
        "asking for one word as a group asks for the same thing as asking for it alone",
      ok: equal(one, "\\b(" + word + ")\\w*"),
    },
    {
      claim: "any of several words asked at once is found where it begins",
      ok: group.test("a Gadget stood here"),
    },
    {
      claim:
        "a word asked as one of several is still left alone inside a longer one",
      ok: not(inside),
    },
  ];
  return cases;
}
