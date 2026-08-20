import { buffer_to_json } from "./buffer_to_json.mjs";
import { http_generic } from "./http_generic.mjs";
import { bfl_http_options } from "./bfl_http_options.mjs";
export async function bfl_draw_status(polling_url) {
  "ask once how a picture Black Forest Labs is drawing is getting on, and answer whatever they said, unchanged";
  "waiting is built on asking, but only asking can say why a wait went the way it did. A wait that runs out reports that it ran out and nothing more, so a picture that is queued behind other work and a picture that is quietly stuck look exactly the same from the outside; one question answers which.";
  let options = await bfl_http_options();
  let buffer = await http_generic(polling_url, options);
  let answer = buffer_to_json(buffer);
  return answer;
}
