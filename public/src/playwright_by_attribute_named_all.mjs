import { identity } from "../../../love/public/src/identity.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
import { list_filter } from "./list_filter.mjs";
export async function playwright_by_attribute_named_all(page, name, value) {
  name = text_combine("data-", name);
  log(playwright_by_attribute_named_all.name, {
    name,
  });
  let locator = playwright_by_attribute_named(page, name);
  const elements = await locator.evaluateAll(identity, name);
  function lambda(element) {
    let actual = element.getAttribute(name);
    let r3 = actual === value;
    return r3;
  }
  let mapped = list_filter(elements, lambda);
  return mapped;
}
