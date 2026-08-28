import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { app_code_lesson_family_roots } from "./app_code_lesson_family_roots.mjs";
import { app_code_lesson_symbol_source_names } from "./app_code_lesson_symbol_source_names.mjs";
import { app_code_lesson_telling_symbols_missing_one } from "./app_code_lesson_telling_symbols_missing_one.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_lesson_telling_symbols_missing() {
  arguments_assert(arguments, 0);
  ("every lesson of the code app whose question bank writes an operator symbol its own telling never shows.");
  ("Empty is the answer today and the answer this is meant to keep. Three lessons were found teaching one shape of line and asking about another, one of them by a person reading it, and each cost a reading of the lesson to find. The check costs a run.");
  ("The lessons are found by what they do rather than by a list kept here, so a lesson written tomorrow is judged the day it is written and no list can go stale behind it.");
  let names = await repo_love_functions_names();
  let roots = await app_code_lesson_family_roots(names);
  let source_names = app_code_lesson_symbol_source_names(names);
  let found = [];
  for (let root of roots) {
    let report = await app_code_lesson_telling_symbols_missing_one(
      root,
      roots,
      names,
      source_names,
    );
    let some = null_not_is(report);
    if (some) {
      list_add(found, report);
    }
  }
  return found;
}
