import { each } from "../../../love/public/src/each.mjs";
export function properties_normalize_if_exists(object, properties) {
  function lambda() {}
  each(properties, lambda);
}
