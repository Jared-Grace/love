import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_viewport_readout_update_each_bar(state, round_to) {
  arguments_assert(arguments, 2);
  let bars = [];
  for (let each_bar of state.bars) {
    let element = html_component_element_get(each_bar);
    if (element.isConnected) {
      let rect = element.getBoundingClientRect();
      bars.push(
        "bar top " +
          round_to(rect.top) +
          " bottom " +
          round_to(rect.bottom) +
          " style top " +
          element.style.top,
      );
      ("each button in the bar is listed with where it sits and whether it is shown at all, because the bar measured still at the top on a phone while the human saw its first button gone, 2026-09-28 - so the next question is which of the bar's own things moved or went");
      for (let button of element.querySelectorAll("button")) {
        let box_button = button.getBoundingClientRect();
        let style = getComputedStyle(button);
        bars.push(
          "  button " +
            button.textContent.slice(0, 24) +
            " top " +
            round_to(box_button.top) +
            " bottom " +
            round_to(box_button.bottom) +
            " left " +
            round_to(box_button.left) +
            " right " +
            round_to(box_button.right) +
            " " +
            style.display +
            " " +
            style.visibility,
        );
      }
    }
  }
  return bars;
}
