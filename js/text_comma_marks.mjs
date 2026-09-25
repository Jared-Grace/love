import { arguments_assert } from "./arguments_assert.mjs";
export function text_comma_marks() {
  "The marks the languages written here use for a comma.";
  "A COMMA IS THE ONE MARK THAT CAN STAND INSIDE A LIST WITHOUT ENDING IT. Verses thirteen, sixteen, nineteen and twenty is one thought and four verses, so a reading that stopped at the first comma would find the first of them and miss three. Every other mark ends what was being said.";
  "Arabic script writes its comma the other way up and English writes it the usual way, and both are commas. A reading asking after one of them by hand would be right in one store and wrong in the other.";
  arguments_assert(arguments, 0);
  let r = [",", "،"];
  return r;
}
