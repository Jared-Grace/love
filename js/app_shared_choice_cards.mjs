import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_font_size_1em } from "./html_font_size_1em.mjs";
import { html_element } from "./html_element.mjs";
import { html_input_type } from "./html_input_type.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_checked_set } from "./html_checked_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_choice_card_chosen_color } from "./app_shared_choice_card_chosen_color.mjs";
import { app_shared_choice_card_ring } from "./app_shared_choice_card_ring.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function app_shared_choice_cards(parent, choices, chosen, on_choose) {
  arguments_assert(arguments, 4);
  ("$plain parent");
  ("$plain choices");
  ("$plain chosen");
  ("$plain on_choose");
  ("Big choice cards stacked one under another, one per choice - each an object with a key, a title, the sentence under it (details), and disabled - acting as radio buttons: the one whose key is chosen is ticked, green and ringed; pressing another hands on_choose its key. The caller draws them again with the new key.");
  ("Dressed as the karate app's device question (human, 2026-11-25: \"in karate app there's some kind of ui for like radio buttons but better looking - can you use something like that (DRY)\"): the same scaled-up tick box, the same green, the same ring.");
  ("The whole card takes the tap, not the little box inside it - a box is a hard thing to hit with a thumb.");
  ("A disabled card is drawn faded and takes no tap, with its sentence saying why, so a reader sees the choice exists and why it is shut rather than wondering where it went.");
  let cards = html_div(parent);
  for (let choice of choices) {
    let key = property_get(choice, "key");
    let disabled = property_get(choice, "disabled");
    let on = equal(key, chosen);
    let container = app_shared_container(cards);
    app_shared_style_control(container);
    html_font_size_1em(container);
    let label = html_element(container, "label");
    let box = html_input_type(label, "radio");
    html_style_assign(box, {
      transform: "scale(2)",
      margin: "1em",
    });
    let text = property_get(choice, "title");
    let title = html_span_text(label, text);
    let value = app_shared_style_control_font_size();
    html_style_font_size(title, value);
    let text2 = property_get(choice, "details");
    html_div_text(label, text2);
    html_checked_set(box, on);
    if (on) {
      let background = app_shared_choice_card_chosen_color();
      html_style_background_color_set(container, background);
      app_shared_choice_card_ring(container, true);
    }
    if (disabled) {
      html_attribute_set(box, "disabled", "disabled");
      html_style_assign(container, {
        opacity: "0.55",
        cursor: "not-allowed",
      });
      continue;
    }
    function on_press(e) {
      e.preventDefault();
      if (on) {
        return;
      }
      on_choose(key);
    }
    html_on_click(container, on_press);
  }
  return cards;
}
