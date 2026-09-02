import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { playwright_selector_handles_now } from "./playwright_selector_handles_now.mjs";
export async function playwright_happy_answers_now(page) {
  "the controls this screen is holding out to be answered at this moment, which is empty both before it has asked and after it has been answered";
  arguments_assert(arguments, 1);
  let selector = playwright_happy_answer_selector();
  let handles = await playwright_selector_handles_now(page, selector);
  return handles;
}
