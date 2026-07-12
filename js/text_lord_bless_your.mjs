import { text_lord_bless } from "./text_lord_bless.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_lord_bless_your() {
  let blessing = text_combine(text_lord_bless(), "your ");
  return blessing;
}
