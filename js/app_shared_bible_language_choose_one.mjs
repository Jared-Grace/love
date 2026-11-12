import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { app_shared_bible_language_choose_one_render } from "./app_shared_bible_language_choose_one_render.mjs";
export function app_shared_bible_language_choose_one(
  content,
  languages,
  back,
  destination,
) {
  "Choosing the one language a reader reads in, as a panel drawn over the reading: the way back first, then the list.";
  arguments_assert(arguments, 4);
  app_shared_bible_panel_open(content, destination, back);
  app_shared_bible_language_choose_one_render(content, languages);
}
