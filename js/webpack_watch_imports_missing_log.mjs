import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
import { function_imports_missing } from "./function_imports_missing.mjs";
import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
export async function webpack_watch_imports_missing_log(f_name, a_names) {
  "$plain f_name";
  arguments_assert(arguments, 2);
  ("a file has just been saved and is about to be built into the apps that use it - said out loud when it reaches for repo functions its import lines never bring in.");
  ("★ A MISSING IMPORT IS THE ONE BREAKAGE A BUILD CANNOT SEE. A bundler follows the import lines it is given and never asks what the body reads, so a name the file uses and never brings in bundles perfectly and throws the moment that line runs. The whole-repo reading catches it before a commit; nothing stood between saving the file and the phone loading it, so it was met on the phone.");
  ("Only the file that changed is read, and only when some app is actually built out of it. That is what makes this affordable at all: the same question asked of the whole repo takes three quarters of a minute, and a piece thirty apps share would ask it thirty times over.");
  ("It says so and lets the build go on. Refusing to build would trade a bundle that throws on one screen for a bundle that is quietly weeks old on every screen, and a stale bundle is the harder of the two to notice - it looks exactly like a working one.");
  let watched = list_empty_not_is(a_names);
  if (not(watched)) {
    return;
  }
  let missing = await function_imports_missing(f_name);
  let any = list_empty_not_is(missing);
  if (not(any)) {
    return;
  }
  fn_name("webpack_watch");
  log(webpack_watch_imports_missing_log.name, {
    f_name,
    missing,
    a_names,
  });
}
