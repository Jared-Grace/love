import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { list_find } from "./list_find.mjs";
import { equal } from "./equal.mjs";
export function gloss_passages_verses_key_find(passages, verse_key) {
  "The one passage of a chapter that covers the named verses, picked out of the chapter's passages by the verse numbers it is spelled with.";
  "A passage is named by the verses it covers rather than by where it stands in the chapter, so a passage keeps its name when the divisions around it are re-cut, and a file written under that name goes back to the same passage afterwards.";
  "$plain verse_key";
  "the key names the verses one passage covers. It names text to look for and nothing that runs.";
  function matches(candidate) {
    let left = g_sermon_passage_verses_key(candidate);
    let eq = equal(left, verse_key);
    return eq;
  }
  let passage = list_find(passages, matches);
  return passage;
}
