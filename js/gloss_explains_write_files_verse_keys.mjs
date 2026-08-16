import { equal } from "./equal.mjs";
import { gloss_explains_write_files_named } from "./gloss_explains_write_files_named.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_explains_write_files_verse_keys(chapter_code, fn) {
  "The verses of every passage of one chapter that has new wording waiting to be written into it, read off the names of the files the wording was handed over in.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to look for and nothing that runs.";
  "Which passages have wording waiting is a fact about the folder, so it is read off the folder rather than typed out again beside it. A chapter is mended over many sittings and a list written by hand goes stale between two of them - quietly, because a passage left off a list looks exactly like a passage that needed nothing.";
  "The whole folder is read and this chapter kept, rather than the chapter's own files being looked for. The two answer alike, and the walk that names every waiting passage is wanted whole elsewhere, so it is the one that exists and this is a reading of it.";
  let named = await gloss_explains_write_files_named(fn);
  function mine_is(pair) {
    let left = property_get(pair, "chapter_code");
    let eq = equal(left, chapter_code);
    return eq;
  }
  let matched = list_filter(named, mine_is);
  function verse_key_read(pair) {
    let verse_key = property_get(pair, "verse_key");
    return verse_key;
  }
  let verse_keys = list_map(matched, verse_key_read);
  return verse_keys;
}
