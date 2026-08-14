import { less_than } from "./less_than.mjs";
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
    let right = text_combine(testament_name, ".");
    let only = text_combine(
      "This is the only place this word stands in the ",
      right,
    );
    return only;
  }
  let alone_book = equal(book, 1);
  if (alone_book) {
    let elsewhere = number_times_text(testament);
    let right2 = text_combine(" in the ", testament_name);
    let b = text_combine(elsewhere, right2);
    let sentence = text_combine_3(
      "This is the only place this word stands in this book, though it stands ",
      b,
      ".",
    );
    return sentence;
  }
  let kept_to_book = equal(book, testament);
  if (kept_to_book) {
    let here = number_times_text(book);
    let b2 = text_combine(here, " in the ");
    let c = text_combine(testament_name, ", every one of them in this book.");
    let sentence = text_combine_3("This word stands ", b2, c);
    return sentence;
  }
  let rare_testament = less_than(testament, 6);
  if (rare_testament) {
    let across = number_times_text(testament);
    let inside = number_times_text(book);
    let opening = text_combine("This word stands ", across);
    let left = text_combine(" in the ", testament_name);
    let right3 = text_combine(", ", inside);
    let middle = text_combine(left, right3);
    let right4 = text_combine(middle, " in this book.");
    let sentence = text_combine(opening, right4);
    return sentence;
  }
  let unremarkable = null;
  return unremarkable;
}
