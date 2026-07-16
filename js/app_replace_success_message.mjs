import { app_replace_rule_set_highlight } from "../../love/js/app_replace_rule_set_highlight.mjs";
import { each } from "../../love/js/each.mjs";
import { html_bold } from "../../love/js/html_bold.mjs";
import { html_style_font_size } from "../../love/js/html_style_font_size.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { html_style_padding_em } from "../../love/js/html_style_padding_em.mjs";
import { app_shared_symbol_tile_style_inner } from "../../love/js/app_shared_symbol_tile_style_inner.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { html_p } from "../../love/js/html_p.mjs";
import { list_join_empty } from "../../love/js/list_join_empty.mjs";
import { invoke_multiple } from "../../love/js/invoke_multiple.mjs";
import { emoji_check } from "../../love/js/emoji_check.mjs";
import { list_add_first } from "../../love/js/list_add_first.mjs";
import { list_shuffle_take } from "../../love/js/list_shuffle_take.mjs";
import { emoji_party_face } from "../../love/js/emoji_party_face.mjs";
import { emoji_party_popper } from "../../love/js/emoji_party_popper.mjs";
import { emoji_medal_1 } from "../../love/js/emoji_medal_1.mjs";
import { emoji_medal_star } from "../../love/js/emoji_medal_star.mjs";
import { emoji_clap } from "../../love/js/emoji_clap.mjs";
import { emoji_100 } from "../../love/js/emoji_100.mjs";
import { emoji_trophy } from "../../love/js/emoji_trophy.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export function app_replace_success_message(parent) {
  let choices = [
    emoji_trophy,
    emoji_100,
    emoji_clap,
    emoji_medal_star,
    emoji_medal_1,
    emoji_party_popper,
    emoji_party_face,
  ];
  let taken_count = 3;
  let taken = list_shuffle_take(choices, taken_count);
  list_add_first(taken, emoji_check);
  let mapped = invoke_multiple(taken);
  let joined = list_join_empty(mapped);
  let p = html_p(parent);
  let highlight = app_replace_rule_set_highlight();
  html_style_background_color_set(p, highlight);
  app_shared_symbol_tile_style_inner(p);
  let value_em = "0.3";
  html_style_padding_em(p, value_em);
  html_centered(p);
  let p_emojis = html_div(p);
  html_span_text(p_emojis, joined);
  html_style_font_size(p_emojis, "1.5em");
  let p_encouragement = html_div(p);
  let encouragements_choices = [
    "Congratulations",
    "Success",
    "Good job",
    "Great job",
    "Well done",
    "Keep it up",
    "Amazing",
    "Way to go",
    "Awesome",
  ];
  let encouragements = list_shuffle_take(encouragements_choices, 2);
  html_bold(p_encouragement);
  function lambda(encouragement) {
    html_span_text(p_encouragement, text_combine(encouragement, "! "));
  }
  each(encouragements, lambda);
  return p;
}
