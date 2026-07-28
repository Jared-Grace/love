import { equal } from "./equal.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { function_name_family } from "./function_name_family.mjs";
import { function_imports } from "./function_imports.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_app_specific_imports() {
  "Every place a shared unit reaches into one particular app - each answer naming";
  "the shared function and the app-specific name it imports.";
  "Shared code is what every app is allowed to depend on, so it can depend on no";
  "app itself. Break that and the shared closure stops being shared: an app";
  "importing one shared button now carries whatever app that button reached for.";
  "Twice the imported name is a whole app entry point, and a name-only import of";
  "one of those was measured at 410 KiB on a bundle.";
  "The pair is the answer rather than the shared function alone, because one";
  "shared function can reach into two apps and fixing one of them should not read";
  "as fixing both.";
  let names = await folder_read_files("js");
  let app_names = await apps_names_prefixed();
  let offenders = [];
  for (let name of names) {
    let is_source = name.endsWith(".mjs");
    if (not(is_source)) {
      continue;
    }
    let f_name = name.slice(0, -4);
    let shared_is = f_name.startsWith("app_shared_");
    if (not(shared_is)) {
      continue;
    }
    let imports = await function_imports(f_name);
    for (let imported of imports) {
      let family = function_name_family(imported, app_names);
      let app_is = family.startsWith("app_");
      let shared_family_is = equal(family, "app_shared_");
      if (app_is && not(shared_family_is)) {
        let pair = text_combine_multiple([f_name, " -> ", imported]);
        list_add(offenders, pair);
      }
    }
  }
  offenders.sort();
  return offenders;
}
