import { ebible_languages_bible_folder_exists_not_assert } from "./ebible_languages_bible_folder_exists_not_assert.mjs";
import { ebible_version_upload } from "./ebible_version_upload.mjs";
import { ebible_languages_add_item } from "./ebible_languages_add_item.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_run_fresh } from "./function_run_fresh.mjs";
export async function ebible_languages_add(bible_folder) {
  ebible_languages_bible_folder_exists_not_assert(bible_folder);
  await ebible_version_upload(bible_folder);
  await ebible_languages_add_item(bible_folder);
  ("The remembered chapters are worked out again last, after the language is in the list and not before. What is worked out there is read off the offered list, so a refresh asked first remembers the list as it was a moment ago - the new language absent - and that answer is then read from disk as if it were current. The language would be offered and hold no chapters, which is the one wrong answer the working-out refuses to make and would have been made behind its back.");
  ("PUTTING IT LAST WAS NOT ENOUGH, AND THE PARAGRAPH ABOVE WAS WRONG FOR ABOUT A YEAR. The list is a function in this repo, and a run that has already loaded a function goes on holding the version it loaded - so the refresh read the list as it stood when this process started, which is the list without the new language, whether it was asked first or last. The order was never what decided it. Asking it in a process that has loaded nothing yet is, and that is what the call below does.");
  ("It was found by the gate for exactly this, in September 2026, and it is the third member of the class. The other two were found by an answer looking wrong for some other reason; this one had a paragraph beside it saying it was safe.");
  let f_name = fn_name("ebible_languages_chapters_cache_refresh");
  let r = await function_run_fresh(f_name);
  return r;
  ("the following is here to serve as a link");
  fn_name("ebible_languages");
}
