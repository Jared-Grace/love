import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { png_chunk_bytes } from "./png_chunk_bytes.mjs";
import { png_chunk_add } from "./png_chunk_add.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function image_content_credentials_copy(path_from, path_to) {
  "carry the content credentials from one PNG over to another, so that a picture rewritten by a tool that knows nothing about them still says who made it";
  "THIS IS A LICENCE OBLIGATION AND NOT A NICETY. The pictures here are drawn by Black Forest Labs through their API, and their developer terms forbid removing, disabling, altering or obscuring the credentials they embed. They embed them: every picture that arrives untouched carries a chunk of about twenty kilobytes. Cropping a picture rewrites it, and the tool doing the cropping drops every chunk it has no use for - so the obligation was being broken by a step that was never about credentials at all";
  "the credentials say the picture was made by a machine and by which one. Measured before this existed: of eleven hundred and seventeen pictures that had been through the crop, not one still carried them, while every picture that had not been through it did";
  "WHAT IS CARRIED OVER NO LONGER MATCHES THE PIXELS, AND THAT IS THE HONEST ANSWER RATHER THAN A FLAW. A credential records the picture it was signed over, so a reader checking it against a cropped picture is told the picture was altered after signing - which is true, and is the thing the format exists to be able to say. The alternative on offer is not a credential that validates; it is no credential at all, and that is the one outcome the terms name";
  "a picture that carries none is left alone and says so, so this is safe to call on anything. A picture that already carries one is left alone too, because adding a second would leave two claims about one picture and no way to tell which was meant - and that is what makes calling this twice the same as calling it once";
  let type_text = "caBX";
  let buffer_from = await file_read_buffer(path_from);
  let credentials = png_chunk_bytes(buffer_from, type_text);
  if (equal(credentials, null)) {
    let none = {
      path_to,
      copied: false,
      bytes: 0,
    };
    return none;
  }
  let buffer_to = await file_read_buffer(path_to);
  let already = png_chunk_bytes(buffer_to, type_text);
  if (not_equal(already, null)) {
    let kept = {
      path_to,
      copied: false,
      bytes: already.length,
    };
    return kept;
  }
  let carried = png_chunk_add(buffer_to, credentials);
  await file_overwrite_buffer(path_to, carried);
  let copied = {
    path_to,
    copied: true,
    bytes: credentials.length,
  };
  return copied;
}
