import { image_generate_find_max_font_size } from "./image_generate_find_max_font_size.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export async function image_generate(text, path_output) {
  let v2 = await import_install("canvas");
  property_get(v2, "registerFont");
  let createCanvas = property_get(v2, "createCanvas");
  let WIDTH = 1080;
  let HEIGHT = 1920;
  let BACKGROUND = "#000000";
  let TEXT_COLOR = "#ffffff";
  let FONT_FAMILY = "sans-serif";
  let PADDING = 120;
  let right = multiply(PADDING, 2);
  let MAX_WIDTH = subtract(WIDTH, right);
  let right2 = multiply(PADDING, 2);
  let MAX_HEIGHT = subtract(HEIGHT, right2);
  let canvas = createCanvas(WIDTH, HEIGHT);
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  function wrapText(text_wrapping, fontSize) {
    ctx.font = text_combine_multiple([fontSize, "px ", FONT_FAMILY]);
    let words = text_wrapping.split(" ");
    let lines_wrapped = [];
    let line = "";
    for (let word of words) {
      let test = line ? text_combine_multiple([line, " ", word]) : word;
      if (less_than_equal(ctx.measureText(test).width, MAX_WIDTH)) {
        line = test;
      } else {
        lines_wrapped.push(line);
        line = word;
      }
    }
    if (line) {
      lines_wrapped.push(line);
    }
    return lines_wrapped;
  }
  let FONT_SIZE = image_generate_find_max_font_size(wrapText, text, MAX_HEIGHT);
  let lines = wrapText(text, FONT_SIZE);
  let lineHeight = multiply(FONT_SIZE, 1.25);
  ctx.font = text_combine_multiple([FONT_SIZE, "px ", FONT_FAMILY]);
  ctx.fillStyle = TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  let left = divide(HEIGHT, 2);
  let left2 = subtract(lines.length, 1);
  let right3 = multiply_divide(left2, lineHeight, 2);
  let startY = subtract(left, right3);
  function lambda(line, i) {
    let divided = divide(WIDTH, 2);
    let right4 = multiply(i, lineHeight);
    let combined = text_combine(startY, right4);
    ctx.fillText(line, divided, combined);
  }
  lines.forEach(lambda);
  let v = canvas.toBuffer("image/png");
  await file_parent_exists_ensure(path_output);
  await file_overwrite_buffer(path_output, v);
}
