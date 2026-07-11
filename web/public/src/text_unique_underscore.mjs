import { text_unique } from "../../../love/public/src/text_unique.mjs";
export function text_unique_underscore(used, name) {
  let unique = text_unique(used, name, "_");
  return unique;
}
