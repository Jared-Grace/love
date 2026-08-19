import { http_generic } from "./http_generic.mjs";
import { http_option_sleep_none } from "./http_option_sleep_none.mjs";
import { file_write_buffer } from "./file_write_buffer.mjs";
import { bfl_draw_start } from "./bfl_draw_start.mjs";
import { bfl_draw_wait } from "./bfl_draw_wait.mjs";
export async function bfl_draw_write(model, prompt, width, height, file_path) {
  "the whole journey for one picture - ask Black Forest Labs to draw it, wait for it, and save it where it was asked for - so that a caller wanting a picture on disk says one line";
  "it saves the bytes rather than the address on purpose. The address they answer with stops working after ten minutes, so an address written down anywhere is a picture that has already been paid for and cannot be looked at again.";
  let polling_url = await bfl_draw_start(model, prompt, width, height);
  let tries = 120;
  let sample = await bfl_draw_wait(polling_url, tries);
  let options = http_option_sleep_none();
  let buffer = await http_generic(sample, options);
  await file_write_buffer(file_path, buffer);
  return file_path;
}
