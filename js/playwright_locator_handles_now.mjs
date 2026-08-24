import { arguments_assert } from "./arguments_assert.mjs";
export async function playwright_locator_handles_now(locator) {
  "every element the locator matches at this moment, waiting for nothing and settling for none";
  "the twin that waits is right when the answer is expected to be there and the only question is when. This one is for asking whether it is there AT ALL, where waiting is the wrong behaviour twice over: a run of screens that each ask the question once would spend half a minute per screen learning nothing, and 'none' is a real answer rather than a failure.";
  arguments_assert(arguments, 1);
  let handles = await locator.elementHandles();
  return handles;
}
