import { app_replace_rule_set_highlight } from "../../../love/public/src/app_replace_rule_set_highlight.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_style_padding_em } from "../../../love/public/src/html_style_padding_em.mjs";
import { app_replace_button_symbol_style_inner } from "../../../love/public/src/app_replace_button_symbol_style_inner.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { emoji_party_face } from "../../../love/public/src/emoji_party_face.mjs";
import { emoji_party_popper } from "../../../love/public/src/emoji_party_popper.mjs";
import { emoji_medal_1 } from "../../../love/public/src/emoji_medal_1.mjs";
import { emoji_medal_star } from "../../../love/public/src/emoji_medal_star.mjs";
import { emoji_clap } from "../../../love/public/src/emoji_clap.mjs";
import { emoji_100 } from "../../../love/public/src/emoji_100.mjs";
import { emoji_trophy } from "../../../love/public/src/emoji_trophy.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
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
  const taken_count = 3;
  let taken = list_shuffle_take(choices, taken_count);
  list_add_first(taken, emoji_check);
  let mapped = invoke_multiple(taken);
  let joined = list_join_empty(mapped);
  let p = html_p(parent);
  let highlight = app_replace_rule_set_highlight();
  html_style_background_color_set(p, highlight);
  app_replace_button_symbol_style_inner(p);
  const value_em = "0.3";
  html_style_padding_em(p, value_em);
  html_centered(p);
  let p_emojis = html_div(p);
  html_span_text(p_emojis, joined);
  html_style_font_size(p_emojis, "1.5em");
  let p_encouragement = html_div(p);
  const encouragements_choices = [
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
