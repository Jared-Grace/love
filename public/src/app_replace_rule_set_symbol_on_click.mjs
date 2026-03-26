import { log } from "../../../love/public/src/log.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_move_animate_multiple } from "../../../love/public/src/html_move_animate_multiple.mjs";
import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { lists_map } from "../../../love/public/src/lists_map.mjs";
import { html_translation_transition_clear } from "../../../love/public/src/html_translation_transition_clear.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { html_move_animate_translate } from "../../../love/public/src/html_move_animate_translate.mjs";
import { html_move_animate_rect } from "../../../love/public/src/html_move_animate_rect.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_insert } from "../../../love/public/src/html_insert.mjs";
import { html_visibility_hidden } from "../../../love/public/src/html_visibility_hidden.mjs";
import { html_clone } from "../../../love/public/src/html_clone.mjs";
import { html_request_animation_frame } from "../../../love/public/src/html_request_animation_frame.mjs";
import { html_move_animate_multiple_parent_remove } from "../../../love/public/src/html_move_animate_multiple_parent_remove.mjs";
import { html_bounding_client_rect } from "../../../love/public/src/html_bounding_client_rect.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_slice_count } from "../../../love/public/src/list_slice_count.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_size_range } from "../../../love/public/src/list_size_range.mjs";
import { app_replace_rule_apply } from "../../../love/public/src/app_replace_rule_apply.mjs";
import { app_replace_button_symbol_style_valid_if_multiple } from "../../../love/public/src/app_replace_button_symbol_style_valid_if_multiple.mjs";
import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
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
  let rule2 = list_get(rules_parsed, index_selected);
  let eq = app_replace_rule_valid(rule2, index, start);
  if (eq) {
    symbols_invalid_chosen = {};
    app_replace_button_symbol_style_valid_if_multiple(sbs, true);
    start = app_replace_rule_apply(rule2, index, start);
    start_indices = list_size_range(start);
    log(app_replace_rule_set_symbol_on_click.name, {
      start_indices,
    });
    let rb = list_get(rules_buttons, index_selected);
    let lefts2 = property_get(rb, "lefts");
    let rights2 = property_get(rb, "rights");
    let size3 = list_size(lefts2);
    let sliced2 = list_slice_count(sbs, index, size3);
    const sum = index + size3;
    let skipped = list_skip(sbs, sum);
    let rects_before = list_map(skipped, html_bounding_client_rect);
    await html_move_animate_multiple_parent_remove(sliced2, lefts2, duration);
    await html_request_animation_frame();
    let rights_cloned = list_map(rights2, html_clone);
    function lambda8(item, index5) {
      html_visibility_hidden(item);
      html_insert(div_symbols, item, index + index5);
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
      const time = distance * 4;
      await html_move_animate_translate(el, 0, 0, time);
      await sleep(time);
      html_translation_transition_clear(el);
    }
    let mapped2 = lists_map([skipped, rects_after, rects_before], lambda9);
    await list_wait(mapped2);
    await html_move_animate_multiple(rights2, rights_cloned, duration);
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
