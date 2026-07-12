import { text_combine } from "./text_combine.mjs";
export function css_class_prefix_combine(item) {
  let v = text_combine(".", item);
  return v;
}
