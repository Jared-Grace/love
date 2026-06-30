import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { emoji_repeat_1 } from "../../../love/public/src/emoji_repeat_1.mjs";
export function app_code_example_text() {
  let left = emoji_repeat_1();
  let combined = text_combine(left, "Yes, show me another example");
  return combined;
}
