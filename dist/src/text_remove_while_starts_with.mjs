import { text_prefix_without_inner } from "../../../love/public/src/text_prefix_without_inner.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function text_remove_while_starts_with(item, prefix) {
  let result = item;
  while (text_starts_with(result, prefix)) {
    result = text_prefix_without_inner(result, prefix);
  }
  return result;
}
