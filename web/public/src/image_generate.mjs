import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
import { file_overwrite_buffer } from "../../../love/public/src/file_overwrite_buffer.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import fs from "fs";
export async function image_generate(text, path_output) {
  let v2 = await import_install("canvas");
  let registerFont = property_get(v2, "registerFont");
  let createCanvas = property_get(v2, "createCanvas");
  const WIDTH = 1080;
  const HEIGHT = 1920;
  const BACKGROUND = "#000000";
  const TEXT_COLOR = "#ffffff";
  const FONT_FAMILY = "sans-serif";
  const PADDING = 120;
  const MAX_WIDTH = WIDTH - PADDING * 2;
  const MAX_HEIGHT = HEIGHT - PADDING * 2;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  function wrapText(text, fontSize) {
    ctx.font = `${fontSize}px ${FONT_FAMILY}`;
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
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
      const mid = Math.floor((low + high) / 2);
      const lines = wrapText(text, mid);
      const lineHeight = mid * 1.25;
      const totalHeight = lines.length * lineHeight;
      if (totalHeight <= MAX_HEIGHT) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return best;
  }
  const FONT_SIZE = findMaxFontSize();
  const lines = wrapText(text, FONT_SIZE);
  const lineHeight = FONT_SIZE * 1.25;
  ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
  ctx.fillStyle = TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const startY = HEIGHT / 2 - ((lines.length - 1) * lineHeight) / 2;
  function lambda(line, i) {
    ctx.fillText(line, WIDTH / 2, startY + i * lineHeight);
  }
  lines.forEach(lambda);
  let v = canvas.toBuffer("image/png");
  await file_parent_exists_ensure(path_output);
  await file_overwrite_buffer(path_output, v);
}
