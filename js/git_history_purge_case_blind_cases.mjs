import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
import { git_history_texts_replacements_text } from "./git_history_texts_replacements_text.mjs";
export function git_history_purge_case_blind_cases() {
  "The four things that have to be true about how a history purge reads a word, each written out as what is claimed and whether it holds - a made-up word standing in for a real one, so the cases can be read by anybody.";
  "★ THE ONE THAT MATTERS IS THE FIRST, BECAUSE IT IS THE ONLY ONE THAT FAILS WITHOUT SAYING ANYTHING. The words a purge takes out of a past are names, and a name is written with a capital wherever it stands in an ordinary sentence. If the instructions handed to the rewriting tool stop saying to ignore the letter, the rewrite runs, finishes, reports every other proof green, and leaves every capitalised occurrence exactly where it was - for ever, on a public history, about a real person. The three other readers in this job fail loudly instead: the reading that counts what is left stops the rehearsal with a word still found, and the one that matches file names hands back a short list a human is reading anyway.";
  "The last three say what the first one is allowed to cost. The fear worth having about ignoring the letter is that a word starts matching inside other words, which would rewrite innocent code in every commit it ever stood in. It does not, and these say so: the mark at the start still stands between a letter and something that is not one, so a capital is found, a run-on ending is found, and the same letters sitting inside a longer word are left alone.";
  "A made-up word is used rather than a real one on purpose. This repository is public, so a case written with one of the words a purge exists to remove would be one more public copy of it, published by the very thing meant to take it away.";
  let word = "widget";
  let pattern = text_word_start_regex(word);
  let text = git_history_texts_replacements_text([word]);
  let wanted = "regex:(?i)" + pattern;
  let matcher = new RegExp(pattern, "i");
  let b = matcher.test("midwidget");
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
  ];
  return cases;
}
