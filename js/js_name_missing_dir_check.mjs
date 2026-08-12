import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_exists_assert_json } from "./file_exists_assert_json.mjs";
export async function js_name_missing_dir_check(dir, name) {
  "Refuses a name the folder has no file for, before any file is read for it.";
  "The mirror of the check next door: one refuses a name already taken, this one refuses a name nothing answers to. A verb that changes an existing function needs the function to be there, and a verb that gives one a new name needs the name to be free.";
  "This is the quieter of the two failures and the harder to notice. A command that finds nothing to change does not break anything - it edits no file, throws nothing, and reports exactly what a command that worked reports. So a name with one letter wrong reads as success, and the parameter that never appeared is discovered by somebody much later wondering why.";
  "Measured on 2026-08-13: adding a parameter across a folder walks every file and edits the definition only where the name matches, so a name matching nothing walked the whole folder and did nothing at all. The verb that deletes a parameter never had this fault, because it reads the definition file straight and the read itself refuses - which is why the fault was invisible from the corpus until each pairing was asked separately.";
  let path = js_file_dir_path(dir, name);
  await file_exists_assert_json(path, {
    hint: "the function name should be one this folder has a file for — was it renamed, deleted, or spelled differently?",
    name,
  });
}
