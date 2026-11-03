import { text_combine } from "./text_combine.mjs";
import { text_may_the_lord } from "./text_may_the_lord.mjs";
export function text_may_the_lord_combine(request) {
  let left = text_may_the_lord();
  let line = text_combine(left, request);
  return line;
}
