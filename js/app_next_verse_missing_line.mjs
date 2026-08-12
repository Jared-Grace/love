import { ebible_language_to_name } from "./ebible_language_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_next_verse_missing_line(language) {
  "What stands in a reading where one bible has no verse to put there.";
  "It says which language answered with nothing at this number and stops there, because that is as far as what is known goes. Sometimes the bible really does not have the verse; sometimes it has the words under a number of its own, as Amharic does where it joins verses into ranges written in Ethiopic figures. From here the two look alike, so the line says the thing both of them share rather than picking one and being wrong half the time.";
  "It is a line in the reading rather than a warning beside it, so that a reader with three languages still sees the two that have the verse, in their proper places, with the gap shown where the third would have been.";
  let name = ebible_language_to_name(language);
  let line = text_combine_multiple([
    "(the ",
    name,
    " bible we have has nothing at this verse number)",
  ]);
  return line;
}
