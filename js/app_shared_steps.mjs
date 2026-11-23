import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { list_next_try } from "./list_next_try.mjs";
export async function app_shared_steps(
  parent,
  steps,
  fallback_key,
  refresh,
  home_draw,
) {
  arguments_assert(arguments, 5);
  ("A page cut into screens, one per step, with a home screen listing them all. Each step is {key, title, done, locked, summary, draw}: done() answers true, false, or null for a step that is never unfinished (optional, or nothing to finish); locked() answers true while home's button for it is switched off; summary() is the one line home shows under it; draw(area) fills the screen. refresh() is awaited before every move, so done and summary answer about what was just saved. home_draw(area) draws whatever else home shows below the list.");
  ('ASKED FOR (human, 2026-11-22: "each section is a button/screen", "a next button that goes to the next unfinished screen (possibly backwards such as the first screen)", "you can go home and see everything?", "and jump to any screen?"). Home lists every step as a button, so any screen is one press away; Next goes to the first step in order whose done() is false, even one before the screen it is pressed on.');
  ("WHEN NOTHING IS UNFINISHED, Next on a step goes to the step after it in order, and after the last, home; Next on home goes to the step named fallback_key, since from home the first step in order is already finished.");
  ('2026-11-22: in order, not straight to fallback_key, because a step that can never be unfinished was skipped and so never seen on a first setup (human: "using next skipped rules and went to share"). Rejected: counting such a step unfinished until visited, which needs a memory of visits the page does not keep.');
  ('Not yet is a red ring rather than an empty box, which read as a shape rather than a mark (human: "just has a squareish shape - is that right?", "what about using some other emoji?").');
  ("ON A STILL-UNFINISHED SCREEN, Next pressed where the first unfinished step is that same screen says so instead of redrawing it, since the press would otherwise look like nothing happened.");
  function step_get(key) {
    for (let step of steps) {
      if (equal(step.key, key)) {
        return step;
      }
    }
    return null;
  }
  function unfinished_first() {
    for (let step of steps) {
      let left = step.done();
      if (equal(left, false)) {
        return step;
      }
    }
    return null;
  }
  async function draw(step) {
    html_clear(parent);
    if (equal(step, null)) {
      let card = app_shared_container(parent);
      for (let each_step of steps) {
        let done = each_step.done();
        let mark = equal(done, true) ? "✅ " : equal(done, false) ? "⭕ " : "";
        async function open() {
          await go(each_step);
        }
        let button = app_shared_button_uncolored(
          card,
          mark + each_step.title,
          open,
        );
        let disabled = each_step.locked();
        app_shared_button_disabled_set(button, disabled);
        let text = each_step.summary();
        let line = html_div_text(card, text);
        app_shared_text_deemphasized(line);
      }
      app_shared_button_green(parent, "Next", home_next);
      let div = html_div(parent);
      await home_draw(div);
      return;
    }
    app_shared_button_uncolored(parent, "🏠 Home", home_go);
    let card = app_shared_container(parent);
    app_shared_heading(card, step.title);
    await step.draw(card);
    app_shared_button_green(parent, "Next", screen_next);
    async function screen_next() {
      await refresh();
      let target = unfinished_first();
      if (equal(target, step)) {
        app_shared_toast("Save this screen first.");
        return;
      }
      if (equal(target, null)) {
        target = list_next_try(steps, step);
      }
      await draw(target);
    }
  }
  async function home_next() {
    await refresh();
    let target = unfinished_first() ?? step_get(fallback_key);
    await draw(target);
  }
  async function go(step) {
    await refresh();
    await draw(step);
  }
  async function home_go() {
    await go(null);
  }
  await draw(null);
}
