import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_filter } from "./list_filter.mjs";
export function lyric_video_picture_lines(lines, picture) {
  "$plain lines";
  "$plain picture";
  "The lines of a lyric video that belong to one background picture, for a reviewer deciding whether that drawing fits those words.";
  "A LINE IS PLACED BY ITS MIDDLE AND NOT BY ANY OVERLAP AT ALL. The lines of a psalm run end to end while the pictures are cut at joins chosen by hand nearby, so a line and a join miss each other by a few tenths of a second almost every time. Asking for any overlap was tried and measured over Psalm 148: every one of the thirteen pictures then opened with the tail of the verse before it, thirteen lines of clutter on a phone screen, each one a verse the drawing was never meant to be behind. The middle of a line is on the screen under the drawing that is up for most of it, which is the drawing the words are being judged against.";
  "EVERY LINE STILL REACHES EXACTLY ONE PICTURE while the pictures run end to end, which they do in every document written so far. Measured over Psalm 148: thirty-two lines, thirty-two placements, none twice and none missed.";
  "THE MIDDLE IS COUNTED THE SAME WAY A MOMENT IS. A picture holds its own start and stops short of its end, so a middle landing exactly on a join belongs to the picture starting there - the same rule, so a line and the moment it is sung can never disagree about which drawing was up.";
  "A PICTURE WITH NO LINES IS AN ANSWER AND NOT A FAILURE. A drawing held over an instrumental opening has nothing sung over it, and that is a finished document rather than a broken one.";
  arguments_assert(arguments, 2);
  let start = property_get(picture, "start");
  let end = property_get(picture, "end");
  function line_over(line) {
    let spanned = add(line.start, line.end);
    let middle = divide(spanned, 2);
    let begun = less_than_equal(start, middle);
    let ending = less_than(middle, end);
    let over = begun && ending;
    return over;
  }
  let found = list_filter(lines, line_over);
  return found;
}
