import { arguments_assert } from "./arguments_assert.mjs";
import { path_basename } from "./path_basename.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function lyric_video_picture_painting_is(picture) {
  "Whether one picture of a lyric video is a crop of a painting a person painted, rather than a picture an image model drew.";
  "★ IT IS DECIDED BY THE NAME OF THE FILE AND NOT BY THE SCENE BESIDE IT. A crop of a painting is saved under a name beginning pd_, and that prefix is put there by the hand that cropped it - so it is a statement about where the picture came from. The scene beside a painting happens to name the painter today, but it is prose written for a reader, and a prose sentence that has to be parsed to answer a question about provenance is the wrong evidence: a scene that stopped mentioning a museum would silently change the answer.";
  "★ THE ANSWER DECIDES WHAT MAY BE SAID UNDER A PUBLISHED VIDEO. A sentence claiming no painting by a person was used is false the moment one of these is in the video, and a sentence naming a painter is false the moment the picture was drawn instead. So this is asked once per picture rather than assumed once per video.";
  arguments_assert(arguments, 1);
  let name = await path_basename(picture.path);
  let painting_is = text_starts_with(name, "pd_");
  return painting_is;
}
