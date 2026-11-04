import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_post_url_find } from "./facebook_post_url_find.mjs";
export async function facebook_bible_chapter_tried_up_is(
  record,
  chapter_code,
  heading,
) {
  arguments_assert(arguments, 3);
  ("$plain record");
  ("$plain chapter_code");
  ("$plain heading");
  ("Whether an earlier run that stopped before recording chapter_code got its post up anyway, so that posting it again would post it twice.");
  ("★ IT ONLY LOOKS WHEN THE RECORD SAYS THIS CHAPTER WAS TRIED. Looking every time would find the same chapter's post from the last time round the bible, and skip it for good.");
  if (not_equal(record.trying, chapter_code)) {
    return false;
  }
  let url = await facebook_post_url_find(heading);
  let up = not_equal(url, null);
  return up;
}
