import { error } from "./error.mjs";
import { text_combine } from "./text_combine.mjs";
export function todo(description) {
  error(text_combine("todo: ", description));
}
