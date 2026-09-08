import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function lyric_video_documents_pictures() {
  "Every picture authored in every lyric video document, each one handed back beside the path of the document it was written in.";
  "IT READS THE FOLDER RATHER THAN A LIST OF DOCUMENTS, so a psalm authored this morning is covered without anybody adding it anywhere.";
  "★ IT IS THE WALK AND NOT THE TEST, WHICH IS WHY IT IS ITS OWN ANSWER. Two checks already ask the same question of every scene - one about words the shared look refuses, one about scenes drawing people with no second wording beside them - and a third will come. Merging the checks would kill one of them, because a picture can fail both and only the first would be reported. Merging the walk costs nothing and is what they actually share: open the folder, keep the json, read each one, hand back the pictures.";
  "MOST DOCUMENTS HOLD NO PICTURES AT ALL and that is not a fault. Timings are authored long before scenes are; a document with lines and no pictures is a video waiting for its grounds, so it contributes nothing here and is still counted.";
  arguments_assert(arguments, 0);
  let folder = data_given_lyric_videos_folder();
  let paths = await folder_read_paths_async(folder);
  let paths_json = list_filter_ends_with(paths, ".json");
  let pictures = [];
  for (let path of paths_json) {
    let document = await file_read_json(path);
    let authored = document.pictures;
    if (authored) {
      for (let picture of authored) {
        let one = {
          path,
          picture,
        };
        pictures.push(one);
      }
    }
  }
  let r = {
    documents: paths_json.length,
    pictures,
  };
  return r;
}
