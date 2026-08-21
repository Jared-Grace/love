import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { app_music_reference_show } from "./app_music_reference_show.mjs";
import { app_music_references_fill } from "./app_music_references_fill.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export async function app_music_song_image_couplets_show(parent) {
  "The hymn's own page: every line it sings in the order it is sung, and under each line what it means and the passages it rests on, with their words.";
  "A REPEATED LINE IS SUNG AGAIN AND SO WRITTEN AGAIN, but explained once. The words are the same the second time and the reason behind them has not changed, so a second explanation would read as a second, different reason for the same line.";
  "The whole song is drawn before any passage is fetched, so a reader who came for the words has them at once and the passages fill in under them.";
  arguments_assert(arguments, 1);
  let couplets = song_image_couplets();
  let verse_shown = 0;
  let keys_explained = [];
  let asked_list = [];
  for (let couplet of couplets) {
    let verse_new = not_equal(couplet.verse, verse_shown);
    if (verse_new) {
      verse_shown = couplet.verse;
      let said = text_combine("verse ", verse_shown);
      html_p_text(parent, said);
    }
    let halves = [couplet.first, couplet.second];
    let words = list_join_space(halves);
    html_div_text_bold(parent, words);
    let key = song_image_couplet_key(couplet.n);
    let explained = list_includes(keys_explained, key);
    if (explained) {
      continue;
    }
    list_add(keys_explained, key);
    let gloss = song_image_couplet_gloss(couplet.n);
    let unglossed = equal(gloss, undefined);
    if (unglossed) {
      continue;
    }
    html_p_text(parent, gloss.lyric_explain);
    let split = text_split_comma_or_empty(gloss.lyric_ref);
    let references = list_map(split, text_trim);
    for (let reference of references) {
      let asked = app_music_reference_show(parent, reference);
      list_add(asked_list, asked);
    }
  }
  await app_music_references_fill(asked_list);
}
