import { app_shared_encouragement_exclamation } from "./app_shared_encouragement_exclamation.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { app_code_expression_choose_line } from "./app_code_expression_choose_line.mjs";
import { noop } from "./noop.mjs";
import { list_first } from "./list_first.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_nodes_ready } from "./app_code_expression_nodes_ready.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_lesson_expression_choose_order_title_name_id } from "./app_code_lesson_expression_choose_order_title_name_id.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order() {
  "choosing which operator to work out first, and then the next, with the quiz working each one out as it is chosen: 1 + 2 * 3, choose the times, see 1 + 6, choose the plus";
  "Every lesson before this asks for the answer to a whole line at once, so a learner who knows the rule and slips on the arithmetic, and one who does the arithmetic and does not know the rule, are marked the same. Here the two are separated: the arithmetic is done FOR the learner and the only thing asked is the order.";
  "One quiz kind, not three. Backwards asks what code produces this value, and here the value is not what is being asked for; unscramble asks the learner to build the line, and the line is given. Both would be questions about something the lesson is not teaching.";
  "Two operators a line - the smallest number that is still a choice. A wrong press refuses that operator and leaves the other pressable, so a wrong first press is followed by a forced right one; that is why the review now requeues twice rather than once. Three operators is the next step, and it belongs after this shape has been met, not inside it.";
  "The front page and the quiz press the same line, built by the one unit both of them call. What the front page adds is words: which operator to press, and what the press just did. Two copies of the pressing, one of them narrated, would drift the moment either was touched.";
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
  function tree_of(qa, info) {
    "the shape behind a question, found again from the writing it was printed as - the quiz hands its question over as text, and the step-at-a-time working needs the shape it came from";
    let answer_property = property_get(info, "answer_property");
    let question_property =
      app_code_lesson_quiz_qa_property_other(answer_property);
    let question = property_get(qa, question_property);
    let tree = property_get(trees, question);
    return tree;
  }
  function on_answer(parent, info, qa, on_success, on_wrong) {
    "the quiz: the same line to press as the front page, with nothing said about which operator to press - that is the whole of what is being asked";
    "Drawn wholly inside the answers area rather than partly in the question area above it, because the line CHANGES as it is worked out and the question area is redrawn only when the whole question changes.";
    let tree = tree_of(qa, info);
    app_code_expression_choose_line(parent, tree, noop, on_wrong, on_success);
  }
  function on_question_example(parent, question, card) {
    "the lesson's front page: the same line to press as the quiz, and above it a walkthrough saying what to press at each step and what the press just did";
    "Every operator is pressable here too, so a learner may take the leftmost and be told why it cannot go yet. Being told the answer and being stopped from getting it wrong are not the same lesson, and only the first one is this page's job.";
    "Pressing changes nothing that is kept, so leaving the page and coming back starts the line over, and a learner who wants the walkthrough again just takes it again.";
    "The walkthrough stands at the TOP of the card, above the Code label, because it is an instruction and an instruction is read before the thing it is about; underneath the line it was a caption on something already pressed.";
    let tree = property_get(trees, question);
    let line_holder = html_div(parent);
    let note = html_div_first(card);
    function say_choose(ready, lead) {
      "name the one operator that may go next, so the walkthrough tells rather than asks";
      let first = list_first(ready);
      let symbol = property_get(first, "operator");
      html_div_cycle_code(note, [lead, symbol]);
    }
    function on_change(step) {
      "after every press, say what that press did and what to press next";
      html_clear(note);
      let solved = property_get(step, "solved");
      let ready = property_get(step, "ready");
      if (null_is(solved)) {
        say_choose(ready, "First, choose the ");
        return;
      }
      let value = property_get(step, "value");
      let solved_code = app_code_expression_code(solved);
      let value_text = text_to(value);
      ("praised in the same words the quiz praises a finished question with, taken from the one list both of them read");
      let praise = app_shared_encouragement_exclamation();
      let lead = text_combine(praise, "the ");
      html_div_cycle_code(note, [lead, solved_code, " becomes ", value_text]);
      let current = property_get(step, "current");
      let more = app_code_expression_node_is(current);
      if (not(more)) {
        ("the line is finished, so the walkthrough ends with the very thing the quiz shows when a question is finished");
        app_shared_success_message(note);
        html_div_cycle_code(note, ["Now it is your turn to choose"]);
        return;
      }
      let current_code = app_code_expression_code(current);
      html_div_cycle_code(note, ["So now we have ", current_code]);
      say_choose(ready, "Now, choose the ");
    }
    function on_wrong_example(node) {
      "a press on an operator that cannot go yet: say why, and leave the rest of the line to be pressed";
      "Said as an order of turns rather than as a shape - an operator sitting on one SIDE of another is a thing a learner can only see by picturing the line as a tree, and no lesson has drawn one. Which operator has to go first is a question the line itself answers.";
      let symbol = property_get(node, "operator");
      html_div_cycle_code(note, [
        "Not yet - the ",
        symbol,
        " cannot be chosen because another operator must be chosen first",
      ]);
    }
    app_code_expression_choose_line(
      line_holder,
      tree,
      on_change,
      on_wrong_example,
      noop,
    );
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
    on_question_example,
    null,
    quizzes_get,
    "Code: ",
    noop,
  );
  return lesson;
}
