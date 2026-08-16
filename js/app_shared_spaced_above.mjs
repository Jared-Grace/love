import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_padding_top } from "./html_style_padding_top.mjs";
export function app_shared_spaced_above(component) {
  arguments_assert(arguments, 1);
  ("stand a line off from whatever came before it, by the one gap this app spaces things by");
  ("The mirror of standing a line off from what follows, and room rather than a margin for the same reason: a margin at the very top of a thing reaches outside it or stays inside it depending on what is done around it, so one line measures two different heights and what stands above it jumps by exactly this gap.");
  let gap = app_shared_spaced_gap();
  html_style_padding_top(component, gap);
}
