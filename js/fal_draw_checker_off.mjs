import { fn_name } from "./fn_name.mjs";
import { fal_http_options } from "./fal_http_options.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function fal_draw_checker_off(model, prompt, width, height) {
  "$plain model";
  "$plain prompt";
  "Ask fal to draw a picture on any model in their catalogue, and answer the address the finished picture can be fetched from.";
  ("★ IT SENDS ONLY THE FIELDS EVERY MODEL THERE ACCEPTS, WHICH IS THE WHOLE REASON IT EXISTS BESIDE `",
    fn_name("fal_draw"),
    "`. That one asks for `safety_tolerance`, which is a number Black Forest Labs invented and which the models from other houses do not answer to at all - so the older road can only ever drive their models, and a comparison between houses could not be run down it. What is common to all of them is a wording, a size, a picture format and a plain yes or no on the content check, so that is exactly what is sent.");
  ("★ THE CONTENT CHECK IS TURNED OFF RATHER THAN LOOSENED, WHICH IS THE SAME DECISION THE OLDER ROAD MAKES AND NOT A WIDER ONE. There the loosest number in the published range is asked for; here the field is a boolean and there is no loosest number to ask for, so the only way to say the same thing is to say it. What it was refusing was Scripture - a doorway with blood on the lintel and the two posts is Exodus 12, and a check that reads the word without the passage turns it down.");
  ("It waits for the drawing itself rather than answering a place to look, because fal's plain address holds the ask open until the picture is drawn. There is no polling to write here and nothing to time out half way.");
  ("It asks for a PNG every time and no caller may ask for anything else, for the reason the whole of this repo asks for PNG: flat areas of one colour meeting hard edges is the exact case JPEG smears, and a picture meant to sit behind lettering cannot afford a mottled ground.");
  let options = await fal_http_options();
  let url = text_combine("https://fal.run/", model);
  let body = {
    prompt,
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
