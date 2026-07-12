import { list_single } from "./list_single.mjs";
import { playwright_by_attribute } from "./playwright_by_attribute.mjs";
export async function playwright_by_attribute_single(page, name, value) {
  let list = await playwright_by_attribute(page, name, value);
  let only = list_single(list);
  return only;
}
