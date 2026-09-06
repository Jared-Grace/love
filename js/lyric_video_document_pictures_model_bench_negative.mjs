import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_negative } from "./lyric_video_picture_negative.mjs";
import { fal_draw_negative } from "./fal_draw_negative.mjs";
import { lyric_video_document_pictures_model_bench_generic } from "./lyric_video_document_pictures_model_bench_generic.mjs";
export async function lyric_video_document_pictures_model_bench_negative(
  path_document,
  model,
) {
  "$plain path_document";
  "$plain model";
  "Draws every scene an authored document asks for on one named model, steering the drawing away from lettering, and puts the results in a folder of their own so the same model's plain run stays beside them to be compared.";
  "★ THE FOLDER CARRIES THE WORD `negative` SO THAT THE TWO RUNS OF ONE MODEL CANNOT OVERWRITE EACH OTHER. What is being asked is whether the second set of words changed anything, and the only way to answer that is to have both sets of pictures on disk at once. A run that wrote over its own predecessor would destroy the comparison it exists to make.";
  "THE STEERING IS WORKED OUT ONCE AND HELD FOR THE WHOLE RUN, because it must be word for word the same in every picture. A set drawn against wording that varied would be measuring the wording rather than the model.";
  "Everything else about the run - which scenes, what size, where they land, what counts as already drawn - is the run its plain twin makes, and is written where that is said. This is the asking and the ending on the folder, and nothing more.";
  arguments_assert(arguments, 2);
  let negative_prompt = lyric_video_picture_negative();
  async function draw(prompt, width, height) {
    let sample = await fal_draw_negative(
      model,
      prompt,
      negative_prompt,
      width,
      height,
    );
    return sample;
  }
  let r = await lyric_video_document_pictures_model_bench_generic(
    path_document,
    model,
    "_negative",
    draw,
  );
  return r;
}
