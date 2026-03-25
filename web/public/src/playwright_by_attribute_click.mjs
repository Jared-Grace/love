import { playwright_by_attribute_single } from "../../../love/public/src/playwright_by_attribute_single.mjs";
export async function playwright_by_attribute_click(page, name, value) {
  let only = await playwright_by_attribute_single(page, name, value);
  await only.click();
}
