import { playwright_locator_wait } from "../../../love/public/src/playwright_locator_wait.mjs";
export async function playwright_locator_handles(locator) {
  await playwright_locator_wait(locator);
  let handles = await locator.elementHandles();
  return handles;
}
