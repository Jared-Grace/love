import { arguments_assert } from "./arguments_assert.mjs";
export function bible_gloss_markup_dropped(gloss) {
  arguments_assert(arguments, 1);
  ("$plain gloss");
  ("the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.");
  ("One wording with any piece of page markup taken out of it, so what is left is words a person can say out loud and nothing a browser was meant to read.");
  ("THE TABLES WERE MADE FROM A TYPESET PAGE AND FOUR CHUNKS STILL CARRY ITS TAGS. Deuteronomy 32:43 twice, 1 Chronicles 1:17 and Psalm 145:13 hold the tag that indented a line of poetry, so and let all God's angels worship Him arrives with a paragraph tag standing in front of it. Printed to a reader that is a line of code in the middle of scripture.");
  ("THE TAG IS MATCHED BY ITS OWN SHAPE AND NOT BY THE WORDS IN IT. The class names in the four are indent2 and list2, and a table built from the same page tomorrow may indent a third way; a rule that named those two would pass the third one through in silence. An angle bracket, anything that is not an angle bracket, and an angle bracket is a shape no English word has.");
  ("IT IS ITS OWN FUNCTION BECAUSE TWO CALLERS NEED IT AT DIFFERENT MOMENTS. The band under the pictures wants it once the supplied words are gone, and the picture Bible's own English wants it BEFORE the supplied spans are cut, because a tag can sit inside a supplied span in one chunk and outside it in the next - Deuteronomy 32:43 does both, one chunk each way.");
  let text = gloss.replaceAll(/<[^<>]*>/g, " ");
  text = text.replaceAll(/\s+/g, " ");
  text = text.trim();
  return text;
}
