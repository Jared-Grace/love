import { arguments_assert } from "./arguments_assert.mjs";
export function app_bible_record_text_layout_widest(ctx, lines) {
  arguments_assert(arguments, 2);
  function lambda(line) {
    let r = ctx.measureText(line).width;
    return r;
  }
  let widths = lines.map(lambda);
  let width_most = Math.max(...widths);
  return width_most;
}
