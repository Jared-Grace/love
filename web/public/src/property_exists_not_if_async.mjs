import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
export async function property_exists_not_if_async(v, property_name, lambda2) {
  let ne = property_exists_not(v, property_name);
  if (ne) {
    await lambda2();
  }
}
