import { arguments_assert } from "./arguments_assert.mjs";
import { file_png_data_url } from "./file_png_data_url.mjs";
import { fal_draw_body } from "./fal_draw_body.mjs";
import { http_buffer_file_overwrite } from "./http_buffer_file_overwrite.mjs";
export async function fal_edit_write(model, prompt, path_input, path_output) {
  arguments_assert(arguments, 4);
  ("$plain model");
  ("$plain prompt");
  ("$plain path_input");
  ("$plain path_output");
  ("Hands one picture on this disk to a fal model that changes pictures, with words saying how to change it, and saves what comes back where it was asked for.");
  ("★ THE PICTURE GOES AS A DATA ADDRESS, NOT A PUBLIC ONE. The picture being changed is usually one nobody has decided to publish yet, and an address that has to be public could only ever reach a published one.");
  ("★ IT STARTS FROM THE PICTURE RATHER THAN FROM WORDS, AND THAT IS THE WHOLE POINT OF IT. A set of pictures drawn to match each other keeps matching only if each change starts from the picture itself; drawn again from words, the one changed picture comes back in another hand.");
  ("It asks for a PNG for the same reason every drawing road here does: flat colour meeting hard black lines is exactly what JPEG smears.");
  let image = await file_png_data_url(path_input);
  let body = {
    prompt,
    image_urls: [image],
    output_format: "png",
    enable_safety_checker: false,
  };
  let sample = await fal_draw_body(model, body);
  let written = await http_buffer_file_overwrite(sample, path_output);
  return written;
}
