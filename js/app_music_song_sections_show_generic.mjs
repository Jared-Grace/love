import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_song_verses_start } from "./app_music_song_verses_start.mjs";
import { app_music_song_folds_show } from "./app_music_song_folds_show.mjs";
import { app_music_youtube_link } from "./app_music_youtube_link.mjs";
import { app_shared_spaced_large_gap } from "./app_shared_spaced_large_gap.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { html_p_text_centered } from "./html_p_text_centered.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { song_glosses_line_references } from "./song_glosses_line_references.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { app_music_song_line_show } from "./app_music_song_line_show.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_music_references_fill } from "./app_music_references_fill.mjs";
export async function app_music_song_sections_show_generic(
  parent,
  song,
  sections,
  glosses,
  video_id,
) {
  "$plain song";
  "$plain sections";
  "$plain glosses";
  "$plain video_id";
  "One song's own page for a song written in named parts: every line it sings in the order it is sung, gathered under the name of the part it belongs to, each line opening to the passages of scripture it rests on.";
  "IT IS HANDED THE SONG'S PARTS, ITS EXPLANATIONS AND ITS FILM rather than naming any song, so every song written in parts is drawn by this one body and a fix to how a part is headed reaches all of them at once.";
  "THE PASSAGES ARE FOLDED BEHIND THE LINES, so what a reader meets is the song rather than a wall of scripture, and the verses behind whichever line raised the question are one tap under it.";
  "A LINE THE SONG ONLY REPEATS IS LEFT OUT, wherever the repeat falls. Drawn a second time it would open onto the passages the first one already showed - so the reader is offered the same scripture twice and learns nothing from the second offer. The singing repeats it; the page does not need to.";
  "A PART WHOSE LINES HAVE ALL BEEN SUNG ALREADY IS NOT ANNOUNCED. The heading is drawn when the first line under it is drawn rather than when the part is reached, which is what stops a repeated part leaving a name over nothing.";
  "A PART IS NAMED CLOSE OVER ITS OWN LINES AND WELL CLEAR OF THE PART BEFORE IT. The room under a heading is cut to almost nothing and the room over it is opened up, so the name and its first line touch. The first part named gets no room above it at all, because the page top matter above it already closes with a break of its own.";
  "A line resting on nothing is drawn plainly rather than as a card that opens on emptiness.";
  "THE TRANSLATION CHOICES ARE READ ONCE AT THE TOP AND CARRIED DOWN, rather than looked up under every line. It is the same answer for the whole song, and a hundred lookups of one constant is a hundred chances for two of them to differ.";
  "Open-everything and shut-everything sit at the top, because a reader who wants to read the whole song through, or to search it with their browser's own find, cannot do either while the passages are folded away.";
  "THE SCRIPTURE IS SET TRAVELLING BEFORE THE FIRST LINE IS DRAWN, and waited for at the end. Drawing does not stop for it, so the reader still meets the words first, and waits for the longer of the two instead of for one and then the other.";
  arguments_assert(arguments, 5);
  let texts_asked = app_music_song_verses_start(song);
  let versions = song.versions();
  let folds = app_music_song_folds_show(parent);
  let watch = app_music_youtube_link(
    parent,
    video_id,
    "Watch the whole song on YouTube",
  );
  let value = app_shared_spaced_large_gap();
  html_style_margin_bottom(watch, value);
  let sung = [];
  let asked_all = [];
  let headed = false;
  for (let section of sections) {
    let name = property_get(section, "name");
    let lines = property_get(section, "lines");
    let named = false;
    for (let line of lines) {
      let repeated = list_includes(sung, line);
      if (repeated) {
        continue;
      }
      list_add(sung, line);
      let unnamed = not(named);
      if (unnamed) {
        let heading = html_p_text_centered(parent, name);
        let first = not(headed);
        let large = app_shared_spaced_large_gap();
        let above = first ? 0 : large;
        html_style_margin_top(heading, above);
        let below = app_shared_spaced_tiny_gap();
        html_style_margin_bottom(heading, below);
        headed = true;
        named = true;
      }
      let references = song_glosses_line_references(glosses, line);
      let unreferenced = list_empty_is(references);
      if (unreferenced) {
        html_div_text_bold(parent, line);
        continue;
      }
      let shown = app_music_song_line_show(
        folds,
        parent,
        line,
        references,
        versions,
      );
      list_add_multiple(asked_all, shown.asked_list);
    }
  }
  await app_music_references_fill(asked_all, song, texts_asked);
}
