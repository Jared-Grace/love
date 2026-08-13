import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_font_size_default() {
  "The text size a reading app opens at before anybody has chosen one.";
  "Named rather than written where it is used, because two pages opening at two different sizes is a difference nobody asked for and nothing would have said so - the second page would simply have looked wrong beside the first, and there is no reading of either that shows why.";
  arguments_assert(arguments, 0);
  let value = 20;
  return value;
}
