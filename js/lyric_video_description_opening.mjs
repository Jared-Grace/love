import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_painting_is } from "./lyric_video_picture_painting_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { lyric_video_singing_credit_line } from "./lyric_video_singing_credit_line.mjs";
import { greater_than } from "./greater_than.mjs";
import { lyric_video_pictures_credit_line } from "./lyric_video_pictures_credit_line.mjs";
export async function lyric_video_description_opening(named, pictures) {
  arguments_assert(arguments, 2);
  ("$plain named");
  ("$plain pictures");
  ("The heading under a published lyric video of Bible words: the passage named, how the pictures and the singing were made, and every painting used, in the order they come up.");
  ("The paintings are named here, in the heading, because the verses after it are cut from the end to fit and a list put after them would be the first thing lost.");
  let paintings = [];
  let drawn = [];
  for (let picture of pictures) {
    let painting_is = await lyric_video_picture_painting_is(picture);
    if (painting_is) {
      list_add(paintings, picture.scene);
      continue;
    }
    list_add(drawn, picture.path);
  }
  let painters = list_unique(paintings);
  let sung = lyric_video_singing_credit_line();
  let opening = named;
  let any = greater_than(pictures.length, 0);
  if (any) {
    let pictures_line = lyric_video_pictures_credit_line(
      painters.length,
      drawn.length,
    );
    opening = opening + "\n" + pictures_line;
  }
  opening = opening + "\n" + sung + "\n";
  let some = greater_than(painters.length, 0);
  if (some) {
    let paintings_heading =
      "The paintings in this video, in the order they come up:";
    opening =
      opening + "\n" + paintings_heading + "\n" + painters.join("\n") + "\n";
  }
  return opening;
}
