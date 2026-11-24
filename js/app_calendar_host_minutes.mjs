import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { list_map } from "./list_map.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { html_clear } from "./html_clear.mjs";
import { calendar_meeting_minutes_choices } from "./calendar_meeting_minutes_choices.mjs";
import { app_shared_choice_row } from "./app_shared_choice_row.mjs";
import { list_filter } from "./list_filter.mjs";
import { less_than } from "./less_than.mjs";
export function app_calendar_host_minutes(area, host) {
  arguments_assert(arguments, 2);
  ('MEETING LENGTH AND HOW OFTEN ONE CAN START ARE THE HOST\'S TO SET, ON RULES (human, 2026-11-24: "should there be a setting to adjust how often meetings are available?"; "skip 45 min for now since no one has asked for it yet"; "should these be in rules?"). They were fixed at 25 and 60. Answers {meeting_minutes, block_minutes}, kept up to date as the host picks, for the Save to send.');
  ('55 minutes is a choice too (human, 2026-11-24: "should be able to pick 55 minutes"). A start every 30 minutes is offered only for a meeting that fits in it, so meetings never overlap.');
  let chosen = {
    meeting_minutes: host ? host.meeting_minutes : 25,
    block_minutes: host ? host.block_minutes : 60,
  };
  let meeting_area = app_shared_field(area);
  let block_area = app_shared_field(area);
  function minutes_choices(list) {
    function choice(m) {
      let r = {
        key: m,
        text: m + " minutes",
      };
      return r;
    }
    let r2 = list_map(list, choice);
    return r2;
  }
  function fits(b) {
    let r3 = less_than_equal(chosen.meeting_minutes, b);
    return r3;
  }
  function minutes_draw() {
    html_clear(meeting_area);
    let r4 = calendar_meeting_minutes_choices();
    let choices = minutes_choices(r4);
    app_shared_choice_row(
      meeting_area,
      "Meeting length",
      choices,
      chosen.meeting_minutes,
      meeting_pick,
    );
    html_clear(block_area);
    let filtered = list_filter([30, 60], fits);
    let choices2 = minutes_choices(filtered);
    app_shared_choice_row(
      block_area,
      "A meeting can start every",
      choices2,
      chosen.block_minutes,
      block_pick,
    );
  }
  function meeting_pick(m) {
    chosen.meeting_minutes = m;
    if (less_than(chosen.block_minutes, m)) {
      chosen.block_minutes = 60;
    }
    minutes_draw();
  }
  function block_pick(m) {
    chosen.block_minutes = m;
    minutes_draw();
  }
  minutes_draw();
  return chosen;
}
