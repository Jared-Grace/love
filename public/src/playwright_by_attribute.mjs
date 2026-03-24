import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export function playwright_by_attribute(page, name, value) {
  let replaced = text_replace(value, '"', '\\"');
  const inside = name + '="' + replaced + '"';
  let r = playwright_by_attribute_named(page, inside);
  return r;
}
