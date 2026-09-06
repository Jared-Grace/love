import { arguments_assert } from "./arguments_assert.mjs";
import { fal_http_options } from "./fal_http_options.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function fal_draw_body(model, body) {
  "$plain model";
  "$plain body";
  "Send an already-built ask to fal for one named model, and answer the address the finished picture can be fetched from.";
  "★ WHAT DIFFERS BETWEEN THE THREE ROADS INTO FAL IS THE ASK AND NOTHING ELSE. One sends Black Forest Labs' own loosest content number, one turns the check off outright, one adds words to steer away from - and all three then spelled the same address, sent it the same way, and dug the picture out of the answer at the same depth. Three copies of that digging do not break when the answer's shape changes; they drift, and two of them keep reading a field that has moved.";
  "The body is handed in whole rather than assembled from parts here, because the parts are exactly what the three roads disagree about. A shared step that took every field any road might send would have to know all three roads to know which to leave out.";
  "It waits for the drawing itself rather than answering a place to look. That is fal's own doing: their plain address holds the ask open until the picture is drawn, so there is no polling to write here and nothing to time out half way.";
  arguments_assert(arguments, 2);
  let options = await fal_http_options();
  let url = text_combine("https://fal.run/", model);
  let buffer = await http_post_options(url, body, options);
  let answer = buffer_to_json(buffer);
  let image = answer.images[0];
  let sample = image.url;
  return sample;
}
