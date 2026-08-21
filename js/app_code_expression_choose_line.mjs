import { app_code_expression_chips_rise } from "./app_code_expression_chips_rise.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_glow_look_here } from "./app_shared_glow_look_here.mjs";
import { app_shared_glow_clear } from "./app_shared_glow_clear.mjs";
import { app_code_expression_chips_settle } from "./app_code_expression_chips_settle.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_expression_refusals_clear } from "./app_code_expression_refusals_clear.mjs";
import { app_code_expression_replaced_settle } from "./app_code_expression_replaced_settle.mjs";
import { app_code_expression_chosen_set } from "./app_code_expression_chosen_set.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_operator_pressable } from "./app_code_expression_operator_pressable.mjs";
import { app_code_expression_paint } from "./app_code_expression_paint.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function app_code_expression_choose_line(
  parent,
  tree,
  on_change,
  on_wrong,
  on_chosen,
  on_finished,
) {
  arguments_assert(arguments, 6);
  ("a line of code whose operators are pressed one at a time until nothing is left but a value: every operator in it is pressable, pressing the one that may go next works it out and the line becomes the shorter one, and pressing one that may not is refused until the one that may go is pressed");
  ("A right press is answered in three beats rather than one. The operator and both its sides turn blue together, so what is about to go is seen whole; on_chosen is waited on, which is where the front page says what the blue comes to and holds for a press of replace; then the blue turns into its value where it stood and stays blue for as long as any other success does, before the line is drawn again plain. A line that changed the instant it was pressed asked the learner to find what had moved.");
  ("The one place this behaviour lives. The lesson's front page and its quiz are the same thing to press - what the front page adds is that it SAYS what to press at each step, which it does from on_change rather than by being a second copy of the pressing.");
  ("Every operator is pressable on both, including the front page. A page that only offers the right one teaches nothing about the wrong one, and a learner who has never been allowed to pick the leftmost has never found out that the leftmost is not the rule.");
  let line = html_div(parent);
  html_style_code_dark(line);
  draw(tree, null, null);
  function draw(current, solved, value) {
    html_clear(line);
    ("a line drawn after a step is drawn plain and takes its chips afterwards, in two beats; the first drawing of all takes them at once, because there is nothing behind it for anything to have moved from");
    ("Told apart by whether a step is behind this drawing, rather than by being asked. Whoever draws the line again after a press already has to say which operator went and what it came to, and a drawing with an operator behind it is exactly a drawing something could have moved from - so the two cannot fall out of step with each other.");
    let stepped_from = null_is(solved);
    let rising = not(stepped_from);
    let ready = app_code_expression_nodes_ready(current);
    ("one right press ends this drawing of the line, so every other operator in it stops answering the moment one of them is chosen - the working out is under way and a second press would start a second one on top of it");
    let chosen = false;
    ("whatever is waiting on the learner while the line has stopped answering, handed over by whoever put the question up - because a press made on the line after that is not a mistake about the line, it is a learner who has not found where the asking moved to");
    ("Held here rather than known here. The line has no idea what a value question looks like, and the page that drew one has no idea a press was made on the line, so the one of them that can see the press is told by the one of them that can see the question.");
    let waiting = null;
    function waiting_on(component) {
      "what to point at if a press is made on the line while this question is open";
      waiting = component;
    }
    ("every operator drawn on this line is kept, because the moment one of them is chosen the rest have to be SEEN to stop answering - a chip left standing on an operator that no longer answers is a control that swallows the press, and a learner pressing it is told nothing at all");
    let pressable = [];
    ("every operator refused on this drawing of the line is kept, because a refusal is answered again the moment the right one is pressed - and by then the line is holding the marks rather than the presses that made them");
    let refused = [];
    function on_operator(node, span, node_span) {
      if (not(rising)) {
        app_code_expression_operator_pressable(span);
      }
      list_add(pressable, span);
      async function on_click() {
        if (chosen) {
          ("the line has already been pressed and is waiting on an answer somewhere else, so this press is spent saying where: the question glows rather than the press being swallowed");
          ("Swallowed, the press teaches a learner that the screen is broken - which is what a control that answers nothing means everywhere else they have ever pressed one. Answered by the real question lighting up, the same press teaches them where to look, and it costs them one glance.");
          ("Nothing at all happens if nobody said what is waiting. A page that answers its own presses some other way is not made to invent a glow it never asked for.");
          let waiting_is = null_is(waiting);
          if (waiting_is) {
            return;
          }
          app_shared_glow_look_here(waiting);
          return;
        }
        let ready_is = list_includes(ready, node);
        if (not(ready_is)) {
          ("an operator still holding another one underneath it: refuse just this one and leave the rest of the line as it was, so the next press is a fresh choice rather than a forced one");
          app_code_lesson_quiz_wrong_set(span);
          html_style_set(span, "pointer-events", "none");
          list_add(refused, span);
          on_wrong(node);
          return;
        }
        chosen = true;
        ("the reds go before anything else happens, so what the learner watches from here is one block being worked out rather than a working out with a refusal still standing beside it");
        app_code_expression_refusals_clear(refused);
        ("the blue block is the first thing that happens, in the frame the press is made, so the press is answered before anything else on the line is asked to change");
        app_code_expression_chosen_set(node_span, span);
        ("and only then do the other chips go, so the line stops offering presses it will not answer while the value question is open");
        ("This is the whole of the fix for a learner pressing a second operator and being met with nothing. The press was already refused - it was the LOOK of the thing that lied, and a screen that looks pressable and is not reads as broken rather than as finished with.");
        ("They go in two beats rather than one: plain where they stand, a pause, and then the room they were holding closes up and the rest of the line slides along into it. Together it is two changes in one frame and the operators are read as having been moved rather than as having stopped answering.");
        await app_code_expression_chips_settle(line, pressable);
        let node_value = app_code_expression_solved(node, node);
        ("the blue block is handed over with what it comes to, so whatever answers the press may show the swap happening ON the line rather than only saying it beside the line");
        await on_chosen(node, node_value, node_span, waiting_on);
        ("the pointing is over the moment the question it pointed at is answered, and it is put out here rather than by whoever lit it, because it is lit from here and only ever while this one await is open");
        let waiting_was = null_is(waiting);
        if (not(waiting_was)) {
          app_shared_glow_clear(waiting);
        }
        ("and the settling that follows is the same on both, so nothing is asked of the answerer about what it showed - the front page flies the value down and the quiz simply writes it, and either way what is left to do is let the blue go and close the line up");
        await app_code_expression_replaced_settle(line, node_span, node_value);
        let stepped = app_code_expression_solved(current, node);
        ("the shorter line goes up plain and its chips are put on afterwards, so what the learner watches is the next operator opening its room and only then becoming something to press");
        ("Drawn chipped, the shorter line arrives with every operator already wider than the plain one that stood there a frame earlier - so the whole line jumps sideways in the frame it is drawn, and it jumps at the same moment the colour lands. The learner is shown a move they cannot follow and a change they did not ask about, together, at the one moment they are looking for what to press next.");
        let risen = draw(stepped, node, node_value);
        await app_code_expression_chips_rise(line, risen);
        let more = app_code_expression_node_is(stepped);
        if (more) {
          return;
        }
        await on_finished(stepped);
      }
      html_on_click(span, on_click);
    }
    app_code_expression_paint(line, current, on_operator);
    let step = {
      current,
      ready,
      solved,
      value,
    };
    on_change(step);
    ("the operators this drawing put up are handed back, because a drawing after a step leaves them plain and somebody has to put the chips on them");
    ("Handed back rather than kept in a name out here, because there is one of these lists per drawing and the drawing that made it is the only thing that knows it is finished with it.");
    return pressable;
  }
}
