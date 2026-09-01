import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { lyric_video_documents_gate_run_document_measured } from "./lyric_video_documents_gate_run_document_measured.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_sum } from "./list_sum.mjs";
export async function lyric_video_documents_gate_run_lines_read() {
  arguments_assert(arguments, 0);
  let folder = data_given_lyric_videos_folder();
  let paths = await folder_read_paths_async(folder);
  let paths_json = list_filter_ends_with(paths, ".json");
  let document_measured = lyric_video_documents_gate_run_document_measured();
  let by_document = await list_map_unordered_async(
    paths_json,
    document_measured,
  );
  let faults_by_document = list_map_property(by_document, "faults");
  let faults_all = list_concat_multiple(faults_by_document);
  let lines_by_document = list_map_property(by_document, "lines_read");
  let lines_read = list_sum(lines_by_document);
  let r = {
    paths_json,
    faults_all,
    lines_read,
  };
  return r;
}
