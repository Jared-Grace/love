import { arguments_assert } from "./arguments_assert.mjs";
import { fal_draw_checker_off } from "./fal_draw_checker_off.mjs";
import { lyric_video_document_pictures_model_bench_attempts_generic } from "./lyric_video_document_pictures_model_bench_attempts_generic.mjs";
export async function lyric_video_document_pictures_model_bench_attempts_plain(
  path_document,
  model,
  attempts,
  size,
) {
  "$plain path_document";
  "$plain model";
  "$plain attempts";
  "$plain size";
  "Draws every scene an authored document asks for several times over on one model at one named size, sending nothing but the wording, so that a model which cannot be steered can still be counted.";
  "★ THIS IS THE CHEAPEST RUNG ON THE LADDER AND SO IT IS THE ONE TO CLIMB FIRST. A model distilled to a few steps does about a tenth of the work of the full one and is sold for half the price of it, so if it can hold the look and keep its middle quiet, every question above it - what the full model costs, whether an hour of a machine is worth buying, whether a card is worth owning - stops needing to be asked at all. Testing the dearest thing first answers a question nobody has to pay to have answered.";
  "★ CHEAPNESS HAS TWO DIALS AND THIS IS BOTH OF THEM AT ONCE, WHICH IS WHY THE SIZE COMES IN HERE. A distilled model halves the price of a picture; drawing at a quarter of the width and a quarter of the height divides it by sixteen. The second dial is much the larger of the two and it works on every model, so the bottom of the ladder is the cheap model at the small size and the only way to know what that looks like is to draw the accepted scenes there and look at them.";
  "★ IT SENDS NO WORDS TO STEER AWAY FROM, AND THAT IS THE WHOLE DIFFERENCE FROM THE RUN BESIDE IT. A distilled model has no second pass for those words to ride on, so a house either turns the ask down or takes the words and quietly does nothing with them - and the second of those is the dangerous one, because it looks exactly like a measurement of steering that happened to fail. Sending nothing means what comes back is honestly the plain model, and the number it earns is its own.";
  "★ SO THE TWO RUNS ANSWER DIFFERENT QUESTIONS AND NEITHER REPLACES THE OTHER. The steered run asks how often steering works on a model that can be steered. This asks how often a model that cannot be steered is clean anyway. A model that is clean without being asked is worth more than one that has to be asked, because the asking is what the second pass is spent on.";
  "The folder is told apart by its ending in the usual way, so a model drawn both ways keeps both sets and the two can be laid side by side.";
  arguments_assert(arguments, 4);
  async function draw(prompt, width, height) {
    let sample = await fal_draw_checker_off(model, prompt, width, height);
    return sample;
  }
  let r = await lyric_video_document_pictures_model_bench_attempts_generic(
    path_document,
    model,
    "_plain_attempts",
    attempts,
    draw,
    size,
  );
  return r;
}
