import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_verse_block } from "./app_shared_bible_verse_block.mjs";
export function app_verses_display_group(group, card) {
  arguments_assert(arguments, 2);
  let reference = property_get(group, "reference");
  let entries = property_get(group, "entries");
  app_shared_bible_verse_block(card, reference, entries);
}
