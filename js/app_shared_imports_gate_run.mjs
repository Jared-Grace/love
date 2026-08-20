import { app_shared_app_specific_imports_walked } from "./app_shared_app_specific_imports_walked.mjs";
import { property_get } from "./property_get.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_imports_baseline_path } from "./app_shared_imports_baseline_path.mjs";
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
  ("The number handed back is how many shared functions were opened, not how many");
  ("were wrong. Counting the faults said nothing: this family has stood at zero for");
  ("as long as the record goes back, so every run it has ever had printed a word");
  ("promising a sweep beside the one number that reads as no sweep at all - the");
  ("exact shape of a gate that is green because it never went and looked. Nothing");
  ("was wrong with it but the word, and the count of what the walk reached is what");
  ("now tells a clean family from an unread one.");
  let told = await app_shared_app_specific_imports_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = app_shared_imports_baseline_path();
  let name_write = fn_name("app_shared_imports_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these shared units reach into one app and did not before - move what they need into shared code, or move the unit into the app it belongs to",
    name_write,
  );
  return r;
}
