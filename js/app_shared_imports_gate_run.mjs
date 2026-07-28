import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_imports_baseline_write } from "./app_shared_imports_baseline_write.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_app_specific_imports } from "./app_shared_app_specific_imports.mjs";
import { app_shared_imports_baseline_path } from "./app_shared_imports_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
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
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(offenders, recorded);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  list_empty_is_assert_json(added, {
    hint: "these shared units reach into one app and did not before - move what they need into shared code, or move the unit into the app it belongs to",
    added,
  });
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these were cleared - shrink the record with ",
      app_shared_imports_baseline_write.name,
      " so the same reach cannot come back unnoticed",
    ]),
    stale,
  });
  let r = {
    checked: list_size(offenders),
    added,
    stale,
  };
  return r;
}
