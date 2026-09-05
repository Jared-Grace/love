import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_parts } from "./psalms_songs_folder_parts.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_psalm_part_document_times_write } from "./lyric_video_psalm_part_document_times_write.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_psalm_part_documents_times_write(version) {
  "$plain version";
  "Listens to every part of a psalm this machine holds a singing of, and writes each one's times into its own timing document.";
  "★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, WHICH IS WHAT KEEPS IT HONEST ABOUT WHAT IS ACTUALLY THERE. A list of stanzas typed in from outside goes stale the moment a recording is added or renamed, and it goes stale silently - the run finishes, says it did everything it was asked, and the passage nobody listed is still holding the flat spread it was drafted with. Reading the folder is also the only reading that can say a part has no document yet, because that answer is about the pair and not about either file.";
  "★ EACH PART IS COMMITTED AS IT LANDS, UNDER ITS OWN NAME AND ITS OWN FOUR WORDS. Nineteen documents rewritten and committed once at the end is a single entry that no one command can be named after, and with several hands editing this folder at once it is also nineteen files a peer's sweep can take first and file under a bare word. Committing each step shortens that window to one song, and leaves a log in which every entry is a command somebody can run again by itself.";
  "★ WHAT IS ALREADY NOTED IS SWEPT FIRST, OR THE FIRST STANZA'S COMMIT CLAIMS IT. The note of changed files is one running list with no divider in it, so anything left uncommitted when this starts would be gathered into the first part's commit and filed under a command that never touched it.";
  "It refuses nothing and skips nothing on its own account: a part somebody has already timed by ear is protected one level down, where the protection belongs, and comes back here saying so rather than being quietly left out of the count.";
  arguments_assert(arguments, 1);
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_parts(folder_audio);
  await ai_git_noted();
  let written = [];
  for (let song of songs) {
    let one = await function_call_commit(
      lyric_video_psalm_part_document_times_write,
      [version, song.chapter, song.verse_first, song.verse_last],
    );
    list_add(written, one);
  }
  let r = {
    parts: songs.length,
    written,
  };
  return r;
}
