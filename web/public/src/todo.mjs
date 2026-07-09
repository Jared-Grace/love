import { error } from "../../../love/public/src/error.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function todo(description) {
  error(text_combine("todo: ", description));
}
