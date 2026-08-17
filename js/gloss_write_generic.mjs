import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { gloss_passage_write } from "./gloss_passage_write.mjs";
export async function gloss_write_generic(
  chapter_code,
  verse_key,
  entries,
  passages_read,
  fn,
) {
  "Save one passage's authored word explanations into a named gloss store, under the passage the given verses name.";
  "The passage is looked up rather than described, so its wording in every bible the store was built from comes from that same reading and cannot be mistyped here.";
  "Which store it is is two answers, not one - how the chapter divides into passages, and which folder the store keeps them in - so both are asked for. Every store differs in exactly those two and in nothing else, which is why this is one function rather than one per store.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let passages = await passages_read(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  let path = await gloss_passage_write(passage, entries, fn);
  return path;
}
