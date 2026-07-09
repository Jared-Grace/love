import { text_split } from "../../../love/public/src/text_split.mjs";
export function text_split_colon(chapter_verses) {
  let split = text_split(chapter_verses, ":");
  return split;
}
