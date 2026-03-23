import { playwright_locator_wait } from "../../../love/public/src/playwright_locator_wait.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export async function playwright_by_attribute_named_all(page, name) {
  log(playwright_by_attribute_named_all.name, {
    name,
  });
  const locator = playwright_by_attribute_named(page, name);
  await playwright_locator_wait(locator);
  const handles = await locator.elementHandles();
  return handles;
}
