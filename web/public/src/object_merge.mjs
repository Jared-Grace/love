import {each} from "./each.mjs";
import {object_properties} from "./object_properties.mjs";
export function object_merge(to, from) {
  each(object_properties(from), p => {});
}
