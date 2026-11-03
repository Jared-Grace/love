import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_bible_emoji_original_language_text } from "./app_bible_emoji_original_language_text.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_bible_emoji_manuscript_text(chapter_code) {
  arguments_assert(arguments, 1);
  ("What the manuscript a chapter was written in is called on the button that puts the pictures in its order: Greek manuscript for the New Testament, Hebrew/Aramaic manuscript for the Old, asked for by the human.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like JHN04, or nothing when no chapter is open. It names a place in the canon and nothing that runs.");
  ("THE LANGUAGE IS ASKED OF THE ONE PLACE THAT NAMES IT, the same place the show and hide buttons ask, so the two can never name different languages for one chapter.");
  ("WITH NO CHAPTER OPEN IT SAYS ORIGINAL MANUSCRIPT, with a capital, because here it starts the button rather than sitting mid-sentence.");
  if (text_empty_is(chapter_code)) {
    let r = "Original manuscript";
    return r;
  }
  let language = app_bible_emoji_original_language_text(chapter_code);
  let text = text_combine(language, " manuscript");
  return text;
}
