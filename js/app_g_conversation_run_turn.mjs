import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_conversation_advance } from "./app_g_conversation_advance.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { g_response } from "./g_response.mjs";
import { app_g_conversation_render } from "./app_g_conversation_render.mjs";
import { app_g_turn_quiz_once } from "./app_g_turn_quiz_once.mjs";
export function app_g_conversation_run_turn(
  turn,
  {
    overlay,
    npc,
    remaining_held,
    steps,
    steps_total,
    pending,
    render_openers,
    leave,
    prayed,
    render_pray,
    converts,
    goodbye,
  },
) {
  "One turn of a conversation put on the screen as a quiz, together with everything that happens once the right verse lands.";
  "THE TURNS STILL TO COME ARE HELD IN A SMALL KEEPER RATHER THAN HANDED IN AS A LIST, because the right verse can land long after this was called, and this and its caller have to be looking at the same list when it does.";
  "THE NPC'S WARM ANSWER TO THE WORD IS LEFT WAITING RATHER THAN SAID HERE, so the next screen says it in place of its usual ask-again line.";
  arguments_assert(arguments, 2);
  html_clear(overlay);
  let discern = {
    prayed: false,
  };
  function keep(t) {
    let neq = not_equal(t, turn);
    return neq;
  }
  async function on_correct() {
    let remaining_now = property_get(remaining_held, "remaining");
    let kept = list_filter(remaining_now, keep);
    property_set(remaining_held, "remaining", kept);
    await app_g_conversation_advance(steps, steps_total);
    let after_kind = property_get_or_null(turn, "after_kind");
    if (after_kind) {
      pending.text = g_response(after_kind);
    }
    app_g_conversation_render({
      overlay,
      remaining: kept,
      render_openers,
      leave,
      prayed,
      render_pray,
      converts,
      npc,
      goodbye,
    });
  }
  let concern = property_get(turn, "concern");
  let correct = property_get(turn, "correct");
  let wrong = property_get(turn, "wrong");
  app_g_turn_quiz_once({
    overlay,
    npc,
    concern,
    correct,
    wrong,
    on_correct,
    discern,
    leave,
  });
}
