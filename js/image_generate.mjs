import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
import { floor } from "./floor.mjs";
import fs from "fs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
export async function image_generate(text, path_output) {
  let v2 = await import_install("canvas");
  let registerFont = property_get(v2, "registerFont");
  let createCanvas = property_get(v2, "createCanvas");
  let WIDTH = 1080;
  let HEIGHT = 1920;
  let BACKGROUND = "#000000";
  let TEXT_COLOR = "#ffffff";
  let FONT_FAMILY = "sans-serif";
  let PADDING = 120;
  let MAX_WIDTH = subtract(WIDTH, multiply(PADDING, 2));
  let MAX_HEIGHT = subtract(HEIGHT, multiply(PADDING, 2));
  let canvas = createCanvas(WIDTH, HEIGHT);
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  function wrapText(text, fontSize) {
    ctx.font = text_combine_multiple([fontSize, "px ", FONT_FAMILY]);
    let words = text.split(" ");
    let lines = [];
    let line = "";
    for (let word of words) {
      let test = line ? text_combine_multiple([line, " ", word]) : word;
      if (ctx.measureText(test).width <= MAX_WIDTH) {
        line = test;
      } else {
        lines.push(line);
        line = word;
      }
    }
    if (line) {
      lines.push(line);
    }
    return lines;
  }
  function findMaxFontSize() {
    let low = 10;
    let high = 500;
    let best = low;
    while (low <= high) {
      let mid = Math.floor(divide(add(low, high), 2));
      let lines = wrapText(text, mid);
      let lineHeight = multiply(mid, 1.25);
      let totalHeight = multiply(lines.length, lineHeight);
      if (totalHeight <= MAX_HEIGHT) {
        best = mid;
        low = text_combine(mid, 1);
      } else {
        high = subtract(mid, 1);
      }
    }
    return best;
  }
  let FONT_SIZE = findMaxFontSize();
  let lines = wrapText(text, FONT_SIZE);
  let lineHeight = multiply(FONT_SIZE, 1.25);
  ctx.font = text_combine_multiple([FONT_SIZE, "px ", FONT_FAMILY]);
  ctx.fillStyle = TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  let startY = subtract(
    divide(HEIGHT, 2),
    divide(multiply(subtract(lines.length, 1), lineHeight), 2),
  );
  function lambda(line, i) {
    ctx.fillText(
      line,
      divide(WIDTH, 2),
      text_combine(startY, multiply(i, lineHeight)),
    );
  }
  lines.forEach(lambda);
  let v = canvas.toBuffer("image/png");
  await file_parent_exists_ensure(path_output);
  await file_overwrite_buffer(path_output, v);
}
