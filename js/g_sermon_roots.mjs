import { g_sermon_stores_chapters } from "./g_sermon_stores_chapters.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_word_roots } from "./text_word_roots.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function g_sermon_roots() {
  "Every root the written sermons carry, passages and lines together, in the order they were met.";
  "Both stores are read, the written one and the edited one, because a word only ever seen in an approved line is exactly as much a word of this corpus as one in a draft.";
  "Passages and lines are not kept apart, because what this feeds asks after the vocabulary rather than after who said it. A reading that does need the two apart should gather them itself rather than take them joined and try to split them again.";
  "Where those stores are, and the walk through their files, is asked of the one reading that answers it rather than written out here a second time.";
  let chapters = await g_sermon_stores_chapters();
  let roots = [];
  for (let chapter of chapters) {
    let passages = property_get_or(chapter, "passages", []);
    for (let passage of passages) {
      let scripture = property_get_or(passage, "scripture", "");
      list_add_multiple(roots, text_word_roots(scripture));
      let lines = property_get_or(passage, "lines", []);
      for (let line of lines) {
        let said = property_get_or(line, "text", "");
        list_add_multiple(roots, text_word_roots(said));
      }
    }
  }
  return roots;
}
