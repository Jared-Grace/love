import { ebible_version_books_testament_new } from "./ebible_version_books_testament_new.mjs";
import { gloss_chapters_absent_books_generic } from "./gloss_chapters_absent_books_generic.mjs";
export async function gloss_chapters_absent_generic(fn, bible_folder) {
  "Every chapter of the New Testament one gloss store holds no file for at all, with how many that is against how many there are.";
  "A store reports on what it holds, so a chapter never begun is invisible to it - it has no file to be counted as unfinished, and a report over the files alone reads as finished while most of the book is untouched. This asks the bible instead and subtracts, which is the only way the never-begun ones can be seen.";
  "It is a report and never a gate. Chapters are authored over weeks, so a gate over this would stand red for months by design and would hold up every unrelated thing waiting behind it.";
  let books = await ebible_version_books_testament_new(bible_folder);
  let r = await gloss_chapters_absent_books_generic(fn, bible_folder, books);
  return r;
}
