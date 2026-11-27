import { not_equal } from "./not_equal.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function image_file_rotate_quarter_browser(file, turns) {
  "$plain file";
  "$plain turns";
  "A new picture file holding this one turned by quarter turns: 1 is a quarter turn to the right, clockwise, and -1 a quarter turn to the left. The picture is drawn again turned, so whatever shows or saves the new file sees it turned, with no setting kept beside it to be lost.";
  "The picture is read the way the camera meant it to be held, so the turn starts from what was on the screen; a PNG stays a PNG and anything else becomes a JPEG, the kind phone photos already are.";
  arguments_assert(arguments, 2);
  let bitmap = await createImageBitmap(file);
  let canvas = document.createElement("canvas");
  let left = modulo(turns, 2);
  let sideways = not_equal(left, 0);
  canvas.width = sideways ? bitmap.height : bitmap.width;
  canvas.height = sideways ? bitmap.width : bitmap.height;
  let context = canvas.getContext("2d");
  let divided = divide(canvas.width, 2);
  let divided2 = divide(canvas.height, 2);
  context.translate(divided, divided2);
  let top = multiply(turns, Math.PI);
  let divided3 = divide(top, 2);
  context.rotate(divided3);
  let divided4 = divide(-bitmap.width, 2);
  let divided5 = divide(-bitmap.height, 2);
  context.drawImage(bitmap, divided4, divided5);
  bitmap.close();
  let type = equal(file.type, "image/png") ? "image/png" : "image/jpeg";
  let blob = await new Promise(function lambda(resolve) {
    canvas.toBlob(resolve, type, 0.92);
  });
  let r = new File([blob], file.name, {
    type,
  });
  return r;
}
