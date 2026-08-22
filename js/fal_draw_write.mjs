import { http_generic } from "./http_generic.mjs";
import { http_option_sleep_none } from "./http_option_sleep_none.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { fal_draw } from "./fal_draw.mjs";
export async function fal_draw_write(model, prompt, width, height, file_path) {
  "the whole journey for one picture through fal - ask for it, and save it where it was asked for - so that a caller wanting a picture on disk says one line";
  "it saves the bytes rather than the address, on purpose and for the same reason as the Black Forest Labs twin: an address written down anywhere is a picture that has already been paid for and will one day stop being fetchable.";
  "it writes over whatever was there before rather than refusing because a file of that name exists. Refusing is the one failure here that costs money - by the time the name is looked at the picture has been drawn and paid for, so the refusal throws away the very thing it was protecting.";
  let sample = await fal_draw(model, prompt, width, height);
  let options = http_option_sleep_none();
  let buffer = await http_generic(sample, options);
  await file_overwrite_buffer(file_path, buffer);
  return file_path;
}
