import { ebible_readaloud_lines_path } from "./ebible_readaloud_lines_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_readaloud_lines_differ_names() {
  "Every chapter the record says is read aloud in a different number of lines from the number of verses its own page marks, each named by its bible and its chapter together.";
  "One flat name for something that lives at two addresses, because what watches this list only ever asks whether a name is in it. Mark 9 disagrees in six translations at once, so a chapter code on its own names nothing.";
  "Read out of the record rather than measured, because measuring opens every chapter of every bible and takes the better part of an hour. The record is rewritten by the one command that does the measuring.";
  let path = ebible_readaloud_lines_path();
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  function lambda(measured) {
    let bible_folder = property_get(measured, "bible_folder");
    let uneven = property_get(measured, "differ");
    function lambda_chapter_name(counts) {
      let chapter_code = property_get(counts, "chapter_code");
      let name = text_combine_multiple([bible_folder, " ", chapter_code]);
      return name;
    }
    let named = list_map(uneven, lambda_chapter_name);
    return named;
  }
  let named_each = list_map(bibles, lambda);
  let names = lists_combine(named_each);
  return names;
}
