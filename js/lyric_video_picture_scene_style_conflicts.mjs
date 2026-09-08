import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { lyric_video_picture_style_refused_words } from "./lyric_video_picture_style_refused_words.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_unique } from "./list_unique.mjs";
export async function lyric_video_picture_scene_style_conflicts() {
  "Every authored scene that asks for a thing the shared look of these pictures refuses, together with the words the two of them disagree over.";
  "★ THE PROMPT SENT TO THE DRAWER IS ONE STRING HOLDING BOTH HALVES, so a disagreement here is not a tidiness matter but a self-contradicting instruction. The scene leads and the look follows, joined by a comma; a scene asking for a stone road hands over the sentence an old stone road, no roads. Nothing refuses that sentence. It is paid for at the full price, drawn, and comes back as whichever half the house happened to weigh heavier, and the only way to learn which is to open the picture afterwards.";
  "IT COMPARES WITH THE PLURAL ENDING TAKEN OFF BOTH SIDES, because the look refuses roads and a scene asks for a road, and the two words are the same word. That was the whole of the first fault it found: a scene written the same afternoon as this check, holding a word the look had refused since the day it was written.";
  "MATCHING A WORD TOO EAGERLY IS THE RIGHT WAY TO BE WRONG HERE. A rock face is not a person's face and reads perfectly to somebody; but the sentence handed over says rock face and, four clauses later, no faces, and no reader has been found who can be trusted to weigh those against each other. Rewording the scene to a cliff of bare rock costs one minute, makes the sentence say one thing, and cannot be worse. So a word standing on both sides is named whatever the sense of it, and the repair is always to say it another way rather than to argue.";
  "IT READS THE DOCUMENTS RATHER THAN A LIST OF THEM, so a psalm authored this morning is covered without anybody adding it anywhere.";
  arguments_assert(arguments, 0);
  let folder = data_given_lyric_videos_folder();
  let paths = await folder_read_paths_async(folder);
  let paths_json = list_filter_ends_with(paths, ".json");
  let refused = lyric_video_picture_style_refused_words();
  let ending = new RegExp("s$");
  let letters = new RegExp("[a-z]+", "g");
  let stems = [];
  for (let word of refused) {
    let v = word.replace(ending, "");
    stems.push(v);
  }
  let conflicts = [];
  let scenes_read = 0;
  for (let path of paths_json) {
    let document = await file_read_json(path);
    let pictures = document.pictures;
    if (pictures) {
      for (let picture of pictures) {
        scenes_read = scenes_read + 1;
        let words = picture.scene.toLowerCase().match(letters);
        let said = [];
        if (words) {
          for (let word of words) {
            let stem = word.replace(ending, "");
            let held = stems.includes(stem);
            if (held) {
              said.push(word);
            }
          }
        }
        let clashing = greater_than(said.length, 0);
        if (clashing) {
          let one = {
            path,
            picture: picture.path,
            said: list_unique(said),
          };
          conflicts.push(one);
        }
      }
    }
  }
  let r = {
    documents: paths_json.length,
    scenes_read,
    conflicts,
  };
  return r;
}
