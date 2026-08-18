import { gloss_write_files_verse_keys_generic } from "./gloss_write_files_verse_keys_generic.mjs";
export async function gloss_explains_write_files_verse_keys(chapter_code, fn) {
  "The verses of every passage of one chapter that has new wording waiting to be written into it, read off the names of the files the wording was handed over in.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to look for and nothing that runs.";
  "Which passages have wording waiting is a fact about the folder, so it is read off the folder rather than typed out again beside it. A chapter is mended over many sittings and a list written by hand goes stale between two of them - quietly, because a passage left off a list looks exactly like a passage that needed nothing.";
  "The whole folder is read and this chapter kept, rather than the chapter's own files being looked for. The two answer alike, and the walk that names every waiting passage is wanted whole elsewhere, so it is the one that exists and this is a reading of it.";
  let opening = "explains_";
  let r = await gloss_write_files_verse_keys_generic(chapter_code, fn, opening);
  return r;
}
