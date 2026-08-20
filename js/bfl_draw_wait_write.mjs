import { http_generic } from "./http_generic.mjs";
import { http_option_sleep_none } from "./http_option_sleep_none.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { bfl_draw_wait } from "./bfl_draw_wait.mjs";
export async function bfl_draw_wait_write(polling_url, tries, file_path) {
  "wait for a picture Black Forest Labs is already drawing and save its bytes where they were asked for, given only the address the drawing was started at";
  "this is the half of the journey that can be repeated, and it is a separate function because the other half cannot. Starting a drawing costs money and waiting for one does not, so when the waiting runs out the picture is paid for and sitting at an address, and the only thing that must not happen next is starting it again.";
  "the bytes are fetched here rather than handed back as an address, because the address a ready picture answers with stops working after ten minutes.";
  let sample = await bfl_draw_wait(polling_url, tries);
  let options = http_option_sleep_none();
  let buffer = await http_generic(sample, options);
  await file_overwrite_buffer(file_path, buffer);
  return file_path;
}
