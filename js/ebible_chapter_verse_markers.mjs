import { ebible_chapter_verse_numbers } from "./ebible_chapter_verse_numbers.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_chapter_verse_markers(
  bible_folder,
  chapter_code,
) {
  "Every verse the source page of one chapter marks, as the number it is known by and the word that stands for it in the text.";
  "The page says where each verse begins - a span of its own, carrying the number and the number's own name in that language's figures. Nothing has to be worked out to know how many verses a chapter holds or what they are called; it is written down.";
  "Named apart from the reading that cuts the chapter into words because those are two different questions, and the cutting is the one that can be got wrong.";
  let opened = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = property_get(opened, "verse_numbers");
  return verse_numbers;
}
