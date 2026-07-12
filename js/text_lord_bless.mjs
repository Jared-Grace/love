import { text_may_the_lord } from "./text_may_the_lord.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_lord_bless() {
  let v = text_combine(text_may_the_lord(), "bless ");
  return v;
}
