import { property_get } from "./property_get.mjs";
export function g_sermon_study_passage(original_passage, edited_passage) {
  let verse_numbers = property_get(original_passage, "verse_numbers");
  let greek = property_get(original_passage, "original");
  let english = property_get(original_passage, "text");
  let openai = property_get(original_passage, "sermon");
  let edits = property_get(edited_passage, "sermon");
  return {
    verse_numbers,
    greek,
    english,
    openai,
    edits,
  };
}
