import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function bible_glyph_chapter_codes() {
  arguments_assert(arguments, 0);
  ("The code of every chapter the picture Bible has written, and nothing else about any of them.");
  ("It is the codes taken out of ",
    fn_name("bible_glyph_chapter_references"),
    " rather than a list of its own, because the two would otherwise be two copies of one fact and there is already one copy too many. That list is the light Bible and this is the half of it a caller wanting only a yes or a no needs.");
  ("The bible reader next door is what wants it. That reader offers a way into the pictures where there are pictures to go to, and asks nothing about what any chapter is called, so it is handed the codes and not the names.");
  ("In the order Scripture puts them, because that is the order it is taken from.");
  let references = bible_glyph_chapter_references();
  let codes = list_map_property(references, "chapter_code");
  return codes;
}
