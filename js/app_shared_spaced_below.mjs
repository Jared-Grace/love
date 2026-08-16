import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_padding_bottom } from "./html_style_padding_bottom.mjs";
export function app_shared_spaced_below(component) {
  arguments_assert(arguments, 1);
  ("stand a line off from whatever comes after it, by the one gap this app spaces things by");
  ("Room underneath the line rather than a margin underneath it, because a margin at the very bottom of a thing reaches outside that thing or stays inside it depending on whether what overflows is hidden - so one line measures two different heights and whatever stands below it jumps by exactly this gap. Room is part of the line whatever is done around it.");
  let gap = app_shared_spaced_gap();
  html_style_padding_bottom(component, gap);
}
