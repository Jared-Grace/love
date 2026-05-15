import { each } from "../../../love/public/src/each.mjs";
export function properties_normalize_if_exists(name_properties) {
  function lambda() {}
  each(name_properties, lambda);
}
