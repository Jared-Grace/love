import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_app_specific_imports } from "./app_shared_app_specific_imports.mjs";
import { app_shared_imports_baseline_path } from "./app_shared_imports_baseline_path.mjs";
import { list_size } from "./list_size.mjs";
export async function app_shared_imports_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: shared code depends on no single app.");
  ("Shared is the one place every app is allowed to reach, so what it reaches for is");
  ("carried by all of them. A shared button that imports one app hands that app to");
  ("every other app importing the button - and where the imported name is an app's");
  ("own entry point the cost is not theoretical: one such import measured 410 KiB on");
  ("a bundle.");
  ("It also breaks the direction the arrows are meant to run. An app may know about");
  ("shared code; shared code knowing about an app makes the pair one thing wearing");
  ("two names, and neither can then be read or moved on its own.");
  ("Measured against what the repo already carried rather than against zero, so the");
  ("rule binds what is written today instead of waiting on nine separate judgements");
  ("about where each of those things should have lived. The list only shrinks: a");
  ("name it does not hold fails, and a name it holds that no longer offends fails");
  ("too, because an entry left behind after a cleanup quietly lets the same thing");
  ("back in.");
  let offenders = await app_shared_app_specific_imports();
  let path = app_shared_imports_baseline_path();
  await baseline_names_gate_generic(
    offenders,
    path,
    "these shared units reach into one app and did not before - move what they need into shared code, or move the unit into the app it belongs to",
    fn_name("app_shared_imports_baseline_write"),
  );
  let r = {
    checked: list_size(offenders),
    added: 0,
    stale: 0,
  };
  return r;
}
