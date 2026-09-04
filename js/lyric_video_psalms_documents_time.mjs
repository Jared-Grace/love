import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { less_than } from "./less_than.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_psalm_document_times_write } from "./lyric_video_psalm_document_times_write.mjs";
import { equal } from "./equal.mjs";
export async function lyric_video_psalms_documents_time(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Listens to every psalm sung on this machine that has a timing document nobody has touched, writes the times into each one, and hands back what was heard and what was refused.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, so it cannot drift from what is actually there. Songs arrive in the download folder in batches and documents are drafted in batches, and a list typed out at either moment is a list that is wrong by the next one. Asking the folder each time also means a chapter already timed is refused by name with a reason, which is a better answer than being quietly absent from somebody's list.");
  ("★ EVERY CHAPTER COMMITS AS IT LANDS, AND NOT THE RUN AT THE END. Listening to one song costs about a minute of the machine's whole attention, so a run over the psalter is most of an hour, and with several hands editing this same folder somebody else's sweep will reach these files long before an hour is up and file them under a bare word. Committing per chapter shrinks the window a sweep can win from the length of the run to the length of one song, and each entry then names the one command and the two words that made it, which somebody can run again.");
  ("The whole hearing of each chapter is already kept in the findings folder by the step itself, so what comes back here is only enough to see the shape of the run - how much of each psalm was heard, and how many lines want a person. The detail is a file name away and does not need carrying through a terminal.");
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  await ai_git_noted();
  let heard = [];
  let refused = [];
  for (let number = 0; less_than(number, songs.length); number++) {
    let chapter = songs[number].chapter;
    let args = [version, chapter];
    let written = await function_call_commit(
      lyric_video_psalm_document_times_write,
      args,
    );
    if (written.wrote) {
      let one = {
        chapter: written.chapter,
        match_rate: written.match_rate,
        lines: written.lines,
        flagged: written.flagged.length,
      };
      heard.push(one);
      continue;
    }
    refused.push(written);
  }
  let least = null;
  for (let one of heard) {
    let first = equal(least, null);
    let worse = first || less_than(one.match_rate, least.match_rate);
    if (worse) {
      least = one;
    }
  }
  let run = {
    songs: songs.length,
    heard: heard.length,
    refused,
    heard_least: least,
    chapters: heard,
  };
  return run;
}
