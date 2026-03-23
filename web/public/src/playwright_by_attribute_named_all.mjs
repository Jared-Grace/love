import { text_to } from "../../../love/public/src/text_to.mjs";
import { playwright_element_attribute_equals } from "../../../love/public/src/playwright_element_attribute_equals.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
import { list_filter } from "./list_filter.mjs";
export async function playwright_by_attribute_named_all(page, name, value) {
  value = text_to(value);
  name = text_combine("data-", name);
  log(playwright_by_attribute_named_all.name, {
    name,
  });
  let locator = playwright_by_attribute_named(page, name);
  const elements = await locator.evaluateAll(() => {}, name);
  log(playwright_by_attribute_named_all.name, {
    elements,
  });
  function lambda(element) {
    let r3 = playwright_element_attribute_equals(element, name, value);
    return r3;
  }
  let mapped = list_filter(elements, lambda);
  return mapped;
}
