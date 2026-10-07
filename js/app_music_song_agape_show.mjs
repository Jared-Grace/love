import { arguments_assert } from "./arguments_assert.mjs";
import { song_agape_sections } from "./song_agape_sections.mjs";
import { song_agape_glosses } from "./song_agape_glosses.mjs";
import { song_agape_youtube } from "./song_agape_youtube.mjs";
import { app_music_song_sections_show_generic } from "./app_music_song_sections_show_generic.mjs";
export async function app_music_song_agape_show(parent, song) {
  "$plain song";
  "This song's own page: its seven parts in order, each line opening to the passages of scripture it rests on.";
  arguments_assert(arguments, 2);
  let sections = song_agape_sections();
  let glosses = song_agape_glosses();
  let video_id = song_agape_youtube();
  await app_music_song_sections_show_generic(
    parent,
    song,
    sections,
    glosses,
    video_id,
  );
}
