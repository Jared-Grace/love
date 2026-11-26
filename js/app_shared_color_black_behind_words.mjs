import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_color_black_behind_words() {
  arguments_assert(arguments, 0);
  ("Mostly-dark clear black, laid in a band behind words written over a picture or a video, so white words stay readable whatever is behind them.");
  ("A LITTLE DARKER THAN HALF, because behind words the picture only has to show through, not be looked at: the dim behind a card keeps the page in view, and this keeps the words in view.");
  let color = "rgba(0, 0, 0, 0.55)";
  return color;
}
