import { arguments_assert } from "./arguments_assert.mjs";
import { bfl_edit_start } from "./bfl_edit_start.mjs";
import { bfl_draw_wait_write } from "./bfl_draw_wait_write.mjs";
export async function bfl_edit_write(model, prompt, input_image, file_path) {
  "changes one picture that already exists and saves the answer to a path, waiting for the service the whole time";
  "IT WAITS WITH THE SAME WAITER THE DRAWING USES, because an edit and a drawing come back the same way - a polling address, a sample, and a file. Only the asking differs, so only the asking has its own function.";
  arguments_assert(arguments, 4);
  let polling_url = await bfl_edit_start(model, prompt, input_image);
  let tries = 120;
  await bfl_draw_wait_write(polling_url, tries, file_path);
  return file_path;
}
