import { arguments_assert } from "./arguments_assert.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { functions_reachable_unguarded } from "./functions_reachable_unguarded.mjs";
import { function_browser_guarded_is } from "./function_browser_guarded_is.mjs";
import { function_imports } from "./function_imports.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { not } from "./not.mjs";
export async function apps_import_relative_unguarded() {
  "Every function a page can actually walk into that asks for a file by its name, without first asking where it is running.";
  "★ EACH NAME HERE IS A PAGE THAT DIES BEFORE IT DRAWS A LINE, not weight to trim. Asking for a file by joining its name into a path keeps a bundler from seeing through the address, and that is exactly what it is for - but it works only where the file it names is genuinely sitting next to this one on a disk, which is to say only on a build machine. In a browser the only thing beside the page is whatever the build put there, and the build was never shown this address, so nothing was ever written to it. The fetch fails, the failure is thrown, and everything below it is never drawn.";
  "The sister question asks which carried code could never run in a browser and answers about WEIGHT - a page paying to download what it will never execute. This one is the opposite fault: not code that is carried and never run, but code that is run and was never carried.";
  "It turns aside at the same environment checks a browser turns aside at, so the two halves written into one file are not accused. A function that asks where it is running has already made the split this is looking for; what remains is the one that never asked.";
  "It asserts it reached something before reporting what it found, because nothing wrong is what this says on a good day and also what it says on the day the walk never started.";
  arguments_assert(arguments, 0);
  let mains = apps_all_main_fns();
  let reachable = await functions_reachable_unguarded(mains);
  list_empty_not_is_assert_json(reachable, {
    hint: "no app main reached anything at all, so nothing was actually examined - the entry point list is the thing to look at, not the empty answer",
  });
  let by_name = fn_name("function_import_relative");
  async function offender_or_null(f_name) {
    let imports = await function_imports(f_name);
    let asks = list_includes(imports, by_name);
    if (not(asks)) {
      return null;
    }
    ("asked second because it costs a file read, and the first test has already put almost every function out of the question");
    let guarded = await function_browser_guarded_is(f_name);
    if (guarded) {
      return null;
    }
    return f_name;
  }
  let measured = await list_map_unordered_async(reachable, offender_or_null);
  let named = list_filter_null_not_is(measured);
  let offenders = list_sort_text(named);
  let walked = list_size(reachable);
  let r = {
    walked,
    offenders,
  };
  return r;
}
