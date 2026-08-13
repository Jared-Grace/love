import { text_lower_to } from "./text_lower_to.mjs";
import { text_ends_with_space } from "./text_ends_with_space.mjs";
import { text_starts_with_space } from "./text_starts_with_space.mjs";
import { g_arc_prompt } from "./g_arc_prompt.mjs";
import { g_profiles } from "./g_profiles.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_arc_prompt_style_assert() {
  "QA gate: prove the arc prompt keeps the three conventions a prompt written by many hands loses first - it says person rather than npc, no line trails whitespace, and an indented line is indented by exactly two spaces.";
  "A prompt is prose assembled from several files, so nothing about it fails when it drifts. It just reads slightly worse to the model on every call, in a way nobody notices while writing one more line into the middle of it.";
  "NPC is the one worth a gate rather than a docstring. It is the word the surrounding code correctly uses for the thing being generated, so it is always at the writer's fingertips - and it is the wrong word to hand a model that is being asked to write a human being. The prompt already says person everywhere else.";
  "Trailing whitespace and a one-space indent are invisible in a JS string literal and only appear in the assembled prompt, which is the one place nobody reads. That is exactly what a gate is for.";
  "It builds the prompt from a stand-in profile because it is checking the SHAPE of the lines rather than any particular person's. The leader form is checked too, since it is a different set of lines and can drift on its own.";
  let deck = g_profiles();
  let profile = deck[0];
  let faults = [];
  function check_prompt(leader) {
    let prompt = g_arc_prompt("Chapter", "verses", 36, profile, leader);
    let lines = text_split_newline(prompt);
    function check_line(line) {
      let lower = text_lower_to(line);
      if (text_includes(lower, "npc")) {
        list_add(faults, {
          leader,
          line,
          hint: "say person rather than npc - the prompt asks for a human being, not a game object",
        });
      }
      if (text_ends_with_space(line)) {
        list_add(faults, {
          leader,
          line,
          hint: "a line must not end in whitespace",
        });
      }
      let one = text_starts_with_space(line);
      let two = text_starts_with(line, "  ");
      if (one && not(two)) {
        list_add(faults, {
          leader,
          line,
          hint: "an indented line is indented by exactly two spaces",
        });
      }
    }
    each(lines, check_line);
  }
  check_prompt(false);
  check_prompt(true);
  let b = equal(faults.length, 0);
  assert_json(b, {
    faults,
    hint: "the arc prompt says person rather than npc, trails no whitespace, and indents by two spaces",
  });
}
