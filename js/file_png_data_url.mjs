import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { buffer_base64_to } from "./buffer_base64_to.mjs";
import { text_combine } from "./text_combine.mjs";
export async function file_png_data_url(file_path) {
  "one png on the disk written out as a data address, which is a picture and its address at the same time";
  "IT EXISTS SO THAT A PICTURE NOBODY HAS PUBLISHED CAN STILL BE HANDED TO A SERVICE THAT ASKS FOR AN ADDRESS. Every attempt at a drawing lives on this disk and only the chosen one is ever sent up, so an address that has to be public can only ever reach the chosen one - and the picture somebody wants changed is very often one of the others.";
  arguments_assert(arguments, 1);
  let buffer = await file_read_buffer(file_path);
  let b = buffer_base64_to(buffer);
  let url = text_combine("data:image/png;base64,", b);
  return url;
}
