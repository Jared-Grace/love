import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
export function app_shared_text_category_color_on_dark() {
  "the category word's colour where it sits on a strong dark background: the same blue seen through light instead of dark, so it still reads as the quieter half of the title next to the white name beside it.";
  "the ordinary dark blue and the strong background a list uses to point at the next thing to do were measured a hairsbreadth apart - the word was there and could not be read.";
  "it asks the palette for the pale blue it already holds rather than carrying a shade of its own. The two were a hairsbreadth apart, which is a difference nobody can see and everybody has to maintain - and the palette's is the lighter of the two, so the word reads a little more easily on the dark row, not less.";
  let c = app_shared_color_blue_pale();
  return c;
}
