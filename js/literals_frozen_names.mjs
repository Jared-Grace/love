import { fn_name } from "./fn_name.mjs";
export function literals_frozen_names() {
  "The named constants whose value is recorded somewhere this repo cannot reach - a key in somebody's browser storage or a word in a bookmarked address - so the value may never be changed in place.";
  "Merging two spellings that turn out to mean different things is cheap to undo everywhere else: rename the function if it helps, write a second one holding the new value, and move the sites over one at a time. Nothing already written moves, because the old function keeps its old value.";
  "That repair does not reach a value already sitting on somebody else's disk. Editing one of these in place changes what every future read looks for while every past write stays as it was, and no later split can go back and fix the data.";
  "So these are frozen rather than judged. Listing a name here is a claim that the value has escaped, and the generated record beside it is what makes an in-place edit show up as a changed file rather than as nothing at all.";
  let spelled = fn_name("app_a_app_selected_key");
  let spelled2 = fn_name("app_a_function_name_selected_key");
  let spelled4 = fn_name("app_a_indexeddb_path_key");
  let spelled5 = fn_name("app_search_query_hash_key");
  let spelled6 = fn_name("app_shared_bible_mode_hash_key");
  let spelled7 = fn_name("browser_files_store");
  let spelled8 = fn_name("browser_files_database_name");
  let names = [
    spelled,
    spelled2,
    spelled4,
    spelled5,
    spelled6,
    spelled7,
    spelled8,
  ];
  return names;
}
