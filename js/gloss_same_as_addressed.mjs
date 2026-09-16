import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_same_as_explains } from "./gloss_passages_same_as_explains.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
export function gloss_same_as_addressed(passages, met) {
  "The address to write for a word a reader has already met, or nothing where meeting it settles nothing.";
  "$plain passages";
  "the passages are the whole chapter, because the address has to be tried against everything it could catch, not only against what came before it.";
  "$plain met";
  "what is met is the note kept while reading down the chapter: the word as it was spelled, the verse it last stood in, and the last thing said about it there.";
  "The address names the nearest earlier explanation, because that is the one a reader going downward has just read and so the one a sentence sending them back is talking about.";
  "Two things have to hold before it is written, and each rules out a way of being quietly wrong. The address must catch exactly one explanation when it is tried over the whole chapter, which is the same question the check will ask later - so an address is never written that the check would refuse. And what it caught must be the very thing that was met, because an address that lands on one explanation by catching a different one has only looked right.";
  if (null_is(met)) {
    return null;
  }
  let explains = property_get(met, "explains");
  let pointer = {
    word: property_get(met, "word"),
    verse: property_get(met, "verse"),
  };
  let found = gloss_passages_same_as_explains(passages, pointer);
  let left = list_size(found);
  let settled = equal(left, 1);
  if (not(settled)) {
    return null;
  }
  let left2 = list_first(found);
  let right = list_first(explains);
  let same = equal(left2, right);
  if (not(same)) {
    return null;
  }
  return pointer;
}
