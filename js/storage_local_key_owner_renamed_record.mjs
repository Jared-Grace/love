import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_owner_renames_path } from "./storage_local_key_owner_renames_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { storage_local_key_names_path } from "./storage_local_key_names_path.mjs";
import { list_includes } from "./list_includes.mjs";
import { or } from "./or.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { storage_local_key_owner_renames_code } from "./storage_local_key_owner_renames_code.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_js } from "./folder_js.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_auto } from "./function_auto.mjs";
export async function storage_local_key_owner_renamed_record(
  f_name_before,
  f_name_after,
) {
  "$plain f_name_before";
  "$plain f_name_after";
  "Called by every rename. When the old name is one people's browsers have filed settings under, records the rename so the browser carries those settings across to the new name, and moves the name in the record of published key names so it stays true. Answers with the renames recorded, or null when the old name reached no browser.";
  "An entry already pointing at the old name is pointed at the new one too, so every old name always leads straight to the name in use today.";
  "Either name in the list of published key names counts. The rename sweeps every data file for the old name before this is asked, so by the time it is asked the list already says the new name - and reading only the old name answered that nothing was published, and recorded nothing (seen 2026-10-30, renaming app_privacy_policy). The new name was free a moment ago, so finding it there can only mean this rename put it there.";
  arguments_assert(arguments, 2);
  let renames_path = storage_local_key_owner_renames_path();
  let renames = await file_read_json(renames_path);
  let names_path = storage_local_key_names_path();
  let names = await file_read_json(names_path);
  let published_before = list_includes(names, f_name_before);
  let published_after = list_includes(names, f_name_after);
  let published = or(published_before, published_after);
  let pointed = false;
  for (let rename of renames) {
    let after = property_get(rename, "after");
    let at_before = equal(after, f_name_before);
    let at_after = equal(after, f_name_after);
    if (or(at_before, at_after)) {
      property_set(rename, "after", f_name_after);
      pointed = true;
    }
  }
  let any = or(published, pointed);
  if (not(any)) {
    return null;
  }
  if (published) {
    let befores = list_map_property(renames, "before");
    let recorded = list_includes(befores, f_name_before);
    if (not(recorded)) {
      list_add(renames, {
        before: f_name_before,
        after: f_name_after,
      });
    }
    function name_lambda(name) {
      if (equal(name, f_name_before)) {
        return f_name_after;
      }
      return name;
    }
    let moved = list_map(names, name_lambda);
    await file_overwrite_json(names_path, moved);
  }
  await file_overwrite_json(renames_path, renames);
  let code = storage_local_key_owner_renames_code(renames);
  let f_name = fn_name("storage_local_key_owner_renames");
  let dir = folder_js();
  let path = js_file_dir_path(dir, f_name);
  await file_overwrite(path, code);
  await function_auto(f_name);
  return renames;
}
