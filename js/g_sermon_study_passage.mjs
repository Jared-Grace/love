import { property_get } from "./property_get.mjs";
export function g_sermon_study_passage(openai_passage, edited_passage) {
  let verse_numbers = property_get(openai_passage, "verse_numbers");
  let original = property_get(openai_passage, "original");
  let english = property_get(openai_passage, "text");
  let openai = property_get(openai_passage, "sermon");
  let edits = property_get(edited_passage, "sermon");
  return {
    verse_numbers,
    original,
    english,
    openai,
    edits,
  };
}
