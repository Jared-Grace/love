import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_by_attribute_named } from "../../portfolio_qa/js/playwright_by_attribute_named.mjs";
import { playwright_locator_handles_now } from "./playwright_locator_handles_now.mjs";
export async function playwright_by_attribute_named_all_now(page, name) {
  "everything on the page carrying the named attribute at this moment, with none being an ordinary answer rather than something to wait for";
  arguments_assert(arguments, 2);
  let locator = playwright_by_attribute_named(page, name);
  let handles = await playwright_locator_handles_now(locator);
  return handles;
}
