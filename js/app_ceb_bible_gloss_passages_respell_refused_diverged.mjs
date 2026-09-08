import { arguments_assert } from "./arguments_assert.mjs";
import { list_first_difference_index } from "./list_first_difference_index.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_add } from "./list_add.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_each } from "./app_ceb_bible_gloss_passages_respell_refused_each.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_diverged() {
  "For each Cebuano passage the respell walks past, the first place the words its explanations name stop agreeing with the words in the passage, with a little of each side around it.";
  "★ A COUNT SAYS THAT TWO LISTS DISAGREE AND NEVER WHERE, AND WHERE IS THE WHOLE OF WHAT A PERSON NEEDS TO MEND ONE. Every refusal measured so far names one more word than the passage has, which is one shape and not thirteen accidents; the first place the two sequences part is the word that shape is about. Reading it off the count alone is impossible, and reading it off the file by hand is thirteen passages of counting words.";
  "The window is the words either side of the parting, taken from both lists, because the extra word is only recognisable next to what should have been in its place.";
  "Nothing is written. This reads the same chapters the respell reads and compares the same two lists it compares.";
  "The walk is the shared one, and it is the reason this reading can be about where rather than about how many: the two lists arrive whole, so the parting is found here rather than counted somewhere else and lost.";
  arguments_assert(arguments, 0);
  let diverged = [];
  function refused_read(chapter_code, explained, written) {
    let at = list_first_difference_index(explained, written);
    let from = subtract(at, 2);
    let low = less_than(from, 0);
    let start = low ? 0 : from;
    let row = {
      chapter_code: chapter_code,
      at: at,
      named: list_size(explained),
      written: list_size(written),
      named_around: list_slice_count(explained, start, 5),
      written_around: list_slice_count(written, start, 5),
    };
    list_add(diverged, row);
  }
  await app_ceb_bible_gloss_passages_respell_refused_each(refused_read);
  let r = {
    refused: list_size(diverged),
    rows: diverged,
  };
  return r;
}
