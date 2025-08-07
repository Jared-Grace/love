import {error} from './error.mjs';
import {object_property_set} from "./object_property_set.mjs";
import {function_alias_add_generic} from "./function_alias_add_generic.mjs";
import {file_overwrite_json} from "./file_overwrite_json.mjs";
export async function function_alias_add(alias_old, alias_new) {
  var {exists, aliases, file_path, data,unaliased} = await function_alias_add_generic(alias_old);
  if (!exists) {
    error();
  }

  object_property_delete(aliases, alias_old);
  object_property_set(aliases, alias_new, unaliased);
  await file_overwrite_json(file_path, data);
}
