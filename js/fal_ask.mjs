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
  ("★ IT ANSWERS THE WHOLE REPLY AND NOT THE TEXT, WHICH IS THE ONE PLACE IT DIFFERS FROM THE DRAWING TWIN BESIDE IT. `$fn ",
    fn_name("fal_draw_body"),
    "` digs the picture's address out and throws the rest away, and that is right there, because the rest is a seed and a timing nobody spends. Here the rest is the count of what was read and written, which is the price of the ask - and pricing this road was the whole reason for building it. A caller that wants only the words takes them off the answer; a caller that wants to know what it just spent cannot get it back once this has thrown it away.");
  ("★ THE MODEL IS NAMED BY THE CALLER, for the same reason the drawing road gives: the names belong to fal and they change, and a caller that has to say which one it wants is a caller that knows what it is spending. fal's own list runs from a three billion parameter Llama up to the largest houses, and the gap between the ends of it is the whole question of whether this half of the bill is cents or hundreds.");
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
