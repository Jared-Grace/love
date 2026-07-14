import { app_replace_animation_duration_max } from "./app_replace_animation_duration_max.mjs";
import { log } from "./log.mjs";
import { property_set } from "./property_set.mjs";
import { html_move_animate_multiple } from "./html_move_animate_multiple.mjs";
import { list_wait } from "./list_wait.mjs";
import { lists_map } from "./lists_map.mjs";
import { html_translation_transition_clear } from "./html_translation_transition_clear.mjs";
import { sleep } from "./sleep.mjs";
import { html_move_animate_translate } from "./html_move_animate_translate.mjs";
import { html_move_animate_rect } from "./html_move_animate_rect.mjs";
import { each_index } from "./each_index.mjs";
import { html_insert } from "./html_insert.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_clone } from "./html_clone.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { html_move_animate_multiple_parent_remove } from "./html_move_animate_multiple_parent_remove.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { list_map } from "./list_map.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_range } from "./list_size_range.mjs";
import { app_replace_rule_apply } from "./app_replace_rule_apply.mjs";
import { app_replace_button_symbol_style_valid_if_multiple } from "./app_replace_button_symbol_style_valid_if_multiple.mjs";
import { app_replace_rule_valid } from "./app_replace_rule_valid.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export async function app_replace_rule_set_symbol_on_click(
  rules_parsed,
  index_selected,
  index,
  start,
  symbols_invalid_chosen,
  sbs,
  start_indices,
  rules_buttons,
  duration,
  div_symbols,
) {
  let rule = list_get(rules_parsed, index_selected);
  let eq = app_replace_rule_valid(rule, index, start);
  if (eq) {
    symbols_invalid_chosen = {};
    app_replace_button_symbol_style_valid_if_multiple(sbs, true, false);
    start = app_replace_rule_apply(rule, index, start);
    start_indices = list_size_range(start);
    log(app_replace_rule_set_symbol_on_click.name, {
      start_indices,
    });
    let rb = list_get(rules_buttons, index_selected);
    let lefts = property_get(rb, "lefts");
    let rights = property_get(rb, "rights");
    let size = list_size(lefts);
    let sliced = list_slice_count(sbs, index, size);
    let sum = text_combine(index, size);
    let skipped = list_skip(sbs, sum);
    let rects_before = list_map(skipped, html_bounding_client_rect);
    await html_move_animate_multiple_parent_remove(sliced, lefts, duration);
    await html_request_animation_frame();
    let rights_cloned = list_map(rights, html_clone);
    function lambda8(item, index5) {
      html_visibility_hidden(item);
      html_insert(div_symbols, item, text_combine(index, index5));
    }
    each_index(rights_cloned, lambda8);
    let rects_after = list_map(skipped, html_bounding_client_rect);
    async function lambda9(a) {
      let [el, rect_before, rect_after] = a;
      let r3 = await html_move_animate_rect(el, rect_before, rect_after, 0);
      let distance = property_get(r3, "distance");
      el.offsetWidth;
      await html_request_animation_frame();
      ("here the duration depends on the distance so that smaller distances take less time");
      let time = divide(
        multiply(multiply(distance, 4), duration),
        app_replace_animation_duration_max(),
      );
      await html_move_animate_translate(el, 0, 0, time);
      await sleep(time);
      html_translation_transition_clear(el);
    }
    let mapped = lists_map([skipped, rects_after, rects_before], lambda9);
    await list_wait(mapped);
    await html_move_animate_multiple(rights, rights_cloned, duration);
  } else {
    property_set(symbols_invalid_chosen, index, true);
  }
  let r5 = {
    start,
    symbols_invalid_chosen,
    start_indices,
  };
  return r5;
}
