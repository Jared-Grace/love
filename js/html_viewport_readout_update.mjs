import { property_get } from "./property_get.mjs";
import { html_viewport_readout_update_box } from "./html_viewport_readout_update_box.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { json_to } from "./json_to.mjs";
import { server_url_api } from "./server_url_api.mjs";
export function html_viewport_readout_update(state, round_to, probes, box) {
  arguments_assert(arguments, 4);
  let viewport = window.visualViewport;
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
  ("the five things reaching furthest right, when any reaches past the screen, are listed too, because opening the last lesson group on a phone made the page 429 wide on a 414 screen, 2026-09-28 - the browser then widened its frame to fit, the frame grew taller than the screen, and the bar held to the frame top slid above what is seen. Which thing sticks out is only known on the phone, where the text is drawn larger");
  let r = html_viewport_readout_update_box(
    bars,
    round_to,
    probes,
    viewport,
    box,
  );
  let text = property_get(r, "text");
  let lines = property_get(r, "lines");
  let n = property_get(r, "n");
  ("each reading that differs from the last is also sent to the dev server, which files it (",
    fn_name("viewport_readout_record"),
    "), so the numbers reach the developer without a picture of them. A failed send is dropped: this page only exists to be read, and it keeps showing the numbers either way");
  if (equal(text, state.sent)) {
    return;
  }
  state.sent = text;
  ("the time is added only to what is sent, never to what is compared, because it differs every tick - compared, it sent a reading four times a second and the page never went quiet");
  let v = lines.concat([
    "page time " + round_to(n),
    "agent " + navigator.userAgent,
  ]);
  let body = json_to({
    f_name: fn_name("viewport_readout_record"),
    args: [v],
  });
  function lambda() {
    return null;
  }
  let a = server_url_api();
  fetch(a, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  }).catch(lambda);
}
