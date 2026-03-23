import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export async function playwright_by_attribute_named_all(page, name) {
  log(playwright_by_attribute_named_all.name, {
    name,
  });
  let locator = playwright_by_attribute_named(page, name);
  function lambda5(elements, name) {
    function lambda4(el) {
      let r = el.getAttribute(name);
      return r;
    }
    let r2 = elements.map(lambda4);
    return r2;
  }
  const values = await locator.evaluateAll(lambda5, name);
  return values;
}
