import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_negative } from "./lyric_video_picture_negative.mjs";
import { fal_draw_negative } from "./fal_draw_negative.mjs";
import { lyric_video_document_pictures_model_bench_attempts_generic } from "./lyric_video_document_pictures_model_bench_attempts_generic.mjs";
export async function lyric_video_document_pictures_model_bench_attempts_negative(
  path_document,
  model,
  attempts,
  size,
) {
  "$plain path_document";
  "$plain model";
  "$plain attempts";
  "$plain size";
  "Draws every scene an authored document asks for several times over on one model at one named size, steering each drawing away from lettering, so that how often the steering works can be counted.";
  "★ THIS IS THE ONE MEASUREMENT THAT DECIDES WHETHER BUYING AN HOUR OF A MACHINE IS WORTH IT, AND IT CAN BE TAKEN BEFORE BUYING THE HOUR. Thirteen scenes drawn once on Z-Image Base with this steering came back six clean and seven with gibberish across the middle, which is a little under half. If that rate holds over more tries, three tries reach a clean picture for about five scenes in six and four tries for about eleven in twelve - and on a machine paid for by the hour a wasted try costs seconds. The rate is the number, not whether the model ever gets it wrong.";
  "★ THE SIZE HAS TO BE NAMED BECAUSE THE RATE IS A PROPERTY OF THE SIZE AS MUCH AS OF THE MODEL. A model taught near one megapixel and asked for a sixth of that loses hold of the whole picture, so the share that comes back usable falls as the price falls - and it is their ratio, not either one, that says which rung is cheapest. Running this at one size and quoting the rate at another is how a cheap thing gets called cheap.";
  "★ A MODEL DISTILLED TO A FEW STEPS CANNOT BE STEERED THIS WAY AT ALL, so the model handed in has to be one that kept its guidance. Z-Image Turbo takes these words and quietly ignores them; Z-Image Base takes them and obeys. Running this against a turbo model would measure the plain model twice and call the second run a test of the steering.";
  "The folder is told apart from the same model's single-draw run by its ending, because both sets have to be on disk at once for the second to say anything about the first.";
  arguments_assert(arguments, 4);
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
  let r = await lyric_video_document_pictures_model_bench_attempts_generic(
    path_document,
    model,
    "_negative_attempts",
    attempts,
    draw,
    size,
  );
  return r;
}
