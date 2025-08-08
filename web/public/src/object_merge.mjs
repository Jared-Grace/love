import {error} from './error.mjs';
import {each} from "./each.mjs";
import {object_properties} from "./object_properties.mjs";
import {object_property_exists} from "./object_property_exists.mjs";
export function object_merge(to, from) {
  each(object_properties(from), p => {
    if (object_property_exists(to, p)) {
      error();
    }
  });
}
