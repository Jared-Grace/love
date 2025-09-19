import { string_upper_to } from "./string_upper_to.mjs";
export function ebible_chapter_code_normalize(chapter_code) {
  let u = string_upper_to(chapter_code);
  return u;
}
