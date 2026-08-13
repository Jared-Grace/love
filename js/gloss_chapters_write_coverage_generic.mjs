import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { gloss_write_coverage_generic } from "./gloss_write_coverage_generic.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapters_write_coverage_generic(fn, passages_read) {
  "Every chapter in one gloss store with how many of its passages carry authored word explanations and which verses are still waiting.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is counted from the moment it is written and nobody has to remember to name it anywhere. A chapter with no file at all is not here, because this reports on the store rather than on the bible.";
  "The verses already done are counted rather than listed, while the ones still waiting are named. A report is read to find out what to do next, and a chapter's finished passages are the half nobody needs spelled out.";
  "For the same reason a finished chapter is dropped from the answer entirely and only counted. A store of two hundred chapters would otherwise print two hundred entries to say a dozen of them want work, and the entries saying nothing are the ones that push the entries saying something off the end of a screen.";
  "Nothing here fails. Completeness is a report and never a gate: material is authored over weeks, so a gate over it would be red for months by design and would stop every app deploying for as long as one chapter was unfinished.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let coverage = await gloss_write_coverage_generic(
      chapter_code,
      fn,
      passages_read,
    );
    let done = property_get(coverage, "done");
    let r = {
      chapter_code,
      passages: property_get(coverage, "passages"),
      written: list_size(done),
      missing: property_get(coverage, "missing"),
    };
    return r;
  }
  let all = await list_map_async(chapter_codes, chapter_read);
  function waiting_is(chapter) {
    let missing = property_get(chapter, "missing");
    let waiting = list_empty_not_is(missing);
    return waiting;
  }
  let waiting = list_filter(all, waiting_is);
  let r = {
    chapters: list_size(all),
    waiting,
  };
  return r;
}
