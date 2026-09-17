import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_song_audio_url(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("The address a song's sound can be played from in a browser while working on this machine: a copy squeezed small enough for a phone, kept beside the song's timing document under the song's own name.");
  ("★ IT IS A SMALL COPY AND NOT THE MASTER. The mastered file is tens of megabytes and lives wherever its owner keeps it; a phone checking word timing needs the same sound, not the same bytes, and a player seeking inside a file several times a minute should not be fetching forty megabytes to do it.");
  ("THE LOCAL SERVER HANDS OUT THE WHOLE FOLDER THE REPOS SIT IN, so a file kept out of git is still reachable by name - the same reason the song's pictures can be looked at on a phone. The folder is spelled out here because the function that says where song documents are answers a path on this machine's disk, and a browser has no disk to ask.");
  let url = "/love/gitignore/lyric_videos_songs/" + name + ".m4a";
  return url;
}
