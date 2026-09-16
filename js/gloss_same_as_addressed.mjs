import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { gloss_passages_same_as_explains } from "./gloss_passages_same_as_explains.mjs";
import { list_first } from "./list_first.mjs";
export function gloss_same_as_addressed(passages, met) {
  "The address to write for a word a reader has already met, or nothing where meeting it settles nothing.";
  "$plain passages";
  "the passages are the whole chapter, because the address has to be tried against everything it could catch, not only against what came before it.";
  "$plain met";
  "what is met is the note kept while reading down the chapter: the word as it was spelled, the verse it first stood in, and every different thing said about it so far.";
  "Three things all have to hold before an address is written, and each of them rules out a way of being quietly wrong. The reader must have met exactly one meaning, or there is nothing to choose between. The address must then catch exactly one explanation when it is tried over the whole chapter, which is the same question the check will ask later - so an address is never written that the check would refuse. And what it caught must be the very thing that was met, because an address that lands on one explanation by catching a different one has only looked right.";
  if (null_is(met)) {
    return null;
  }
  let explains = property_get(met, "explains");
  let alone = equal(list_size(explains), 1);
  if (not(alone)) {
    return null;
  }
  let pointer = {
    word: property_get(met, "word"),
    verse: property_get(met, "verse"),
  };
  let found = gloss_passages_same_as_explains(passages, pointer);
  let settled = equal(list_size(found), 1);
  if (not(settled)) {
    return null;
  }
  let same = equal(list_first(found), list_first(explains));
  if (not(same)) {
    return null;
  }
  return pointer;
}
