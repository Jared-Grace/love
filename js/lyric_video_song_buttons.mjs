import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { html_hash_name_second_set } from "./html_hash_name_second_set.mjs";
import { html_button_list } from "./html_button_list.mjs";
import { html_hash_name_second_or_empty } from "./html_hash_name_second_or_empty.mjs";
import { list_includes } from "./list_includes.mjs";
export async function lyric_video_song_buttons(parent, song_show) {
  "$plain parent";
  "$plain song_show";
  "A button for every song, and the song the address names after the slash opened at once, as agape in #lyric_video_song_swaps/agape.";
  "A LINK LANDS ON THE SONG, because a link that still needs a click to reach what it was sent for spends a person's step on nothing.";
  "CHOOSING A SONG WRITES IT INTO THE ADDRESS, so the address in the bar can be copied and sent as it stands.";
  "A NAME AFTER THE SLASH THAT IS NO SONG OPENS NOTHING, and the buttons stay to choose from.";
  arguments_assert(arguments, 2);
  let f_names = fn_name("lyric_video_song_names");
  let names = await api_read(f_names, []);
  function name_text(name) {
    return name;
  }
  async function chosen(name) {
    html_hash_name_second_set(name);
    await song_show(name);
  }
  html_button_list(parent, names, name_text, chosen);
  let asked = html_hash_name_second_or_empty();
  let known = list_includes(names, asked);
  if (known) {
    await song_show(asked);
  }
  return names;
}
