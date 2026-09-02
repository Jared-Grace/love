import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_locator_handles_now } from "./playwright_locator_handles_now.mjs";
export async function playwright_selector_handles_now(page, selector) {
  "everything the selector matches at this moment, waiting for nothing and settling for none";
  "The twin that waits is right when the answer is expected to be there and the only question is when. This one is for asking whether it is there AT ALL, which a walk asks over and over while a screen is deciding what to show next.";
  arguments_assert(arguments, 2);
  let locator = page.locator(selector);
  let handles = await playwright_locator_handles_now(locator);
  return handles;
}
