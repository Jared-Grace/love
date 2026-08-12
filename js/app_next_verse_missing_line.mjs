import { ebible_language_to_name } from "./ebible_language_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_next_verse_missing_line(language) {
  "What stands in a reading where one bible has no verse to put there.";
  "It says which language is missing it and nothing more, because there is nothing more that is true: the verse exists, and the copy of that bible this repo holds does not have it. Blaming the reader's choice or apologising for the page would both be saying something else.";
  "It is a line in the reading rather than a warning beside it, so that a reader with three languages still sees the two that have the verse, in their proper places, with the gap shown where the third would have been.";
  let name = ebible_language_to_name(language);
  let line = text_combine_multiple([
    "(this verse is not in the ",
    name,
    " bible we have)",
  ]);
  return line;
}
