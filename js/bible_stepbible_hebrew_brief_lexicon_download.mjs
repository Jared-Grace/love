import { arguments_assert } from "./arguments_assert.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_stepbible_hebrew_brief_lexicon_download() {
  "Fetch STEPBible's brief Hebrew lexicon (TBESH, keyed by extended Strong's number) to one fixed file under gitignore, and return where it sits.";
  "IT TAKES NO ARGUMENTS, AND THAT IS THE SAFETY. The address and the file are both fixed here, so there is no way to point it anywhere else.";
  "A FILE ALREADY THERE IS KEPT, so asking again costs nothing; delete the file to fetch a fresh copy. The lexicon is CC BY (STEPBible.org), so anything shipped from it must credit STEPBible.";
  arguments_assert(arguments, 0);
  let path = folder_gitignore_join("stepbible_tbesh.txt");
  let exists = await file_exists(path);
  if (exists) {
    return {
      path,
      fetched: false,
    };
  }
  let url =
    "https://raw.githubusercontent.com/STEPBible/STEPBible-Data/master/Lexicons/TBESH%20-%20Translators%20Brief%20lexicon%20of%20Extended%20Strongs%20for%20Hebrew%20-%20STEPBible.org%20CC%20BY.txt";
  let text = await http_text_or_null(url);
  let b = null_is(text);
  let read = not(b);
  assert_json(read, {
    url,
    hint: "the lexicon could not be fetched - has the address moved?",
  });
  await file_overwrite(path, text);
  return {
    path,
    fetched: true,
  };
}
