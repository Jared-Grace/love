import { playwright_locator_handles } from "./playwright_locator_handles.mjs";
import { playwright_by_attribute_named } from "../../portfolio_qa/js/playwright_by_attribute_named.mjs";
export async function playwright_by_attribute_named_all(page, name) {
  let locator = playwright_by_attribute_named(page, name);
  let handles = await playwright_locator_handles(locator);
  return handles;
}
