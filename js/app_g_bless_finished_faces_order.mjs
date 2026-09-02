import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_lit_box } from "./app_g_bless_lit_box.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_camera_span } from "./app_g_bless_camera_span.mjs";
import { list_size } from "./list_size.mjs";
import { equal_not } from "./equal_not.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { app_g_bless_finished_person_beam_ms } from "./app_g_bless_finished_person_beam_ms.mjs";
import { range } from "./range.mjs";
export async function app_g_bless_finished_faces_order(
  people,
  container_map,
  div_map,
  player_img_c,
) {
  arguments_assert(arguments, 4);
  let box = app_g_bless_lit_box(people);
  let middle = property_get(box, "middle");
  let span = property_get(box, "span");
  ("The camera is set going from inside a step of its own that hands its arrival back rather");
  ("than being waited on here. One face is meant to light up WHILE the screen travels, so");
  ("the waiting has to be a separate decision taken further down - and a call written out");
  ("in the open in a waiting body reads as something to be waited on, both to a person and");
  ("to the pass that tidies this file.");
  async function travel_start() {
    let promise = await app_g_bless_camera_span(
      container_map,
      div_map,
      player_img_c,
      span,
      middle,
    );
    return promise;
  }
  let arrived = travel_start();
  let faces = list_size(people);
  let group = equal_not(faces, 1);
  if (group) {
    await arrived;
  }
  ("Equal LENGTH is what ending together cost, and it is why that was given up. Let go all");
  ("at the same moment, a light that started later had less time on the screen than the one");
  ("before it, and the last person prayed for got the shortest celebration of the three -");
  ("a difference a player has no way of reading as anything but the last of them mattering");
  ("least. Given the same time each, the lights end as they began, spaced out, and nobody");
  ("gets a shorter answer for having been reached second.");
  let spread = 600;
  function gap_get() {
    let alone = equal(faces, 1);
    if (alone) {
      let r = 0;
      return r;
    }
    let between = subtract(faces, 1);
    let share = divide(spread, between);
    return share;
  }
  let gap = gap_get();
  let hold = 1460;
  let fall = app_g_bless_finished_person_beam_ms();
  ("The faces are walked by POSITION rather than one by one, because the first of them is");
  ("the one face that waits for nothing and there is no way to know which that is from the");
  ("person alone.");
  let order = range(faces);
  let r2 = {
    gap,
    hold,
    fall,
    order,
  };
  return r2;
}
