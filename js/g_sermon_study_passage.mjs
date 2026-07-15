import { property_get } from "./property_get.mjs";
export function g_sermon_study_passage(generated_passage, edited_passage) {
  let verse_numbers = property_get(generated_passage, "verse_numbers");
  let original = property_get(generated_passage, "original");
  let english = property_get(generated_passage, "text");
  let generated = property_get(generated_passage, "sermon");
  let edited = property_get(edited_passage, "sermon");
  let bible = {
    verse_numbers,
    original,
    english,
  };
  let sermon = {
    generated,
    edited,
  };
  return {
    bible,
    sermon,
  };
}
