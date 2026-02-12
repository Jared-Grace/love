import { text_remove_if_starts_with } from "../../../love/public/src/text_remove_if_starts_with.mjs";
export function text_remove_while_starts_with(item, prefix) {
  return text_remove_if_starts_with(item, prefix);
}
