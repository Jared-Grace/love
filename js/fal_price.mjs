import { arguments_assert } from "./arguments_assert.mjs";
import { fal_http_options } from "./fal_http_options.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_generic } from "./http_generic.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function fal_price(model) {
  arguments_assert(arguments, 1);
  ("$plain model");
  ("Asks fal what it charges for one named model, and answers what it says: the price, the unit it charges by, and the currency.");
  ("★ THIS IS FAL'S PUBLISHED RATE, NOT A QUOTE FOR ANY ONE PICTURE. A rate charged per megapixel costs more for a bigger picture, and an edit may also charge for the pictures handed in, so what one picture costs still has to be worked out from the unit - or read off the bill after a known number of pictures.");
  let options = await fal_http_options();
  options.method = "GET";
  let url = text_combine(
    "https://api.fal.ai/v1/models/pricing?endpoint_id=",
    model,
  );
  let buffer = await http_generic(url, options);
  let answer = buffer_to_json(buffer);
  return answer;
}
