import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_code_lesson_same_message() {
  let r = text_combine(
    "This lesson is the same as the previous lesson, except ",
    "there are not numbers underneath",
  );
  return r;
}
