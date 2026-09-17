import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { html_clear } from "./html_clear.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_song_swap_card } from "./lyric_video_song_swap_card.mjs";
import { each } from "./each.mjs";
import { html_button_list } from "./html_button_list.mjs";
export async function lyric_video_song_swaps_preview() {
  "The screen for choosing between a song's current background pictures and the pictures offered to replace them, on the sandbox app at hash lyric_video_song_swaps.";
  "BEFORE AND AFTER SIT SIDE BY SIDE, because a replacement is judged against what it replaces; seen alone, a candidate is judged against nothing.";
  "NOTHING IS CHANGED FROM HERE. Choosing is said to whoever is at the keyboard, who points the song's document at the picture and renders again.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  let asked =
    "Choose a song. Each picture that has candidates is shown first, then the candidates beside it, under the words sung over it.";
  html_p_text(root, asked);
  let chosen = html_div(root);
  let told = app_shared_text_quiet(root, "");
  let cards = html_div(root);
  async function song_show(name) {
    html_clear(cards);
    let f_document = fn_name("lyric_video_song_document_read");
    let document = await api_read(f_document, [name]);
    let f_swaps = fn_name("lyric_video_song_swaps_read");
    let swaps = await api_read(f_swaps, [name]);
    let none = null_is(document) || null_is(swaps);
    if (none) {
      app_shared_text_quiet(cards, "this song has no pictures on offer");
      return;
    }
    let listed = property_get(swaps, "swaps");
    function card(swap) {
      lyric_video_song_swap_card(cards, document, swap);
    }
    each(listed, card);
  }
  function name_text(name) {
    return name;
  }
  let f_names = fn_name("lyric_video_song_names");
  let names = await api_read(f_names, []);
  html_button_list(chosen, names, name_text, song_show);
  return told;
}
