import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_painting_prefix } from "./lyric_video_picture_painting_prefix.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { path_name } from "./path_name.mjs";
import { text_without_start } from "./text_without_start.mjs";
export function giveaway_painting_mark(file_name) {
  arguments_assert(arguments, 1);
  ("$plain file_name");
  ("Which painting of a passage a given-away file is, taken from the name the crop sits under on this disk.");
  ("★ A PAINTING IS MARKED BY ITS OWN NAME AND NOT BY ITS PLACE IN THE LIST, WHICH IS THE OPPOSITE OF HOW A SONG IS MARKED, AND THE DIFFERENCE IS NOT A TASTE. A song's mark is a number counting up through the takes of one passage, and that is safe there because a new take is only ever added at the end - the first take keeps the number one however many follow it. The pictures of a passage are ordered by the line of the psalm they come up on, so a painting put in between two that are already there moves every painting after it along by one, and a published name would then belong to a different painting. The crop's own name moves with the crop.");
  ("★ THE PAINTER'S NAME GOES IN THE PUBLISHED NAME, WHICH IS A CREDIT AND NOT ONLY AN ADDRESS. The crops are named for the painter and the picture - johansen_kerstboom - so a box listing its files tells a reader who painted each one without any table to look up. That is the thing the video descriptions on this disk were measured as failing at: eight hundred and seventy-two of them name a painter with no link anybody can follow.");
  ("The three characters saying the picture is a painting come off, because the word saying which kind of file this is already says it, and a name holding both would say it twice. The ending comes off for the same reason - the record carries it as its own piece and the naming puts it back on.");
  ("A name that does not carry those three characters stops rather than being marked. Every picture in every lyric video document on this disk is a crop of a painting today, measured, but pictures a model drew do exist and the day one of them is given away it is a different kind of file with a different word - so a drawn picture arriving here is this function being asked the wrong question rather than an edge case to be absorbed.");
  let prefix = lyric_video_picture_painting_prefix();
  let painting_is = text_starts_with(file_name, prefix);
  assert_json(painting_is, {
    hint: "this file is not a crop of a painting, so it has no painting mark - which kind of file is it?",
    file_name,
    prefix,
  });
  let stem = path_name(file_name);
  let mark = text_without_start(stem, prefix);
  return mark;
}
