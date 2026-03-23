import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
export function playwright_by_attribute(page, name, value) {
  '\\"';text_replace
  const inside = name + '="' + value + '"';
  let r = playwright_by_attribute_named(page, inside);
  return r;
}
