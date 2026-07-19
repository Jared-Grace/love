import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bible_passage_button_direct } from "./app_g_bible_passage_button_direct.mjs";
export function app_g_bible_passage_button(
  passage,
  chapter_code,
  books,
  overlay,
  lambda,
) {
  "a Bible passage choice (dark button + light-green reference + glowing GOLD verse) whose reference is computed from a chapter_code + the passage's verse_numbers; delegates the rendering to app_g_bible_passage_button_direct";
  let verse_numbers = property_get(passage, "verse_numbers");
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  let verse_text = property_get(passage, "text");
  let b = app_g_bible_passage_button_direct(reference, verse_text, overlay, lambda);
  return b;
}
