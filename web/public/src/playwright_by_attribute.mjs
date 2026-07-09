import { equal } from "../../../love/public/src/equal.mjs";
import { playwright_by_attribute_generic } from "../../../love/public/src/playwright_by_attribute_generic.mjs";
export async function playwright_by_attribute(page, name, value) {
  let r = await playwright_by_attribute_generic(page, name, value, equal);
  return r;
}
