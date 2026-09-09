import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fal_http_options } from "./fal_http_options.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function fal_ask(model, prompt) {
  "$plain model";
  "$plain prompt";
  "Ask fal to put a writing model to a question, and answer the whole reply it sends back.";
  "★ THE REPLY DOES NOT SAY WHAT THE ASK COST, AND AN EARLIER WORDING HERE SAID IT DID. What comes back holds the words, the model's own working out, a half-finished flag and a fault - and no count of what was read or written at all. So the price of this road cannot be read off any single ask, and any figure for it has to come from fal's own billing after a known number of asks, or from the published rate of the same model bought somewhere the rate is published. Never quote a price this function appears to have returned.";
  ("★ IT STILL ANSWERS THE WHOLE REPLY, but for the other reason: the fault travels beside the words. `$fn ",
    fn_name("fal_draw_body"),
    "` digs the picture's address out and throws the rest away, and that is right there, because the rest is a seed and a timing nobody spends. Here a caller that took only the words would read a refusal as an empty answer, and would lose the working out, which is the one place a wrong scene says why it went wrong. A caller wanting only the words takes them off the answer.");
  ("★ THE ROAD IT TAKES IS MARKED NO LONGER SUPPORTED. fal's own page for this endpoint says so, and it answers correctly all the same. So treat it as measuring the road rather than as the road: it is enough to find out what the writing half costs and whether the scenes come back clean, and not enough to hang the whole Bible on. Going direct to a house needs a key nobody here holds yet, which is a decision rather than a piece of work.");
  ("★ THE MODEL IS NAMED BY THE CALLER, for the same reason the drawing road gives: the names belong to fal and they change, and a caller that has to say which one it wants is a caller that knows what it is spending. fal's own list runs from a one billion parameter Llama up to the largest houses, and the gap between the ends of it is the whole question of whether this half of the bill is cents or tens of pounds.");
  ("IT SENDS THE WHOLE INSTRUCTION AS THE PROMPT AND SETS NO SYSTEM PROMPT, because what is being asked here is one self-contained question with its rules inside it. A system prompt would be a second place the rules could live, and `$fn ",
    fn_name("lyric_video_picture_scenes_ask"),
    "` already builds them into one string on purpose so that what was asked can be read back whole.");
  ("THE ADDRESS IS SPELLED AND THE ASK SENT THE SAME WAY AS EVERY OTHER ROAD INTO FAL, and the key rides in the same header. What differs between the roads is the ask and what is dug out of the answer.");
  arguments_assert(arguments, 2);
  let options = await fal_http_options();
  let url = text_combine("https://fal.run/", "fal-ai/any-llm");
  let body = {
    model,
    prompt,
  };
  let buffer = await http_post_options(url, body, options);
  let answer = buffer_to_json(buffer);
  return answer;
}
