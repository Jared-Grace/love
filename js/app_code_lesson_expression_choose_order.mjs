import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_nodes } from "./app_code_expression_nodes.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_lesson_expression_choose_order_title_name_id } from "./app_code_lesson_expression_choose_order_title_name_id.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order() {
  "choosing which operator to work out first, and then the next, with the quiz working each one out as it is chosen: 1 + 2 * 3, choose the times, see 1 + 6, choose the plus";
  "Every lesson before this asks for the answer to a whole line at once, so a learner who knows the rule and slips on the arithmetic, and one who does the arithmetic and does not know the rule, are marked the same. Here the two are separated: the arithmetic is done FOR the learner and the only thing asked is the order.";
  "One quiz kind, not three. Backwards asks what code produces this value, and here the value is not what is being asked for; unscramble asks the learner to build the line, and the line is given. Both would be questions about something the lesson is not teaching.";
  "Two operators a line, so two buttons - the smallest number that is still a choice. A wrong press dims that button and leaves the other live, so a wrong first press is followed by a forced right one; that is why the review now requeues twice rather than once. Three operators is the next step, and it belongs after this shape has been met, not inside it.";
  let name_id = app_code_lesson_expression_choose_order_title_name_id();
  let trees = {};
  let first_done = false;
  function tree_new() {
    "the first line a learner ever meets puts the times on the RIGHT, so choosing the leftmost operator is wrong on the very first press; after that the side is left to chance, because a strict left-right-left would be a pattern to ride instead of a line to read";
    let strong_right = true;
    if (first_done) {
      strong_right = boolean_random();
    }
    first_done = true;
    let tree = app_code_lesson_expression_choose_order_expression(strong_right);
    return tree;
  }
  function item_new() {
    "a question is the line as written and its answer is what the line comes to; the shape it was built from is kept beside them under the same writing, because the quiz works the line out a step at a time and a shape cannot be recovered from its own text";
    let tree = tree_new();
    let question = app_code_expression_code(tree);
    property_set(trees, question, tree);
    let answer = tree_value(tree);
    let item = {
      question,
      answer,
    };
    return item;
  }
  function tree_value(item) {
    "what the whole line comes to, worked out the same way the learner will work it out - one ready operator at a time - so the answer shown can never disagree with the steps";
    let node_is = app_code_expression_node_is(item);
    if (not(node_is)) {
      return item;
    }
    let ready = app_code_expression_nodes_ready(item);
    let first = ready[0];
    let stepped = app_code_expression_solved(item, first);
    let value = tree_value(stepped);
    return value;
  }
  function batch_get() {
    "one line a screen";
    let item = item_new();
    let list = [item];
    return list;
  }
  function on_answer(parent, info, qa, on_success, on_wrong) {
    "the choosing quiz: the line as it stands now, and one button for each operator still in it. Pressing a ready operator works that one out and redraws the shorter line; pressing one that is not ready dims it and leaves the other live.";
    "Drawn wholly inside the answers area rather than partly in the question area above it, because the line CHANGES as it is worked out and the question area is redrawn only when the whole question changes.";
    let answer_property = property_get(info, "answer_property");
    let question_property =
      app_code_lesson_quiz_qa_property_other(answer_property);
    let question = property_get(qa, question_property);
    let tree = property_get(trees, question);
    let line = html_div(parent);
    let buttons = html_div(parent);
    draw(tree);
    function draw(current) {
      html_clear(line);
      let code = app_code_expression_code(current);
      html_text_set_code_dark(line, code);
      html_clear(buttons);
      let nodes = app_code_expression_nodes(current);
      let ready = app_code_expression_nodes_ready(current);
      function each_node(node) {
        let symbol = property_get(node, "operator");
        let b = app_shared_button_wide(buttons, symbol, on_click);
        let background = app_shared_color_gray_light();
        html_style_background_color_set(b, background);
        html_style_margin_top(b, "0.2em");
        async function on_click() {
          let ready_is = list_includes(ready, node);
          if (not(ready_is)) {
            ("a press on an operator whose sides are not both worked out yet: dim just this one, leave the other live, and mark the attempt so the review asks again");
            on_wrong();
            app_code_lesson_quiz_wrong_set(b);
            html_style_set(b, "pointer-events", "none");
            html_style_opacity(b, "0.5");
            return;
          }
          app_shared_button_screen_green_style_assign(b);
          let stepped = app_code_expression_solved(current, node);
          let more = app_code_expression_node_is(stepped);
          if (more) {
            draw(stepped);
            return;
          }
          ("nothing is left but a value, so the line is finished and the learner is done with it");
          html_clear(buttons);
          let last = text_to(stepped);
          html_text_set_code_dark(line, last);
          await on_success();
        }
        return b;
      }
      each(nodes, each_node);
    }
  }
  function quizzes_get(question, answer) {
    "one kind, so one quiz";
    let info = {
      question_label: "The line to work out: ",
      on_question: html_text_set_code_dark,
      answer_label: "Choose the operator to work out first: ",
      on_answer,
      answer_property: "answer",
    };
    let qa = {
      question,
      answer,
    };
    function quiz(context, parent, container, refresh, next_get) {
      app_code_lesson_quiz(
        container,
        qa,
        parent,
        context,
        refresh,
        info,
        batch_get,
        quizzes,
        next_get,
      );
    }
    let quizzes = [quiz];
    let exercise = {
      info,
      question,
      answer,
      batch_get,
    };
    let exercises = [exercise];
    let quizzes_exercises = {
      quizzes,
      exercises,
    };
    return quizzes_exercises;
  }
  function above(root) {
    "what the new quiz is for, and what it does that the earlier ones did not";
    let times = js_operator_asterisk_symbol();
    let plus = js_operator_plus_symbol();
    let card = app_code_container_light_blue(root);
    let item2 = app_code_lesson_expression_choose_order_expression(true);
    let line = app_code_expression_code(item2);
    app_code_lesson_suppose_solve_line(card, "Suppose", line);
    html_div_cycle_code(card, [
      "This time we do not answer the whole line at once",
    ]);
    html_div_cycle_code(card, ["We choose which operator to solve first"]);
    html_div_cycle_code(card, [
      "The quiz solves that one for us, and shows what is left",
    ]);
    html_div_cycle_code(card, ["Then we choose the next one"]);
    let rule_card = app_code_container_light_blue(root);
    html_div_cycle_code(rule_card, [
      "An operator can be solved when both of its sides are numbers already",
    ]);
    html_div_cycle_code(rule_card, [
      "So in ",
      "1 + 2 * 3",
      " we solve the ",
      times,
      " before the ",
      plus,
    ]);
  }
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch_get,
    html_text_set_code_dark,
    "Value of code: ",
    quizzes_get,
    "Code: ",
    app_code_style_normal_text,
  );
  return lesson;
}
