import { function_name_new_get_generic_overrides } from "./function_name_new_get_generic_overrides.mjs";
import { dictionary_functions_to_names } from "./dictionary_functions_to_names.mjs";
import { object_values } from "./object_values.mjs";
export function function_name_new_plugin_names() {
  "The name-deriving functions a copy or a wrap may be pointed at, taken from the shorthand table the human already types through rather than written out a second time. Every entry there is a pure name manipulation, which is the whole job asked of a plugin, so the table doubles as the list of plugins that can be trusted without reading them one at a time.";
  let overrides = function_name_new_get_generic_overrides();
  dictionary_functions_to_names(overrides);
  let names = object_values(overrides);
  return names;
}
