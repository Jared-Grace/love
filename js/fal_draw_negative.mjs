import { fal_http_options } from "./fal_http_options.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function fal_draw_negative(
  model,
  prompt,
  negative,
  width,
  height,
) {
  "$plain model";
  "$plain prompt";
  "$plain negative";
  "$plain width";
  "$plain height";
  "Draws one picture at fal from a prompt and a second set of words the drawing is steered away from, and answers where the finished picture can be fetched.";
  "★ IT STANDS BESIDE THE PLAIN DRAW RATHER THAN REPLACING IT BECAUSE NOT EVERY HOUSE ACCEPTS THESE WORDS. A model distilled to a few steps has no guidance to carry them and refuses the parameter or drops it silently, so sending them everywhere would turn a working road into a refusal for exactly the models that are fastest and cheapest. Which road a model is on is a fact about that model, and the caller is the one who knows it.";
  "The safety checker is turned off the same way the other cross-house road turns it off, because the parameter that does it here is the one every house but Black Forest Labs spells.";
  let options = await fal_http_options();
  let url = text_combine("https://fal.run/", model);
  let body = {
    prompt,
    negative_prompt: negative,
    image_size: {
      width,
      height,
    },
    output_format: "png",
    enable_safety_checker: false,
  };
  let buffer = await http_post_options(url, body, options);
  let answer = buffer_to_json(buffer);
  let image = answer.images[0];
  let sample = image.url;
  return sample;
}
