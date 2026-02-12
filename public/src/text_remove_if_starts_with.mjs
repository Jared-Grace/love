import { text_replace_if_starts_with } from "../../../love/public/src/text_replace_if_starts_with.mjs";
export function text_remove_if_starts_with(item, prefix, replacement) {
  return text_replace_if_starts_with(item, prefix, replacement);
}
