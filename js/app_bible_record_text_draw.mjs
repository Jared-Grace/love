import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
export function app_bible_record_text_draw(
  ctx,
  width,
  height,
  reference,
  text,
) {
  "The passage laid over one frame of the video: a dark band across the bottom, the reference small at its top, the words beneath it in white.";
  "It is drawn into the frame itself rather than floated over the camera, because what is recorded is the canvas - text floated above it would show on this screen and be missing from the saved video.";
  "A long passage shrinks its letters until it fits in the lower half, so the face reading it is never covered; a short one stays large enough to read on a phone.";
  let margin = multiply(width, 0.05);
  let right = multiply(margin, 2);
  let room = subtract(width, right);
  let size = divide(width, 16);
  let lines = [];
  function wrap() {
    ctx.font = size + "px sans-serif";
    let words = text.split(" ");
    lines = [];
    let line = "";
    for (let word of words) {
      let tried = equal(line, "") ? word : line + " " + word;
      if (
        greater_than(ctx.measureText(tried).width, room) &&
        not_equal(line, "")
      ) {
        lines.push(line);
        line = word;
      } else {
        line = tried;
      }
    }
    if (not_equal(line, "")) {
      lines.push(line);
    }
  }
  wrap();
  while (
    greater_than(
      multiply(multiply(lines.length, size), 1.25),
      multiply(height, 0.45),
    ) &&
    greater_than(size, divide(width, 40))
  ) {
    size = multiply(size, 0.9);
    wrap();
  }
  let reference_size = multiply(size, 0.7);
  let line_height = multiply(size, 1.25);
  let band =
    margin +
    multiply(reference_size, 1.4) +
    multiply(lines.length, line_height) +
    multiply(margin, 0.5);
  let top = subtract(height, band);
  ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
  ctx.fillRect(0, top, width, band);
  ctx.fillStyle = "white";
  ctx.textBaseline = "top";
  ctx.font = "bold " + reference_size + "px sans-serif";
  ctx.fillText(reference, margin, top + multiply(margin, 0.6));
  ctx.font = size + "px sans-serif";
  let y = top + multiply(margin, 0.6) + multiply(reference_size, 1.4);
  for (let line of lines) {
    ctx.fillText(line, margin, y);
    y = y + line_height;
  }
}
