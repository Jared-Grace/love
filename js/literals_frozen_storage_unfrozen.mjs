import { fn_name } from "./fn_name.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { function_imports } from "./function_imports.mjs";
import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not } from "./not.mjs";
export async function literals_frozen_storage_unfrozen() {
  "Every written word that a browser database is opened with and that nothing has frozen - each answer naming the function that opens the database and the word it opened it with.";
  "A word handed to the opening of a browser database is published by that one act. From then on it is written on somebody else's disk, and their browser looks under it and under nothing else, so changing it here leaves every future read looking for the new word while every past write still holds the old one. Renaming the function that holds it is safe; changing what it hands back is not, and no later repair can reach the data.";
  "That is why this can be asked at all, where whether a word has escaped is otherwise a judgement nobody here can make. Nothing is being guessed from a name or a meaning: the word was passed to the opening of a database, which is what escaping IS.";
  "The pair is the answer rather than the word alone, so a database opened with two unfrozen words reads as two things to fix rather than one.";
  let identifiers = await data_identifiers_get();
  ("Both ways of reaching a database count: the ones that ask the shared opener, and the two that still speak to the browser directly. Asking the index for the browser's own name is what finds the second kind, and it is the same question, so a third one written tomorrow is found without anybody adding it here.");
  let direct = property_or_null(identifiers, "indexedDB");
  let shared = property_or_null(
    identifiers,
    fn_name("indexeddb_database_open"),
  );
  let openers = list_concat_unique(direct, shared);
  let frozen = literals_frozen_names();
  let offenders = [];
  for (let f_name of openers) {
    let imports = await function_imports(f_name);
    for (let imported of imports) {
      let kept = list_includes(frozen, imported);
      if (kept) {
        continue;
      }
      ("Only what hands back one written word is asked about. What the opening is given besides those is either a number, which no browser looks anything up by, or a function, which holds no word at all - and asking either of them for a value gets nothing back, which is the same answer as a word that is empty.");
      let path = js_file_dir_path(folder_js(), imported);
      let code = await file_read(path);
      let literal = js_code_getter_literal(code, imported);
      let word = not_equal(literal, "");
      if (not(word)) {
        continue;
      }
      let pair = text_combine_multiple([f_name, " -> ", imported]);
      list_add(offenders, pair);
    }
  }
  offenders.sort();
  return offenders;
}
