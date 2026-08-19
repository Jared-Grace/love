import { gloss_write_files_named_generic } from "./gloss_write_files_named_generic.mjs";
export async function gloss_glosses_write_files_named(fn) {
  "Every passage of a gloss store that has new short English waiting to be written under its words, named by its chapter and by the verses it covers, read off the names of the files the short English was handed over in.";
  "The folder holds the hand-offs of every chapter at once, so a reading that stops at one chapter cannot answer anything about the folder as a whole - and clearing what is spent is a question about the whole of it. Reading them all and naming each with its chapter is the same walk, and the chapter-at-a-time reading is a filter over this rather than a second walk of its own.";
  "Files a whole passage was first authored in, and files a whole chapter was answered in at once, share the folder and are passed over: the first opens with a different word, and the second names no passage after its chapter and so has no second underscore to cut at.";
  "The verses come back separated by commas, which is how a passage names itself everywhere else; the file name spells them with a dash instead, because a comma in a file name is read as the end of an argument on the way in.";
  let opening = "glosses_";
  let r = await gloss_write_files_named_generic(fn, opening);
  return r;
}
