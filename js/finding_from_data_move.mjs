import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { function_source_to_repoint } from "./function_source_to_repoint.mjs";
import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { data_folder } from "./data_folder.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists_assert_json } from "./file_exists_assert_json.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_includes } from "./text_includes.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_replace } from "./text_replace.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { function_run } from "./function_run.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { file_move } from "./file_move.mjs";
import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
export async function finding_from_data_move(name, path_fn_name) {
  "Move one file out of the data folder into the findings folder, and repoint the single function that says where it lives.";
  "A file in the data folder is read as a record of the present. The two commands that ask whether a name is still spoken for - one before a delete, one during a rename - read every file in there, so a function named anywhere in the data folder is answered still in use and a rename rewrites what a past run actually said. A file that is a record of what a check found out belongs on the other side of that line, and this is how one gets there.";
  "The function that spells the path is named rather than searched for. A search would have to guess which of the files spelling that word is the one holding the address, and guessing wrong here edits a function nobody asked about. Being told the name costs the caller a word they already know, and what it buys is that the function edited is the function meant.";
  "Two shapes of address are handled and no others: a whole path written out as one word, and the data folder asked for and joined with a file name. Anything else stops rather than being guessed at, because a path this does not recognise is a path it would move the file out from under.";
  "The proof is that the function is called afterwards and made to say where the file now is. Editing the letters of a path is not evidence the path came out right - only asking the function is - and the file is moved last, so a repointing that did not work leaves the file where every reader still expects it.";
  arguments_assert(arguments, 2);
  let repo = folder_repo_love();
  let data = data_folder();
  let records = findings_folder();
  let leaf = text_combine(name, ".json");
  let from_spelled = path_join([data, leaf]);
  let to_spelled = path_join([records, leaf]);
  let from = path_join([repo, from_spelled]);
  let to = path_join([repo, to_spelled]);
  await file_exists_assert_json(from, {
    hint: "there is no file of this name in the data folder to move",
    from_spelled,
  });
  await file_exists_not_assert_json(to, {
    hint: "the findings folder already holds a file of this name",
    to_spelled,
  });
  let text = await function_source_to_repoint(path_fn_name);
  let spells = text_includes(text, leaf);
  assert_json(spells, {
    hint: "this function does not spell that file at all, so it is not the one holding its address",
    path_fn_name,
    leaf,
  });
  let whole = text_includes(text, from_spelled);
  let part = fn_name("data_folder");
  let asked = text_includes(text, part);
  let written = text;
  if (whole) {
    written = text_replace(text, from_spelled, to_spelled);
  }
  if (asked) {
    let from2 = fn_name("data_folder");
    let to2 = fn_name("findings_folder");
    written = text_replace(written, from2, to2);
  }
  let moved_spelling = equal_not(written, text);
  assert_json(moved_spelling, {
    hint: "the address in this function is written in a shape this does not recognise - repoint it by hand rather than letting a guess move the file",
    path_fn_name,
  });
  let fn_path = function_name_to_path_absolute(path_fn_name);
  await file_overwrite_uncached(fn_path, written);
  await function_auto_checked(path_fn_name);
  let said = await function_run(path_fn_name, []);
  equal_assert_json(said, to_spelled, {
    hint: "the repointed function does not say the file is in the findings folder, so the file has been left where it was",
    path_fn_name,
  });
  await file_move(from, to);
  await file_to_commit_add_try(from);
  await file_to_commit_add_try(to);
  let r = {
    name,
    path_fn_name,
    from: from_spelled,
    to: to_spelled,
  };
  return r;
}
