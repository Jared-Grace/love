import { text_may_the_lord_combine } from "./text_may_the_lord_combine.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_may_the_lord_exclamation(request) {
  let line = text_may_the_lord_combine(request);
  let exclaimed = text_combine(line, "!");
  return exclaimed;
}
