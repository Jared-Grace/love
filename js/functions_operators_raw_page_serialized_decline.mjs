import { ai_git_noted } from "./ai_git_noted.mjs";
import { each_async } from "./each_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { folder_js } from "./folder_js.mjs";
import { function_auto_decline_add } from "./function_auto_decline_add.mjs";
import { function_auto_declined_is } from "./function_auto_declined_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { functions_operators_raw } from "./functions_operators_raw.mjs";
import { js_page_serializing_call_is } from "./js_page_serializing_call_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_operators_raw_page_serialized_decline() {
  "Asks every function still spelling its operators as symbols whether it hands work to a browser and writes the leave-me-alone request into the ones that do";
  "A function sent to a browser is sent as text, so the names this repo keeps are not there when it runs. Rewriting a comparison in one of them lands as a call to something undefined, in a place no gate can see - which is why the canonicalizing pass leaves them exactly as they are, and why they come back as still offending every single time somebody runs the repair";
  "That is the thing being fixed here. Two runs of the repair in a row returned nothing repaired and named the same functions as waiting, because the pass had already looked at them and correctly changed nothing. The work was real and there was no work to do, and nothing on the page said which";
  "Three of them were already carrying the reason in their own prose - the inner function is handed to the page rather than called - and it had no reader, exactly as the fourteen before them did. So this is not new knowledge being added, it is knowledge already written down being said in the words the reader matches";
  "The wider question is the one asked, whether the file talks to a page at all, rather than the narrower one of which functions are written out. A pass should act on the wider answer: a file that is in conversation with a browser is a file where a rewritten line can leave the repo through a door the repo cannot see through";
  "Nothing here shrinks the record the gate measures against, because nothing here removes an offense. The symbols are still written as symbols and that is the honest state - what changes is only that a sweep stops picking these up and finding, at some cost, that it can do nothing with them";
  await ai_git_noted();
  let offenders = await functions_operators_raw();
  let declined = [];
  let left = [];
  let already = [];
  async function lambda(one) {
    let f_name = property_get(one, "f_name");
    let asked_off = await function_auto_declined_is(f_name);
    if (asked_off) {
      list_add(already, f_name);
      return;
    }
    let file_name = function_name_to_base(f_name);
    let src = folder_js();
    let f_path = path_join([src, file_name]);
    let parsed = await file_js_parse(f_path);
    let ast = property_get(parsed, "ast");
    let serializes = js_page_serializing_call_is(ast);
    if (not(serializes)) {
      list_add(left, f_name);
      return;
    }
    let args = [f_name, "BROWSER-SERIALIZED"];
    await function_call_commit(function_auto_decline_add, args);
    list_add(declined, f_name);
  }
  await each_async(offenders, lambda);
  let r = {
    declined,
    already,
    left,
  };
  return r;
}
