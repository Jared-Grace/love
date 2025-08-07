import {error} from './error.mjs';
import {object_property_set} from "./object_property_set.mjs";
import {function_alias_add_generic} from "./function_alias_add_generic.mjs";
import {file_overwrite_json} from "./file_overwrite_json.mjs";
export async function function_alias_add(alias, f_name) {
  let a= await function_alias_add_generic(alias);
lambda(a);
  await file_overwrite_json(file_path, data);
  
function lambda(a) {
      let {exists, aliases, file_path, data, unaliased } = a;
      if (exists) {
        error();
      }
      object_property_set(aliases, alias, f_name);
}
}
