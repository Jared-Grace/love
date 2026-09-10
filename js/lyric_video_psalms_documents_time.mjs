import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { psalms_songs_folder_chapters } from "./psalms_songs_folder_chapters.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_psalm_document_times_write } from "./lyric_video_psalm_document_times_write.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export async function lyric_video_psalms_documents_time(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Listens to every singing of a whole psalm on this machine that has a timing document, writes the times into the ones nobody has timed by hand, and hands back how much of each was heard.");
  ("★ IT FINDS ITS OWN SET RATHER THAN BEING HANDED ONE, so it cannot drift from what is actually there. Songs arrive in the download folder in batches and documents are drafted in batches, and a list typed out at either moment is a list that is wrong by the next one. Asking the folder each time also means a chapter already timed by hand is reported by name with a reason rather than being quietly absent from somebody's list.");
  ("★ EVERY SINGING IS HEARD, NOT ONE PER CHAPTER, BECAUSE EACH ARRANGEMENT PUTS THE LINES SOMEWHERE ELSE. Hearing only the earliest recording of a chapter left the others holding the flat spread they were drafted with and no command able to reach them. Each is asked for by its chapter and its mark together, which is the pair that names one recording - the mark rather than the number in the file name, because that numbering was the downloader's and it counted the compressed copies and the lossless ones as two separate runs.");
  ("★ WHAT COUNTS AS A RESULT HERE IS HAVING LISTENED, NOT HAVING WRITTEN. The chapters somebody already timed by ear are refused the write and are the most valuable ones to have heard, because their right answers are known and every question about how well the machine hears is settled against them. Splitting the run on whether a file changed would have filed exactly those as failures.");
  ("★ EVERY SINGING COMMITS AS IT LANDS, AND NOT THE RUN AT THE END. Listening to one song costs about a minute of the machine's whole attention, so a run over the psalter is most of an hour, and with several hands editing this same folder somebody else's sweep will reach these files long before an hour is up and file them under a bare word. Committing per song shrinks the window a sweep can win from the length of the run to the length of one song, and each entry then names the one command and the three words that made it, which somebody can run again.");
  ("The whole hearing of each song is already kept in the findings folder by the step itself, so what comes back here is only enough to see the shape of the run. The detail is a file name away and does not need carrying through a terminal.");
  let folder_audio = folder_user_downloads_path("");
  let songs = await psalms_songs_folder_chapters(folder_audio);
  await ai_git_noted();
  let heard = [];
  let unheard = [];
  for (let song of songs) {
    let args = [version, song.chapter, song.mark];
    let answer = await function_call_commit(
      lyric_video_psalm_document_times_write,
      args,
    );
    if (not_heard_is(answer)) {
      list_add(unheard, answer);
      continue;
    }
    let one = {
      chapter: answer.chapter,
      mark: song.mark,
      wrote: answer.wrote,
      match_rate: answer.match_rate,
      lines: answer.lines,
      flagged: answer.flagged.length,
    };
    list_add(heard, one);
  }
  function not_heard_is(answer) {
    let deaf = equal(answer.heard, false);
    return deaf;
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
    unheard,
    heard_least: least,
    chapters: heard,
  };
  return run;
}
