import { arguments_assert } from "./arguments_assert.mjs";
import { page_capture_settle_ms } from "./page_capture_settle_ms.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { playwright_happy_onward_selector } from "./playwright_happy_onward_selector.mjs";
import { playwright_quiz_correct_count } from "./playwright_quiz_correct_count.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { playwright_happy_answer_wait } from "./playwright_happy_answer_wait.mjs";
import { playwright_happy_step } from "./playwright_happy_step.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { playwright_happy_answered_wait } from "./playwright_happy_answered_wait.mjs";
import { equal } from "./equal.mjs";
import { list_take_last } from "./list_take_last.mjs";
export async function playwright_happy_walk(page, steps_max) {
  "$plain steps_max";
  "walk an app the whole way through as somebody who gets everything right: answer what each screen asks, twice over, and only then press on, until the app says there is nowhere further to go";
  "This is the one test that answers the question a person actually asks about a course - can you get to the end of it. Every other check reads a screen and says whether it looks right; none of them presses anything, so a right answer that cannot be clicked, a next button that never appears, or a screen that throws halfway through is invisible to all of them and obvious to this.";
  "It ends three ways and they mean different things. Reaching the end is a pass. Running out of things to press is thrown by the step below, with the address of the screen it happened on. Reaching the cap means the app went round in a circle - the way on was pressed and led back to something offering the same way on - which is a bug of its own and would otherwise run forever.";
  "ANSWERING AND LEAVING ARE TWO DIFFERENT PRESSES and the whole of what this does is keep them apart. A quiz screen goes on asking for as long as somebody wants to practise: every right answer is followed by a fresh question of the same kind, and the way out sits below them all the while. So there is no moment at which the screen says it is finished - the walker decides that, by counting the answers it has got right here and pressing on once it has enough of them.";
  "Counting them is the app's to say and not the walker's to guess. A press that is half of an answer looks exactly like a press that was all of one, and between the two halves the question goes unmarked for as long as the line takes to tidy itself up - which is when a walker on a timer presses the way out and leaves the question standing. So it waits on the app's own count of right answers instead, and a wait that ends because the count moved is the only one that means the answer was taken.";
  "Every step is kept, not just the count, because the interesting question after a red walk is what the last few screens were. The cap failure carries the tail rather than the whole trail: a walk is thousands of steps long and the beginning of it says nothing about where it got stuck.";
  arguments_assert(arguments, 2);
  let trail = [];
  let settle = page_capture_settle_ms();
  ("how long the walk will wait for a screen to say something happened before deciding nothing is going to. It is generous rather than tight because it is only ever paid in full on a screen that has nothing more to ask - everywhere else it ends the moment the app answers, which is a fraction of it.");
  let wait_ms = 2000;
  ("how many right answers are wanted from each screen before the walk moves on. One proves the question can be answered; the second proves the screen can ask again, which is what a learner practising does and is a whole path nothing else walks.");
  let instances_max = 2;
  ("a screen answered this many times without the count ever moving is a screen whose app is not saying that anything was taken - so the walk would answer it forever. Named here rather than left to the step allowance because the failure it reports is a different one and names a different repair.");
  let answers_max = 60;
  let steps = 0;
  ("a control that goes from the page between being found and being pressed is an ordinary miss, and a run of them in a row is not. One means a screen moved while it was being read; a run of them means the screen is offering something marked that cannot be pressed at all, and every one of them costs the press its whole timeout - so left alone the walk spends hours saying nothing rather than naming the screen.");
  let missed = 0;
  let missed_max = 3;
  let answer_selector = playwright_happy_answer_selector();
  let onward_selector = playwright_happy_onward_selector();
  let instances = 0;
  let answers = 0;
  let count = await playwright_quiz_correct_count(page);
  while (less_than(steps, steps_max)) {
    let b2 = less_than(instances, instances_max);
    let enough = not(b2);
    let asked = less_than(0, instances);
    if (asked) {
      if (not(enough)) {
        ("a screen that has just been answered right is about to ask again, and it asks once the success has finished being shown - so the next question is waited for rather than looked for, and a screen that turns out to have no more to ask simply runs the wait out and is walked on from");
        await playwright_happy_answer_wait(page, wait_ms);
      }
    }
    let leaving = enough;
    let selector = answer_selector;
    if (leaving) {
      selector = onward_selector;
    }
    let url_before = page.url();
    let step = await playwright_happy_step(page, selector);
    let bare = property_get(step, "none");
    if (bare) {
      ("the two kinds together are everything the screen has marked, so a screen offering none of the one wanted is offering the other - which makes this the ordinary way a walk crosses a screen with nothing to answer, and the ordinary way it leaves one that has stopped asking");
      leaving = not(leaving);
      selector = answer_selector;
      if (leaving) {
        selector = onward_selector;
      }
      step = await playwright_happy_step(page, selector);
    }
    ("every step is said out loud as it is taken, because a walk of a whole course runs for a quarter of an hour and says nothing at all until it is over - so somebody watching cannot tell a walk that is working from one going round in a circle, and either way finds out only at the end");
    log(playwright_happy_walk.name, step);
    list_add(trail, step);
    let end = property_get(step, "end");
    if (end) {
      let walked = {
        steps: list_size(trail),
        trail,
      };
      return walked;
    }
    let pressed = property_get(step, "pressed");
    missed = missed + 1;
    if (pressed) {
      missed = 0;
    }
    let missing = less_than(missed_max, missed);
    let url = property_get(step, "url");
    let b = not(missing);
    ("the words on the control and the reason the press missed go into the failure, because the address alone names the screen and not which of the things on it is the one that cannot be pressed, nor which of the several ways a press can miss this one is");
    let text = property_get(step, "text");
    let why = property_get(step, "why");
    assert_json(b, {
      url,
      text,
      why,
      missed,
      hint: "this screen keeps offering a control marked as the way on that cannot be pressed - it is there to be found and gone by the time it is pressed, so either it is being drawn again and again, or it is marked and then taken away without the mark going with it",
    });
    await page.waitForTimeout(settle);
    if (leaving) {
      instances = 0;
      answers = 0;
    }
    if (not(leaving)) {
      answers = answers + 1;
      let after = await playwright_happy_answered_wait(
        page,
        count,
        url_before,
        wait_ms,
      );
      let taken = less_than(count, after);
      if (taken) {
        instances = instances + 1;
      }
      count = after;
      ("a screen answered over and over with the count never moving is not a slow screen, it is an app that never says an answer was taken - and left to the step allowance it would be reported a whole course later as going round in a circle, which sends somebody looking at the wrong thing");
      let over = less_than(answers_max, answers);
      let b3 = not(over);
      assert_json(b3, {
        url,
        text,
        count,
        answers,
        hint: "this screen has been answered again and again and the page never said a single answer was taken - so either the app is not counting its right answers where a walk can read the count, or the control being pressed is marked as an answer and is not one",
      });
    }
    ("leaving a screen and being carried off one come to the same thing, so the count of what has been answered here starts again either way - what makes it here is the address, which is the app's own word for which screen this is");
    let url_after = page.url();
    let same = equal(url_after, url_before);
    if (not(same)) {
      instances = 0;
      answers = 0;
    }
    steps = steps + 1;
  }
  let tail_size = 12;
  let tail = list_take_last(trail, tail_size);
  assert_json(false, {
    steps_max,
    tail,
    hint: "the walk took its whole allowance of steps without the app ever saying it had reached the end - either the course is longer than the allowance, or a screen leads back to itself and the walk is going round in a circle",
  });
}
