import {list_map_property} from './list_map_property.mjs';
export function js_identifiers_to_names(identifiers) {
    const names = list_map_property(identifiers, "name");
  return names;
}
