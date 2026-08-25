import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
export async function ebible_version_books_browser_or_node(bible_folder) {
  "$plain bible_folder";
  "Every book one bible carries, asked of whichever of the two places this is running in.";
  "THE TWO ANSWERS ARE NOT THE SAME WORK AT ALL, which is why they were never one function. Away from a browser the bible is fetched, unzipped and read off the disk, and that is the road that ends in downloading and unpacking a release - a browser has no disk to put it on and no business doing it. In a browser the same list is one small file already published to storage, or a baked-in list for the English one.";
  "THE BUILD MACHINE'S ANSWER IS FETCHED AT THE MOMENT IT IS WANTED, not imported at the top. Branching in one place stops a page WALKING that road; it does nothing about the page CARRYING it, because a bundler follows every plain import whether the branch runs or not. Asked for by name instead, the fetch-and-unpack tree is not in the page to begin with - measured, that is the difference between a branch that is merely never taken and code that was never shipped.";
  "The choice is made here rather than at each caller because a caller wanting a bible's books does not care which of the two it gets, and every caller that picked for itself was a caller that could pick wrong. One of them did: a page reached the fetch-and-unzip road, which drags a whole build-time tree into its bundle and blanks the screen if it is ever actually walked.";
  arguments_assert(arguments, 1);
  let browser = browser_is();
  if (browser) {
    let here = await ebible_version_books_browser(bible_folder);
    return here;
  }
  let f_name = fn_name("ebible_version_books");
  let fn = await function_import_relative(f_name);
  let there = await fn(bible_folder);
  return there;
}
