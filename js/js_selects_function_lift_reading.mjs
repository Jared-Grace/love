import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { property_set } from "./property_set.mjs";
export async function js_selects_function_lift_reading(ast, selects) {
  "The one function a selector picked, and everything a lift needs to know about it, handed back as one thing.";
  "Both lifts open by taking the single selected function and reading it, and neither can begin any other way - so the opening was written twice and the two copies each carried their own sentence about why the reading lives next door. This is that opening under a name.";
  "The picked function travels inside the reading rather than beside it. Handed back as a pair, every caller would spend its next two lines taking the pair apart, and the opening they share would be as long as it was before it had a name.";
  arguments_assert(arguments, 2);
  let declaration = list_single(selects);
  let reading = await js_function_nested_lift_reading(ast, declaration);
  property_set(reading, "declaration", declaration);
  return reading;
}
