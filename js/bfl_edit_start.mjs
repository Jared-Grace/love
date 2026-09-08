import { arguments_assert } from "./arguments_assert.mjs";
import { bfl_http_options } from "./bfl_http_options.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function bfl_edit_start(model, prompt, input_image) {
  "asks Black Forest Labs to change a picture that already exists rather than draw a new one, handing it the address of the picture and one sentence saying what to change, and returns the address to poll for the answer";
  "IT IS THE SAME ENDPOINT AND THE SAME MODEL AS DRAWING FROM NOTHING, and that is the whole reason this is four lines rather than a second service. Adding one field to the body turns the request from a drawing into an edit, so everything already built round the drawing - the key, the polling, the writing to a numbered attempt - is reused exactly as it stands.";
  "THE PICTURE IS PASSED AS AN ADDRESS AND NEVER AS ITS BYTES. The service fetches it itself, so the picture has to be somewhere public, which in practice means it has already been published. That is not a limitation worth working round: the picture worth changing is the one somebody has looked at and asked to be changed, and that is the kept one, and the kept one is published by the same hand that asks.";
  "NO WIDTH AND NO HEIGHT ARE SENT, unlike a drawing, because the shape of the answer is the shape of the picture handed in. Sending a size here would ask for the picture to be redrawn at that size, which is the thing an edit exists to avoid.";
  arguments_assert(arguments, 3);
  let options = await bfl_http_options();
  let url = text_combine("https://api.bfl.ai/v1/", model);
  let body = {
    prompt,
    input_image,
    safety_tolerance: 5,
    output_format: "png",
  };
  let buffer = await http_post_options(url, body, options);
  let started = buffer_to_json(buffer);
  let polling_url = started.polling_url;
  return polling_url;
}
