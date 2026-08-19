import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { http_generic } from "./http_generic.mjs";
import { bfl_http_options } from "./bfl_http_options.mjs";
export async function bfl_draw_wait(polling_url, tries) {
  "wait for a picture Black Forest Labs is drawing and answer the address it can be fetched from, asking again once a second until it is ready";
  "the address it answers with is only good for ten minutes, so whoever receives it should fetch the bytes straight away rather than write it down";
  "running out of tries is told apart from being refused. Both stop the wait, but one means ask again later and the other means this picture will never come, and a caller that cannot tell them apart will either give up on work that was nearly done or retry forever on work that was already lost.";
  let options = await bfl_http_options();
  let i = 0;
  while (less_than(i, tries)) {
    i = i + 1;
    let buffer = await http_generic(polling_url, options);
    let answer = buffer_to_json(buffer);
    let status = answer.status;
    if (equal(status, "Ready")) {
      let sample = answer.result.sample;
      return sample;
    }
    let refused = equal(status, "Error") || equal(status, "Failed");
    let b = not(refused);
    assert_json(b, {
      polling_url,
      status,
      answer,
      hint: "Black Forest Labs will not draw this one",
    });
    await sleep_seconds(1);
  }
  assert_json(false, {
    polling_url,
    tries,
    hint: "the picture was still being drawn when the waiting ran out, so ask at this same address again rather than paying for it twice",
  });
}
