import { ebible_version_books_testament_old } from "./ebible_version_books_testament_old.mjs";
import { gloss_chapters_absent_books_generic } from "./gloss_chapters_absent_books_generic.mjs";
export async function gloss_chapters_absent_testament_old_generic(
  fn,
  bible_folder,
) {
  "Every chapter of the Old Testament one gloss store holds no file for at all, with how many that is against how many there are.";
  "The new testament's twin answers for a store that has been worked through to its end, and it then says nothing at all about the much larger half still untouched. A store whose new testament reads as finished is not a finished store, and this is the reading that says so.";
  "It is a report and never a gate, for the same reason its twin is not one: the old testament is authored over years, so a gate here would stand red by design.";
  let books = await ebible_version_books_testament_old(bible_folder);
  let r = await gloss_chapters_absent_books_generic(fn, bible_folder, books);
  return r;
}
