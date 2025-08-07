import {error} from './error.mjs';
import {object_property_set} from "./object_property_set.mjs";
import {function_alias_add_generic} from "./function_alias_add_generic.mjs";
import {file_overwrite_json} from "./file_overwrite_json.mjs";
export async function function_alias_generic(alias,lambda) {
  let a= await function_alias_add_generic(alias);
lambda(a);
let {file_path,data}=a;
  await file_overwrite_json(file_path, data);
  
}
