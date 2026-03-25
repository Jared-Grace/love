import { playwright_locator_handles } from "../../../love/public/src/playwright_locator_handles.mjs";
import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
export async function playwright_by_attribute_all(page, name, value) {
  let locator = await playwright_by_attribute(page, name, value);
  let handles = await playwright_locator_handles(locator);
  return handles;
}
