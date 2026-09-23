import { gloss_chapter_entries } from "./gloss_chapter_entries.mjs";
import { gloss_entries_explains_groups } from "./gloss_entries_explains_groups.mjs";
export async function gloss_chapter_explains_groups(chapter_code, fn) {
  "Every explanation written in one authored chapter, each carried beside the words that were handed it, whether that is one word or forty.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The twin next door keeps only the wordings a second word in the same chapter was given, which is what a person mending one chapter wants to see. This keeps them all, because a store-wide reading has to add a chapter's single uses to the other chapters' before it knows whether a wording is worth rewriting.";
  let entries = await gloss_chapter_entries(chapter_code, fn);
  let groups = gloss_entries_explains_groups(entries);
  return groups;
}
