import { log } from "../../../love/public/src/log.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { createCanvas, registerFont } from "canvas";
import fs from "fs";
export function image_generate() {
  const WIDTH = 1080;
  const HEIGHT = 1920;
  const TEXT = "Blessed are the pure in heart,\nfor they shall see God.";
  const BACKGROUND = "#000000";
  const TEXT_COLOR = "#FFFFFF";
  const FONT_FAMILY = "sans-serif";
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  const PADDING = 80;
  const MAX_WIDTH = WIDTH - PADDING * 2;
  const MAX_HEIGHT = HEIGHT - PADDING * 2;
  function findMaxFontSize(text) {
    let low = 10;
    let high = 500;
    let best = low;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      ctx.font = `${mid}px ${FONT_FAMILY}`;
      const lines = text.split("\n");
      const lineHeight = mid * 1.2;
      const totalHeight = lines.length * lineHeight;
      function lambda(line) {
        let v = ctx.measureText(line).width;
        return v;
      }
      const maxLineWidth = Math.max(...lines.map(lambda));
      if (maxLineWidth <= MAX_WIDTH && totalHeight <= MAX_HEIGHT) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return best;
  }
  const FONT_SIZE = findMaxFontSize(TEXT);
  ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
  ctx.fillStyle = TEXT_COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const lines = TEXT.split("\n");
  const lineHeight = FONT_SIZE * 1.2;
  const startY = HEIGHT / 2 - ((lines.length - 1) * lineHeight) / 2;
  function lambda2(line, i) {
    ctx.fillText(line, WIDTH / 2, startY + i * lineHeight);
  }
  lines.forEach(lambda2);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("output.png", buffer);
  console.log(`Image created with font size: ${FONT_SIZE}px`);
}
