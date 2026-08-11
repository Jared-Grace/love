import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_without } from "./list_without.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_name_id_category_then_file } from "./app_code_lesson_name_id_category_then_file.mjs";
export async function app_code_lesson_name_id_category_then_migrate() {
  arguments_assert(arguments, 0);
  ("Puts every lesson still writing the title nest by hand onto the shared unit.");
  ("The set is asked for rather than typed out. Every one of these lessons is a caller of the plain unit and nothing else is, so the list of callers is the list of work, and a lesson written tomorrow joins it without anybody remembering to add it.");
  ("The shared unit is a caller too, and the only one that is meant to hold the nest, so it is the one name taken back out.");
  ("Each file is committed as it is rewritten. A run this long is overtaken by somebody else's sweep, and a file swept up before this finishes says nothing about how it was changed.");
  await ai_git_noted();
  let callers = await data_identifiers_search("app_code_lesson_name_id_generic");
  let names = object_property_names(callers);
  let work = list_without(names, "app_code_lesson_name_id_category_then");
  let migrated = [];
  let passed_over = [];
  for (let name of work) {
    let args = [name];
    let report = await function_call_commit(
      app_code_lesson_name_id_category_then_file,
      args,
    );
    let done = property_get(report, "done");
    if (done) {
      list_add(migrated, name);
    }
    if (!done) {
      let reason = property_get(report, "reason");
      let skip = {
        name,
        reason,
      };
      list_add(passed_over, skip);
    }
  }
  let r = {
    migrated,
    passed_over,
  };
  return r;
}
