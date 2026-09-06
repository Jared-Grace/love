import { arguments_assert } from "./arguments_assert.mjs";
import { fal_draw_checker_off } from "./fal_draw_checker_off.mjs";
import { lyric_video_document_pictures_model_bench_generic } from "./lyric_video_document_pictures_model_bench_generic.mjs";
export async function lyric_video_document_pictures_model_bench(
  path_document,
  model,
) {
  "$plain path_document";
  "$plain model";
  "Draws every scene an authored lyric video document names a second time on a different model, into a folder of that model's own, so the two sets can be laid side by side.";
  "THE PLAIN RUN OF A MODEL, WHICH IS WHAT ITS FOLDER HAVING NO ENDING MEANS. It asks for the picture with the scene's own wording and nothing else, so it is the thing every other run of that model is compared against - and that is why it is the one that takes the model's bare name.";
  "The checker is turned off in the asking. What is being measured is a painted look held across a whole set, and a house that quietly refuses a scene mid-run leaves a gap in the set that reads as the model failing at that scene rather than as the run being interrupted.";
  arguments_assert(arguments, 2);
  async function draw(prompt, width, height) {
    let sample = await fal_draw_checker_off(model, prompt, width, height);
    return sample;
  }
  let r = await lyric_video_document_pictures_model_bench_generic(
    path_document,
    model,
    "",
    draw,
  );
  return r;
}
