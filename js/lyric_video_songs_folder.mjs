import { arguments_assert } from "./arguments_assert.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function lyric_video_songs_folder() {
  "Where the timing documents of songs that are not passages of Scripture are kept, beside the plain lyric files they were drafted from.";
  "IT IS KEPT OUT OF THE HISTORY ON PURPOSE. A song here is a recording somebody is still working on, and the document beside it names a folder of drawings several megabytes each; neither belongs in a repo that is already too heavy. The pictures are reachable in a browser all the same, because the local server hands out the whole folder the repos sit in.";
  "IT IS BESIDE THE PSALMS' FOLDER AND NOT INSIDE IT. A psalm's document is found again from the passage it is of, and a song has no passage - so the two are addressed differently, and a screen offering one must not be handed the other.";
  arguments_assert(arguments, 0);
  let folder = folder_gitignore_join("lyric_videos_songs");
  return folder;
}
