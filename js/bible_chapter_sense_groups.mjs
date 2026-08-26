import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_sense_groups_given } from "./bible_chapter_sense_groups_given.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { bible_chapter_sense_groups_given_path } from "./bible_chapter_sense_groups_given_path.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
export async function bible_chapter_sense_groups(chapter_code) {
  "$plain chapter_code";
  "The parts one named chapter falls into, in reading order, as somebody who read it wrote them down.";
  "A chapter nobody has divided yet stops this rather than being divided some other way. Falling back on a rule would answer every caller with something that looks like an answer, and the caller cannot tell the two apart - so the one case where the parts are guesswork is exactly the case where nothing says so. Stopping names the chapter and the file to write it in, which is the shorter road to a correct answer than finding out later that a song began in the middle of a sentence.";
  arguments_assert(arguments, 1);
  let written = await bible_chapter_sense_groups_given();
  let groups = property_get_or(written, chapter_code, null);
  let path = bible_chapter_sense_groups_given_path();
  null_not_is_assert_json(groups, {
    chapter_code,
    path,
  });
  return groups;
}
