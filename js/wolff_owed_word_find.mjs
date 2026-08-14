import { property_get } from "./property_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { wolff_word_find } from "./wolff_word_find.mjs";
export async function wolff_owed_word_find(owed) {
  "Where Wolff's dictionary answers one word from a gloss worklist - as the word itself, or as the root some other dictionary already took it back to, or nowhere.";
  "$plain owed";
  "the owed row is a word waiting on an explanation together with what was already learnt about it. It is read and used to read what is already held here; nothing reaches anywhere and nothing it is given is run.";
  "The root is tried only after the word itself fails, and the answer says which of the two spoke. A text writes built words and this book is ordered by roots, so the two are not the same finding: the word answers about the word in front of the reader, the root answers about what it was built from, and an explanation that took the second for the first would name a meaning the reader's word does not carry on its own.";
  "The root comes from the other dictionary rather than from taking the word apart here. That is deliberate - a root worked out by stripping letters is a guess, and a wrong guess lands on a real entry as confidently as a right one, so nothing here invents one.";
  let word = property_get(owed, "word");
  let sites = property_get(owed, "sites");
  let root = property_get(owed, "root");
  let direct = await wolff_word_find(word);
  let left = property_get(direct, "found");
  let missing = equal(left, "none");
  if (not(missing)) {
    let answered = {
      word,
      sites,
      by: "word",
      found: property_get(direct, "found"),
      entries: property_get(direct, "entries"),
    };
    return answered;
  }
  let rootless = text_empty_is(root);
  if (rootless) {
    let nothing = {
      word,
      sites,
      by: "none",
      found: "none",
      entries: [],
    };
    return nothing;
  }
  let rooted = await wolff_word_find(root);
  let left2 = property_get(rooted, "found");
  let rooted_missing = equal(left2, "none");
  if (rooted_missing) {
    let nothing = {
      word,
      sites,
      by: "none",
      found: "none",
      entries: [],
    };
    return nothing;
  }
  let r = {
    word,
    sites,
    by: "root",
    root,
    found: property_get(rooted, "found"),
    entries: property_get(rooted, "entries"),
  };
  return r;
}
