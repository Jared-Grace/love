import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_heading_only_chapters } from "./ebible_readaloud_heading_only_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_readaloud_heading_only_names() {
  arguments_assert(arguments, 0);
  ("Every chapter published for reading aloud as its book name and its number and nothing else, each named by its bible and its chapter together.");
  ("One flat name for something that lives at two addresses, because what watches this list only ever asks whether a name is in it. Habakkuk 3 is absent in one translation and whole in every other, so a chapter code on its own names nothing.");
  ("Taken from the reading next door, which answers with the chapters still to be fetched as well. A ratchet has no use for those and no use for the two addresses apart, so it gets the one half, flattened.");
  let split = await ebible_readaloud_heading_only_chapters();
  let heading_only = property_get(split, "heading_only");
  function chapter_named(named) {
    let bible_folder = property_get(named, "bible_folder");
    let chapter_code = property_get(named, "chapter_code");
    let name = text_combine_multiple([bible_folder, " ", chapter_code]);
    return name;
  }
  let names = list_map(heading_only, chapter_named);
  return names;
}
