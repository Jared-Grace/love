import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { file_read } from "./file_read.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_lesson_rights_space_strip } from "./js_lesson_rights_space_strip.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_lesson_rights_space_strip } from "./function_lesson_rights_space_strip.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function app_code_lessons_rights_space_strip() {
  "takes the leading space off the name-words of every code lesson still carrying one, finds its own set, and asks again afterwards to show none is left";
  "The set is found rather than given, because a list written into the caller drifts";
  "from what is actually there the moment a lesson is added - and this is the sweep";
  "whose whole point is that nobody could see which lessons had the space and which";
  "did not.";
  "Each lesson is committed as it lands, messaged with its own name, so the log";
  "reads as one named command per lesson rather than one sweep nobody can replay.";
  "Whatever was already noted is committed first, so no step files a peer's";
  "uncommitted work under its own name.";
  "Asking again at the end is the proof. A sweep that answers with a list of what it";
  "meant to do is not evidence it did any of it.";
  await ai_git_noted();
  let paths = await functions_names_to_paths();
  async function carrying() {
    let found = [];
    for (let f_name of Object.keys(paths)) {
      let lesson_is = text_starts_with(f_name, "app_code_lesson");
      if (not(lesson_is)) {
        continue;
      }
      let f_path = property_get(paths, f_name);
      async function read() {
        let read_code = await file_read(f_path);
        return read_code;
      }
      let code = await catch_null_async(read);
      let unreadable = equal(code, null);
      if (unreadable) {
        continue;
      }
      let ast = null;
      function parse() {
        let parsed = js_parse(code);
        return parsed;
      }
      ast = await catch_null_async(parse);
      let torn = equal(ast, null);
      if (torn) {
        continue;
      }
      ("the strip is asked of a tree nobody will write back, so counting is all it does here");
      let count = js_lesson_rights_space_strip(ast);
      let any = greater_than(count, 0);
      if (any) {
        list_add(found, f_name);
      }
    }
    return found;
  }
  let before = await carrying();
  console.log("lessons carrying a leading space  " + list_size(before));
  for (let f_name of before) {
    let args = [f_name];
    await function_call_commit(function_lesson_rights_space_strip, args);
  }
  let after = await carrying();
  console.log("lessons carrying one now  " + list_size(after));
  let told = {
    stripped: list_size(before),
    remaining: after,
  };
  return told;
}
