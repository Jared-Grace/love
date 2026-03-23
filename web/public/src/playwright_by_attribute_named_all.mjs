import { playwright_locator_handles } from "../../../love/public/src/playwright_locator_handles.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export async function playwright_by_attribute_named_all(page, name) {
  log(playwright_by_attribute_named_all.name, {
    name,
  });
  const locator = playwright_by_attribute_named(page, name);
  const handles = await playwright_locator_handles(locator);
  return handles;
}
