import { song_image_luma_badge } from "./song_image_luma_badge.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_img } from "./html_img.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { song_image_candidates_get } from "./song_image_candidates_get.mjs";
import { song_image_chosen_map } from "./song_image_chosen_map.mjs";
import { song_image_commons_url } from "./song_image_commons_url.mjs";
export async function song_image_candidate_column(parent, state, on_change) {
  "the right column: every candidate for this couplet as a numbered row, clicked to look at it in frame; deciding is a separate button from looking, so comparing several never commits by accident";
  let column = html_div(parent);
  html_style_set(column, "width", "300px");
  let candidates = song_image_candidates_get(state.couplet);
  let looking = equal(state.looking[state.couplet], undefined)
    ? 0
    : state.looking[state.couplet];
  let map = song_image_chosen_map(state);
  let chosen = map[state.couplet];
  let number = 0;
  for (let candidate of candidates) {
    let index = number;
    number = number + 1;
    let row = html_div(column);
    html_style_set(row, "display", "flex");
    html_style_set(row, "gap", "8px");
    html_style_set(row, "align-items", "center");
    html_style_set(row, "margin-bottom", "6px");
    html_style_set(row, "padding", "4px");
    html_style_set(row, "border-radius", "6px");
    html_style_set(
      row,
      "border",
      equal(index, looking) ? "1px solid #ffe994" : "1px solid #222222",
    );
    function lambda() {
      state.looking[state.couplet] = index;
      on_change();
    }
    let text2 = String(index + 1);
    let pick = html_button(row, text2, lambda);
    html_style_set(pick, "width", "28px");
    html_style_set(pick, "cursor", "pointer");
    let src = song_image_commons_url(candidate.title, 120);
    let thumbnail = html_img(row, src);
    html_style_set(thumbnail, "width", "54px");
    html_style_set(thumbnail, "height", "54px");
    html_style_set(thumbnail, "object-fit", "cover");
    html_style_set(thumbnail, "cursor", "pointer");
    let text = html_div(row);
    html_style_set(text, "font-size", "11px");
    html_style_set(text, "color", "#bebebe");
    html_style_set(text, "flex", "1");
    html_text_set(
      text,
      candidate.title +
        '<br><span style="color:#676767">' +
        candidate.licence +
        "</span>",
    );
    await song_image_luma_badge(row, candidate.title);
    function lambda2() {
      if (equal(map[state.couplet], index)) {
        delete map[state.couplet];
      } else {
        map[state.couplet] = index;
      }
      on_change();
    }
    let decide = html_button(
      row,
      equal(chosen, index) ? "✓" : "choose",
      lambda2,
    );
    html_style_set(decide, "font-size", "11px");
    html_style_set(decide, "cursor", "pointer");
  }
  if (equal(candidates.length, 0)) {
    let empty = html_div(column);
    html_style_set(empty, "font-size", "13px");
    html_style_set(empty, "color", "#676767");
    html_text_set(empty, "Nobody has searched for this symbol yet.");
  }
}
