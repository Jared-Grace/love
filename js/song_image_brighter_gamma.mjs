import { arguments_assert } from "./arguments_assert.mjs";
export function song_image_brighter_gamma() {
  "How far the hymn's pictures are brightened when a brighter copy is offered beside them: a gamma, where under one lifts the middle tones and leaves black and white where they are.";
  "SEVEN TENTHS WAS CHOSEN BY LOOKING, on the couplet of the scales. It raised the picture's average brightness from seventy-eight to eighty-eight out of two hundred and fifty-five while the darkest stayed at sixteen and the lightest at two hundred and thirty-five, so the lead lines stayed black and the panes came up. Eight tenths was barely visible beside the original, and a plain brightness lift at any strength greyed the blacks.";
  arguments_assert(arguments, 0);
  let gamma = 0.7;
  return gamma;
}
