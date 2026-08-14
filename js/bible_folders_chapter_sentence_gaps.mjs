import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folders_chapter_ends } from "./bible_folders_chapter_ends.mjs";
import { bible_ends_languages_combine } from "./bible_ends_languages_combine.mjs";
import { bible_ends_sentence_gaps } from "./bible_ends_sentence_gaps.mjs";
export async function bible_folders_chapter_sentence_gaps(
  bible_folders,
  chapter_code,
  count,
) {
  "How far a passage is carried on in one chapter for a reader of several bibles at once - who is only let go when every one of them has finished the sentence.";
  arguments_assert(arguments, 3);
  let ends_each = await bible_folders_chapter_ends(
    bible_folders,
    chapter_code,
    count,
  );
  let together = bible_ends_languages_combine(ends_each);
  let measured = bible_ends_sentence_gaps(together);
  return measured;
}
