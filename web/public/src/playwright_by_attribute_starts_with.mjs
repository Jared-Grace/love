import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { playwright_by_attribute_generic } from "../../../love/public/src/playwright_by_attribute_generic.mjs";
export async function playwright_by_attribute_starts_with(page, name, value) {
  let r = await playwright_by_attribute_generic(
    page,
    name,
    value,
    text_starts_with,
  );
  return r;
}
