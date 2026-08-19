import { psalms_videos_coverage } from "./psalms_videos_coverage.mjs";
import { youtube_channel_bible_singing } from "./youtube_channel_bible_singing.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { psalms_singing_gaps_path } from "./psalms_singing_gaps_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function psalms_singing_gaps_write() {
  "Reads the whole channel of sung Psalms against the Berean Standard Bible and writes down what is still unsung, handing back only how much was found.";
  "It takes nothing, so it can be run again the day after a new song goes up and the record catches up by itself. What comes back is a count and not the record, because the record is long and the file is where a person will want to read it.";
  let channel_id = youtube_channel_bible_singing();
  let playlist_id = youtube_channel_uploads_playlist(channel_id);
  let coverage = await psalms_videos_coverage(playlist_id);
  let path = psalms_singing_gaps_path();
  await file_overwrite_json(path, coverage);
  let verses_missing = 0;
  for (let chapter of coverage.chapters) {
    verses_missing = verses_missing + chapter.missing.length;
  }
  let r = {
    path: path,
    videos_total: coverage.videos_total,
    chapters_sung: coverage.chapters.length,
    chapters_unsung: coverage.chapters_unsung.length,
    verses_missing: verses_missing,
  };
  return r;
}
