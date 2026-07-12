import { property_exists_not } from "./property_exists_not.mjs";
export async function property_exists_not_if_async(v, property_name, lambda) {
  let ne = property_exists_not(v, property_name);
  if (ne) {
    await lambda();
  }
}
