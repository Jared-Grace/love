import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
export async function playwright_by_attribute_click(page, name, value) {
  await (await playwright_by_attribute(page, name, value)).click();
}
