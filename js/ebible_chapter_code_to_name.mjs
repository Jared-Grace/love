import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { text_to } from "./text_to.mjs";
export function ebible_chapter_code_to_name(chapter_code) {
  let i = ebible_chapter_code_to_number(chapter_code);
  let chapter_name = text_to(i);
  return chapter_name;
}
