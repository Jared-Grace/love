import { assert_json } from "./assert_json.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
export function ebible_chapter_code_assert(chapter_code) {
  "$plain chapter_code";
  "A chapter code is a book code and a chapter number run together - HEB01, 1JN05, PSA023 - so it is letters and digits and nothing else.";
  "This is asked where a chapter code becomes part of a file name. The characters missing from that list are exactly the ones that would make the name reach a different folder, and a code arriving from a queue file or from the command line is data from somewhere else - so without this, which file gets written is chosen by whoever wrote the code rather than by the function.";
  let shaped = text_regex_match(chapter_code, /^[0-9A-Za-z]+$/);
  assert_json(shaped, {
    chapter_code,
    hint: "which chapter was meant? a chapter code is letters and digits run together, like HEB01 or 1JN05",
  });
}
