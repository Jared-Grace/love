import { data_get } from "../../../love/public/src/data_get.mjs";
import { data_aliases_path } from "../../../love/public/src/data_aliases_path.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function function_alias_add_generic(alias) {
  let unaliased = null;
  let d_path = data_aliases_path();
  var {
    value: aliases,
    file_path,
    data,
  } = await data_get("aliases", {}, d_path);
  const exists = property_exists(aliases, alias);
  if (exists) {
    unaliased = object_property_get(aliases, alias);
  }
  let v = {
    exists,
    aliases,
    file_path,
    data,
    unaliased,
  };
  return v;
}
