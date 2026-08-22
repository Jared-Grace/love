import { text_combine } from "./text_combine.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { bfl_http_options } from "./bfl_http_options.mjs";
export async function bfl_draw_start(model, prompt, width, height) {
  "ask Black Forest Labs to begin drawing a picture, and answer the address to ask at for it; the drawing does not happen while this waits, so what comes back is a place to look rather than a picture";
  "the model is named rather than chosen here because the names are theirs and they change - flux-2-pro-preview today - and a caller that has to say which one it wants is a caller that knows what it is spending";
  "it asks for a PNG, and it asks every time rather than letting the caller choose, because what comes back otherwise is a JPEG - and it arrives named whatever the caller saved it as, so a file called png was a JPEG inside for as long as nobody ran file over it. JPEG is the wrong end of the trade for everything drawn here: flat areas of one colour meeting hard black lines is the exact case it smears, so every lead line came back with a halo and the black ground came back faintly mottled rather than black. That mottling is not only ugly, it is load-bearing - a picture meant to sit invisibly on a black frame stops being invisible, and the edge of the shape can no longer be found by looking for where the black stops.";
  "no caller wants the other answer, so there is no parameter for it. One appears the day somebody does.";
  "THE CONTENT CHECK IS ASKED FOR AT ITS MOST PERMISSIVE, which is theirs to offer and not a way round anything: it is a number in their own published range, and the strictest and the loosest end of it are equally settings they support. It was never passed at all until now, so every drawing so far was made one step off the strictest setting there is - by omission rather than by anybody deciding that.";
  "WHAT IT WAS REFUSING WAS SCRIPTURE. The couplet that kept coming back Content Moderated asks for a doorway with blood on the lintel and the two posts, which is Exodus 12, and the check reads the word and not the passage. There is no case in which drawing that is the wrong thing to do, and paying for two refusals to get one Passover door was the whole cost of leaving this alone.";
  let options = await bfl_http_options();
  let url = text_combine("https://api.bfl.ai/v1/", model);
  let body = {
    prompt,
    width,
    height,
    safety_tolerance: 6,
    output_format: "png",
  };
  let buffer = await http_post_options(url, body, options);
  let started = buffer_to_json(buffer);
  let polling_url = started.polling_url;
  return polling_url;
}
