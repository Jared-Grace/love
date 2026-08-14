import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export function ebible_chapter_code_to_number(chapter_code) {
  "Which chapter of its book a chapter code names, as a number to count and compare by.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM08, chosen from the Bible's own book and chapter numbering. It names a chapter and nothing that runs.";
  "The code carries the number as padded text, which is enough to sort by and not enough to reckon with. Asking whether one chapter comes after another, or how many lie between them, is arithmetic, and that is what this is for.";
  let name_code = ebible_chapter_code_to_name_code(chapter_code);
  let number = integer_to_try(name_code);
  return number;
}
