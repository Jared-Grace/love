import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export async function playwright_by_attribute_named_all_handles(page, name) {
  name = text_combine("data-", name);
  log(playwright_by_attribute_named_all_handles.name, {
    name,
  });
  const locator = playwright_by_attribute_named(page, name);
  await locator.first().waitFor({
    state: "attached",
  });
  const handles = await locator.elementHandles();
  return handles;
}
