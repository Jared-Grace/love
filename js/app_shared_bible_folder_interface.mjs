import { global_function_get_or_null } from "./global_function_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export function app_shared_bible_folder_interface() {
  "Which bible a book's name on the screen is spelled out of - the language the app itself is shown in, which the reader sets, rather than any of the bibles they chose to read.";
  "The human ruled this 2026-11-08, after choosing Tagalog then English and still seeing the book called JUAN above English verses: the names on the screen belong to the app's own language, and the chosen bibles decide only the wording of the verses and the heading of a copied verse, which follows the first chosen.";
  "English unless the app has said otherwise. The app that teaches English shows its buttons in the reader's own language, so it names that reader's bible here, and the books are called what that bible calls them.";
  let stored = global_function_get_or_null(app_shared_bible_folder_interface);
  let missing = null_is(stored);
  if (missing) {
    let folder = ebible_folder_english();
    return folder;
  }
  return stored;
}
