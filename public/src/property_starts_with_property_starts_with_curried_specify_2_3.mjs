import { property_starts_with } from "../../../love/public/src/property_starts_with.mjs";
export function property_starts_with_property_starts_with_curried_specify_2_(
  property_name,
  prefix,
) {
  let c =
    function property_starts_with_property_starts_with_curried_specify_2_3_result(
      item,
    ) {
      let sw = property_starts_with(item, property_name, prefix);
      return sw;
    };
  return c;
}
