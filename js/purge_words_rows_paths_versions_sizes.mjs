import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { purge_words_rows_paths_versions } from "./purge_words_rows_paths_versions.mjs";
import { property_get } from "./property_get.mjs";
import { git_folder_blob_text } from "./git_folder_blob_text.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { text_size } from "./text_size.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function purge_words_rows_paths_versions_sizes(
  folder,
  rows_text,
  paths_text,
) {
  "$plain folder";
  "$plain rows_text";
  "$plain paths_text";
  "How big the file was in every version of it that has ever held one of the named rows of the private word list - how many lines and how many letters - beside the file and git's own name for its contents. Reads and changes nothing.";
  "★ HOW LONG THE LIST WAS IS WHAT DECIDES, NOT WHETHER THE WORD IS IN IT. A name alone in a list of three says who somebody is; the same name as one of eighty-eight says nothing at all, because the list is then a list of names rather than a statement about one. So the question a reader is really asking of each version is a question about size, and until this existed the only way to answer it was to fetch the version by hand and count its lines with a search tool - once per version, with the count living nowhere afterwards.";
  "★ IT HANDS BACK TWO NUMBERS BECAUSE EITHER ONE ALONE CAN BE READ THE WRONG WAY. A list written out with no line breaks in it is one line however many entries it holds, and would read here as the lonely case that most needs looking at. Its letters say otherwise at once. The pair cannot be fooled by how the file happens to be laid out, and neither number is any use to somebody who should not have the file.";
  ("★ NEITHER NUMBER IS A WORD, WHICH IS THE WHOLE REASON THIS CAN BE ASKED OUT LOUD. The reading one name along already drops which of the words each version was holding, and the rule it gives for that is at ",
    fn_name("purge_words_rows_paths_versions"),
    ". This stands on that reading rather than beside it, so there is no second path by which a word could reach an answer: what arrives here is a file and a forty-letter name, and a count of lines cannot put back something that was never handed over.");
  ("It does not judge. A reader looks at the two numbers, decides whether that version is one to hand back untouched, and writes that decision down; nothing here has an opinion about where the line between a short list and a long one falls, because that line is a person's to draw and depends on what the file is.");
  ("Asked of the repository as it stands, and the names die with the next rewrite of it - the same bound as the reading underneath, for the same reason.");
  arguments_assert(arguments, 3);
  let found = await purge_words_rows_paths_versions(
    folder,
    rows_text,
    paths_text,
  );
  let versions = property_get(found, "versions");
  async function purge_words_rows_paths_versions_sizes_version(version) {
    let path = property_get(version, "path");
    let blob = property_get(version, "blob");
    let text = await git_folder_blob_text(folder, blob);
    let lines = text_split_newline(text);
    let sized = {
      path,
      blob,
      lines: list_size(lines),
      letters: text_size(text),
    };
    return sized;
  }
  let measured = await list_map_async(
    versions,
    purge_words_rows_paths_versions_sizes_version,
  );
  let r = {
    folder,
    rows: property_get(found, "rows"),
    paths: property_get(found, "paths"),
    versions: measured,
  };
  return r;
}
