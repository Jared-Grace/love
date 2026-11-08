import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { function_run } from "./function_run.mjs";
export async function qa_app_e2e_happy_public_run(app_name) {
  "$plain app_name";
  "Walks the latest build of one app at the address the public opens it at, if that app has such a walk, and answers with nothing at all if it has not - so whoever asked can fall back to walking it under latest.";
  "code joined first: it is the app that decides what to show by its address, and the one that went out broken for that reason on 2026-11-06. replace joined next, walked through a server that puts the latest build at the top of the site. a is left out on purpose: it is not public facing. A walk listed here must answer with something other than nothing when it passes, or the walk under latest runs as well.";
  "The walk arrives as a name and is fetched here rather than imported, for the same reason as its twin that walks a named stage: a list belonging to no app may import none of them.";
  arguments_assert(arguments, 1);
  let fns = [
    {
      app_name: app_shared_name_prefix_without(fn_name("app_code")),
      happy_f_name: fn_name("app_code_tests_run_e2e_happy_public"),
    },
    {
      app_name: app_shared_name_prefix_without(fn_name("app_replace")),
      happy_f_name: fn_name("app_replace_tests_run_e2e_public"),
    },
  ];
  let found = list_find_property_or_null(fns, "app_name", app_name);
  if (null_is(found)) {
    return null;
  }
  let happy_f_name = property_get(found, "happy_f_name");
  let walked = await function_run(happy_f_name, []);
  return walked;
}
