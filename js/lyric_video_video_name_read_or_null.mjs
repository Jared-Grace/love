import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_file_name_ending } from "./lyric_video_file_name_ending.mjs";
import { not } from "./not.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_take } from "./text_take.mjs";
import { subtract } from "./subtract.mjs";
import { text_size } from "./text_size.mjs";
import { text_index_of_last_try } from "./text_index_of_last_try.mjs";
import { text_skip } from "./text_skip.mjs";
import { add } from "./add.mjs";
import { text_index_last } from "./text_index_last.mjs";
export function lyric_video_video_name_read_or_null(name_video) {
  arguments_assert(arguments, 1);
  ("$plain name_video");
  ("What a lyric video's file name says about itself - the passage it sings, which singing of it this is, and the translation shelf mark - or nothing at all when the name was not built by this rule.");
  ("★ IT IS THE EXACT INVERSE OF THE NAME BUILDER NEXT DOOR, AND THAT IS THE ONLY THING THAT MAKES IT TRUSTWORTHY. The builder joins the passage, the singing's mark and the shelf mark in a fixed order with fixed punctuation; this takes the same three apart in the opposite order, outermost first. Anything else - looking inside the file, asking a store, guessing from the digits - would be a second rule that could drift from the first, and a second rule about names is exactly the fault that left a video named after a singing nothing answers to.");
  ("★ A NAME IT CANNOT READ COMES BACK AS NOTHING RATHER THAN STOPPING, BECAUSE THE FOLDER THESE SIT IN IS NOT OURS. A downloads folder holds renders from other tools, screen captures, other songs entirely, and files a person named by hand; a reader that threw on the first of those would make every caller walk the folder defensively, and the honest answer about such a file is simply that this rule has nothing to say about it.");
  ("★ THE PASSAGE COMES BACK SPELLED AS THE NAME SPELLS IT, UNDERSCORE AND NOT COLON, AND IT IS NOT PUT BACK. A file name may not hold a colon, so the builder writes one as an underscore - but an underscore is also an ordinary letter in these passages, so turning every one back into a colon would corrupt the names that never held one. The caller that wants to compare two videos is comparing two names, and on that side the substitution has already happened to both.");
  ("The mark of the plain singing is the empty text rather than nothing, because the builder treats it that way too: a video with no mark is not a video whose mark is unknown, it is the first and only singing.");
  let ending = lyric_video_file_name_ending();
  let b = text_ends_with(name_video, ending);
  if (not(b)) {
    return null;
  }
  let left = text_size(name_video);
  let right = text_size(ending);
  let count = subtract(left, right);
  let head = text_take(name_video, count);
  let opener = " (";
  let index_shelf = text_index_of_last_try(head, opener);
  if (less_than(index_shelf, 0)) {
    return null;
  }
  let right2 = text_size(opener);
  let skip_count = add(index_shelf, right2);
  let shelf_mark = text_skip(head, skip_count);
  let rest = text_take(head, index_shelf);
  let b2 = text_ends_with(rest, ")");
  if (not(b2)) {
    let answer_plain = {
      passage: rest,
      mark: "",
      shelf_mark: shelf_mark,
    };
    return answer_plain;
  }
  ("Dropping the closing bracket of the singing's mark is what lets the same search find its opening one.");
  let count2 = text_index_last(rest);
  let inner = text_take(rest, count2);
  let index_mark = text_index_of_last_try(inner, opener);
  if (less_than(index_mark, 0)) {
    return null;
  }
  let right3 = text_size(opener);
  let skip_count2 = add(index_mark, right3);
  let mark = text_skip(inner, skip_count2);
  let passage = text_take(inner, index_mark);
  let answer = {
    passage: passage,
    mark: mark,
    shelf_mark: shelf_mark,
  };
  return answer;
}
