import { text_combine } from "./text_combine.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { bfl_http_options } from "./bfl_http_options.mjs";
export async function bfl_draw_start(model, prompt, width, height) {
  "ask Black Forest Labs to begin drawing a picture, and answer the address to ask at for it; the drawing does not happen while this waits, so what comes back is a place to look rather than a picture";
  "the model is named rather than chosen here because the names are theirs and they change - flux-2-pro-preview today - and a caller that has to say which one it wants is a caller that knows what it is spending";
  let options = await bfl_http_options();
  let url = text_combine("https://api.bfl.ai/v1/", model);
  let body = {
    prompt,
    width,
    height,
  };
  let buffer = await http_post_options(url, body, options);
  let started = buffer_to_json(buffer);
  let polling_url = started.polling_url;
  return polling_url;
}
