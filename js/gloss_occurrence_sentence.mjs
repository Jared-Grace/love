import { text_combine_3 } from "./text_combine_3.mjs";
import { number_times_text } from "./number_times_text.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
export function gloss_occurrence_sentence(counts) {
  "The sentence a word explanation gets about how rare its word is, written out of the counts themselves - or nothing, when the counts say nothing worth a reader's time.";
  "This is the whole point of the thing: the sentence is not written and then checked, it is produced by the arithmetic, so it cannot disagree with the arithmetic. An author cannot mistype a number here, cannot remember a word as rarer than it is, and cannot carry a claim from one chapter into another where it stopped being true.";
  "Most words get nothing back, and that is the design rather than a shortfall. A sentence handed to every word in a chapter is filler by the seven hundredth time, and the reader stops seeing it - so a count only earns a sentence when it is actually unusual, and the ordinary word is left alone for its explanation to talk about something else.";
  "The cases are tried from the most striking down, and the first that fits is the one written, so no word is told two overlapping things about the same number. What each says is exactly what its own case knows to be true and no more: a word standing once in its testament is not also called the only one in its book, because that is the smaller claim and it is already implied.";
  "The book is called this book rather than named. Naming it would need a lookup that knows a code's English title, and the sentence gains nothing by it - the reader is holding the book open.";
  let chapter = property_get(counts, "chapter");
  let book = property_get(counts, "book");
  let testament = property_get(counts, "testament");
  let testament_name = property_get(counts, "testament_name");
  let unseen = equal(chapter, 0);
  if (unseen) {
    let no_sentence = null;
    return no_sentence;
  }
  let alone_testament = equal(testament, 1);
  if (alone_testament) {
    let only = text_combine(
      "This is the only place this word stands in the ",
      text_combine(testament_name, "."),
    );
    return only;
  }
  let alone_book = equal(book, 1);
  if (alone_book) {
    let elsewhere = number_times_text(testament);
    let sentence = text_combine_3(
      "This is the only place this word stands in this book, though it stands ",
      text_combine(elsewhere, text_combine(" in the ", testament_name)),
      ".",
    );
    return sentence;
  }
  let kept_to_book = equal(book, testament);
  if (kept_to_book) {
    let here = number_times_text(book);
    let sentence = text_combine_3(
      "This word stands ",
      text_combine(here, " in the "),
      text_combine(testament_name, ", every one of them in this book."),
    );
    return sentence;
  }
  let rare_testament = testament < 6;
  if (rare_testament) {
    let across = number_times_text(testament);
    let inside = number_times_text(book);
    let opening = text_combine("This word stands ", across);
    let middle = text_combine(
      text_combine(" in the ", testament_name),
      text_combine(", ", inside),
    );
    let sentence = text_combine(
      opening,
      text_combine(middle, " in this book."),
    );
    return sentence;
  }
  let unremarkable = null;
  return unremarkable;
}
