import { list_single } from "../../../love/public/src/list_single.mjs";
import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
export async function playwright_by_attribute_click(page, name, value) {
  const list = await playwright_by_attribute(page, name, value);
  let only = list_single(list2);
  await list.click();
}
