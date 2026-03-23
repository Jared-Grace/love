import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export async function playwright_by_attribute_named_all(page, name) {
  name = text_combine("data-", name);
  log(playwright_by_attribute_named_all.name, {
    name,
  });
  let locator = playwright_by_attribute_named(page, name);
  function lambda5(elements, name) {
    function lambda4(el) {
      let r = el.getAttribute(name);
      return r;
    }
    let r2 = elements.filter(lambda4);
    return r2;
  }
  const values = await locator.evaluateAll(lambda5, name);
  return values;
}
