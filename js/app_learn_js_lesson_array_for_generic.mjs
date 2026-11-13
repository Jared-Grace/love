import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_remainder_2_equal } from "./js_code_remainder_2_equal.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_if_else_lines } from "./js_code_if_else_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { modulo } from "./modulo.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_find } from "./list_find.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_generic(options) {
  arguments_assert(arguments, 1);
  ("every item of an array written out by a for loop: let a = ['love', 'joy', 'peace']; for (let i = 0; i < 3; i++) { console.log(a[i]); } writes out love then joy then peace. What differs between lessons is handed in here.");
  ("bound is how the end of the loop is written, as 3 or as a.length, and bound_fewer the same end one short, as 2 or a.length - 1. above is handed the root, the context, the example drawer, the drawer of the same program written out by hand, and the walk drawer.");
  ("The wrong answers are what the loop writes out when it starts at 1 instead of 0, when it stops one short, and both - the two mistakes a loop over an array is known for. Each is worked out by running that program, not reasoned out. Reading backwards, the wrong programs are those same loops.");
  ("A program's start and end are found by trying every pair against it, not by reading its digits, so nothing here depends on how the lines are spaced.");
  ("Drafted by Claude 2026-11-11, for the lesson the human chose after a[i] stepped up twice by hand.");
  ("2026-11-11: the example, by-hand and walk drawers are each handed the root and the items to draw, so a lesson may draw more than one array");
  let name_id = property_get(options, "name_id");
  let above_inner = property_get(options, "above");
  let item_counts = property_get(options, "item_counts");
  ("item_counts is the sizes a question's array may have: only 3 while the loop is written to stop at 3, and several once it stops at a.length, which is what a.length is for");
  let bound = property_get(options, "bound");
  let bound_fewer = property_get(options, "bound_fewer");
  ("2026-11-12: a lesson may name one item every question's array holds, at a place drawn at random, so a loop looking for that item always has one to find");
  let item_always = property_get_or(options, "item_always", null);
  ("2026-11-13: or one item that every other question's array holds and the rest do not, so a loop asking whether it is there is answered true and false alike");
  let item_sometimes = property_get_or(options, "item_sometimes", null);
  ("2026-11-13, next: or one item an array may hold several times, question k holding it the k-th of repeat_counts times, so a loop counting it has different counts to give");
  let item_repeated = property_get_or(options, "item_repeated", null);
  let repeat_counts = property_get_or(options, "repeat_counts", []);
  ("2026-11-13: a lesson may hand in numbers to fill the arrays from in place of the fruits of the Spirit, so a loop can add its items up");
  let numbers = property_get_or(options, "numbers", null);
  let name = "a";
  let index_name = "i";
  let less = js_operator_less_than_symbol();
  let read = js_code_index(name, index_name);
  let logged = js_code_console_log_statement(read);
  let starts_fewer = property_get(options, "ways");
  ("2026-11-11: ways is the loops of this lesson, each a start and whether it stops one short, the right loop first and the wrong loops after it - the mistakes worth offering differ by lesson: starting at 1 or stopping short beside the loop over every item, or a start one off beside a loop that starts at 2");
  function way_of(start_fewer) {
    let start2 = property_get(start_fewer, "start");
    let fewer = property_get(start_fewer, "fewer");
    ("2026-11-11: a way may also say how much i goes up by each time; a way that does not say goes up by 1, as i++");
    let step = property_get_or(start_fewer, "step", 1);
    ("2026-11-12: a way may also start counted back from the end, start_back 1 being a.length - 1, ask with another operator than <, and stop at a number it names, as end 0 - so a loop can run from the last item down to the first");
    let start_back = property_get_or(start_fewer, "start_back", null);
    let op = property_get_or(start_fewer, "op", less);
    let end_number = property_get_or(start_fewer, "end", null);
    let remainder = property_get_or(start_fewer, "remainder", null);
    ('2026-11-12: a way may instead name the whole question its if asks, as a[i] === "joy", and what it writes out, as i rather than the item a[i] - so a loop can look for an item and say where it is');
    let condition_code = property_get_or(start_fewer, "condition", null);
    let logs = property_get_or(start_fewer, "logs", read);
    ('2026-11-12: a way may also keep a true or false value named on across runs: flag_start is what on starts as, and the item is written out only inside if (on). flip says where on = !on stands - "after" the if, "inside" it, or "none" - so a loop can write out every other item by flipping, and the mistakes of flipping in the wrong place or not at all can be offered');
    let flag_start = property_get_or(start_fewer, "flag_start", null);
    let flip = property_get_or(start_fewer, "flip", "after");
    ('2026-11-13: a way may instead keep a true or false value named found: found_start is what it starts as, the if sets it to true, found_else also sets it back to false in an else, and found_log says where console.log(found) stands - "after" the loop or "inside" it - so a loop can say whether an item is there at all, and the mistakes of resetting it, starting it true, or writing it out every run can be offered');
    ("2026-11-13, next: found generalized to any value kept across runs - keep_name is its name, keep_start what it starts as, keep_set the line the if runs, as found = true; or count++;, keep_else the line an else runs or null for no else, and keep_log where console.log of it stands - so a loop can count as well as say whether");
    let keep_name = property_get_or(start_fewer, "keep_name", null);
    let keep_start = property_get_or(start_fewer, "keep_start", null);
    let keep_set = property_get_or(start_fewer, "keep_set", null);
    let keep_else = property_get_or(start_fewer, "keep_else", null);
    let keep_log = property_get_or(start_fewer, "keep_log", "after");
    let end2 = bound;
    if (fewer) {
      end2 = bound_fewer;
    }
    if (not_equal(end_number, null)) {
      end2 = json_to(end_number);
    }
    let r2 = {
      start: start2,
      start_back,
      end: end2,
      end_number,
      op,
      fewer,
      step,
      remainder,
      condition: condition_code,
      logs,
      flag_start,
      flip,
      keep_name,
      keep_start,
      keep_set,
      keep_else,
      keep_log,
    };
    return r2;
  }
  function start_code(way7) {
    "where a way starts, as code: its number, or a.length less the count back";
    let back = property_get(way7, "start_back");
    if (equal(back, null)) {
      let start3 = property_get(way7, "start");
      let r4 = json_to(start3);
      return r4;
    }
    let back_json = json_to(back);
    let r5 = js_code_binary_spaced_nb(bound, "-", back_json);
    return r5;
  }
  function start_number(way8, size3) {
    "where a way starts over an array of size3 items";
    let back2 = property_get(way8, "start_back");
    if (equal(back2, null)) {
      let r6 = property_get(way8, "start");
      return r6;
    }
    let r7 = subtract(size3, back2);
    return r7;
  }
  function holds(left3, op2, right3) {
    "whether left3 op2 right3 is true, for the operators a loop here may ask with";
    if (equal(op2, less)) {
      let r8 = less_than(left3, right3);
      return r8;
    }
    if (equal(op2, ">")) {
      let r9 = greater_than(left3, right3);
      return r9;
    }
    if (equal(op2, ">=")) {
      let r10 = greater_than_equal(left3, right3);
      return r10;
    }
    if (equal(op2, "<=")) {
      let r11 = less_than_equal(left3, right3);
      return r11;
    }
    throw new Error(
      text_combine_multiple([
        fn_name("app_learn_js_lesson_array_for_generic"),
        ": no operator ",
      ]) + op2,
    );
  }
  let ways = list_map(starts_fewer, way_of);
  let right = list_first(ways);
  let skipped = 0;
  if (property_get(right, "fewer")) {
    skipped = 1;
  }
  function head_line(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let line = js_code_let_statement(name, array);
    return line;
  }
  function step_code(step2) {
    "i++ when i goes up by 1, else i += and the step";
    if (equal(step2, 1)) {
      let r3 = index_name + "++";
      return r3;
    }
    if (equal(step2, -1)) {
      let r12 = index_name + "--";
      return r12;
    }
    if (less_than(step2, 0)) {
      let object2 = subtract(0, step2);
      let down = json_to(object2);
      let r13 = js_code_binary_spaced_nb(index_name, "-=", down);
      return r13;
    }
    let right2 = json_to(step2);
    let code9 = js_code_binary_spaced_nb(index_name, "+=", right2);
    return code9;
  }
  function loop_lines(way) {
    let end = property_get(way, "end");
    let json = start_code(way);
    let started = js_code_let_statement(index_name, json);
    let op3 = property_get(way, "op");
    let condition = js_code_binary_spaced_nb(index_name, op3, end);
    let value2 = property_get(way, "step");
    let stepped = step_code(value2) + ";";
    ("2026-11-12: a way may name a remainder, and then the item is written out only inside if (i % 2 === remainder) - every index visited, only the even or the odd ones let through. Without one the loop writes every index it visits, as every lesson before that one does");
    let logs2 = property_get(way, "logs");
    let logged_way = js_code_console_log_statement(logs2);
    let inside = [logged_way];
    let remainder2 = property_get(way, "remainder");
    if (not_equal(remainder2, null)) {
      let asked = js_code_remainder_2_equal(index_name, remainder2);
      inside = js_code_if_lines(asked, logged_way);
    }
    let condition3 = property_get(way, "condition");
    if (not_equal(condition3, null)) {
      inside = js_code_if_lines(condition3, logged_way);
    }
    let found_name = property_get(way, "keep_name");
    if (not_equal(found_name, null)) {
      let found_start = property_get(way, "keep_start");
      let found_json = json_to(found_start);
      let found_line = js_code_let_statement(found_name, found_json);
      let set_true = property_get(way, "keep_set");
      ("2026-11-13: a way with no condition runs keep_set every run, with no if around it, as total += a[i];");
      let found_if = [set_true];
      if (not_equal(condition3, null)) {
        found_if = js_code_if_lines(condition3, set_true);
      }
      let set_false = property_get(way, "keep_else");
      if (not_equal(set_false, null)) {
        found_if = js_code_if_else_lines(condition3, set_true, set_false);
      }
      let found_logged = js_code_console_log_statement(found_name);
      let found_body = list_concat(found_if, [stepped]);
      let found_after = [found_logged];
      let left4 = property_get(way, "keep_log");
      if (equal(left4, "inside")) {
        found_body = list_concat(found_if, [found_logged, stepped]);
        found_after = [];
      }
      let lines7 = js_code_for_start_condition_update_lines(
        started,
        condition,
        found_body,
      );
      let found_lines = list_concat([found_line], lines7);
      let r15 = list_concat(found_lines, found_after);
      return r15;
    }
    let flag_start2 = property_get(way, "flag_start");
    if (equal(flag_start2, null)) {
      let statements = list_concat(inside, [stepped]);
      let lines = js_code_for_start_condition_update_lines(
        started,
        condition,
        statements,
      );
      return lines;
    }
    let flag_name = "on";
    let flag_json = json_to(flag_start2);
    let flag_line = js_code_let_statement(flag_name, flag_json);
    let flipped = flag_name + " = !" + flag_name + ";";
    let flip2 = property_get(way, "flip");
    let inside_flag = js_code_if_lines(flag_name, logged_way);
    let after_if = [flipped, stepped];
    if (equal(flip2, "inside")) {
      inside_flag = js_code_if_lines_multiple(flag_name, [logged_way, flipped]);
      after_if = [stepped];
    }
    if (equal(flip2, "none")) {
      after_if = [stepped];
    }
    let statements2 = list_concat(inside_flag, after_if);
    let lines6 = js_code_for_start_condition_update_lines(
      started,
      condition,
      statements2,
    );
    let r14 = list_concat([flag_line], lines6);
    return r14;
  }
  function program_head(head, way2) {
    let lines2 = loop_lines(way2);
    let all = list_concat([head], lines2);
    let code = list_join_newline(all);
    return code;
  }
  function program_of(items2, way3) {
    let head2 = head_line(items2);
    let code2 = program_head(head2, way3);
    return code2;
  }
  function batch_get() {
    "four programs, each a fresh array of fruits of the Spirit, each looped over by the right loop";
    "2026-11-11: each size of item_counts is asked once before any size is drawn at random, and the four are then shuffled, so a set always holds the smallest array - the one a loop may not run for at all - beside larger ones, and is never all one kind";
    let fruits = fruits_of_the_spirit();
    if (not_equal(numbers, null)) {
      fruits = numbers;
    }
    let codes2 = [];
    for (let k = 0; less_than(k, 4); k++) {
      let item_count = list_random_item(item_counts);
      let b = list_size(item_counts);
      if (less_than(k, b)) {
        item_count = list_get(item_counts, k);
      }
      let items3 = list_shuffle_take(fruits, item_count);
      if (not_equal(item_always, null)) {
        let others2 = list_without(fruits, item_always);
        let count = subtract(item_count, 1);
        items3 = list_shuffle_take(others2, count);
        items3.push(item_always);
        list_shuffle(items3);
      }
      if (not_equal(item_sometimes, null)) {
        let others3 = list_without(fruits, item_sometimes);
        items3 = list_shuffle_take(others3, item_count);
        let left5 = modulo(k, 2);
        if (equal(left5, 0)) {
          let count2 = subtract(item_count, 1);
          items3 = list_shuffle_take(others3, count2);
          items3.push(item_sometimes);
          list_shuffle(items3);
          ("never last: a loop that sets its answer back in an else is right exactly when the item is last, so the mistake would hide and its wrong answer, false, would never be offered");
          let left6 = list_last(items3);
          if (equal(left6, item_sometimes)) {
            items3.pop();
            items3.unshift(item_sometimes);
          }
        }
      }
      if (not_equal(item_repeated, null)) {
        let others4 = list_without(fruits, item_repeated);
        let right4 = list_size(repeat_counts);
        let index2 = modulo(k, right4);
        let repeats = list_get(repeat_counts, index2);
        let count3 = subtract(item_count, repeats);
        items3 = list_shuffle_take(others4, count3);
        for (let m = 0; less_than(m, repeats); m++) {
          items3.push(item_repeated);
        }
        list_shuffle(items3);
      }
      let code3 = program_of(items3, right);
      codes2.push(code3);
    }
    list_shuffle(codes2);
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function programs_wrong(code4) {
    "the same array looped over each wrong way";
    let lines3 = text_split_newline(code4);
    let head3 = list_first(lines3);
    function is_it(way4) {
      let left = program_head(head3, way4);
      let same = equal(left, code4);
      return same;
    }
    let way5 = list_find(ways, is_it);
    let others = list_without(ways, way5);
    function program_other(way6) {
      let code5 = program_head(head3, way6);
      return code5;
    }
    let programs = list_map(others, program_other);
    return programs;
  }
  function decoys(question, answer) {
    "what each wrong loop writes out; each once, never the answer";
    let programs2 = programs_wrong(question);
    let outs = list_map(programs2, eval_console_log_lines);
    let found = list_without(outs, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array looped over each wrong way";
    "2026-11-11: a wrong loop that writes out the same as the right one is left out, since it would be a second right answer - starting at 2 or at 3, a loop over 2 items writes out nothing either way";
    let programs3 = programs_wrong(answer);
    let out_right = eval_console_log_lines(answer);
    function other_out(program) {
      let out_wrong = eval_console_log_lines(program);
      let differs = not_equal(out_wrong, out_right);
      return differs;
    }
    let kept = list_filter(programs3, other_out);
    return kept;
  }
  function example(root, example_items) {
    "the example program and what it writes out";
    let code6 = program_of(example_items, right);
    let lines4 = text_split_newline(code6);
    let out = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function example_by_hand(root, example_items) {
    "the same items written out without a loop: let i = 0; then a[i] read, i++, a[i] read again, until the last item";
    let head4 = head_line(example_items);
    let started2 = js_code_let_statement(index_name, "0");
    let lines5 = [head4, started2, logged];
    let size = list_size(example_items);
    for (let k = 1; less_than(k, size); k++) {
      lines5.push(index_name + "++;");
      lines5.push(logged);
    }
    let code7 = list_join_newline(lines5);
    let out2 = eval_console_log_lines(code7);
    app_learn_js_code_lines_writes_out(root, lines5, out2);
  }
  function walk(root, example_items) {
    "the loop run by run: what it asks, the item it reads, the step, until what it asks is false";
    let size2 = list_size(example_items);
    let start_index = start_number(right, size2);
    let end_code = property_get(right, "end");
    let end_count = subtract(size2, skipped);
    let end_named = property_get(right, "end_number");
    if (not_equal(end_named, null)) {
      end_count = end_named;
    }
    let op4 = property_get(right, "op");
    let count_json = json_to(end_count);
    let size_json = json_to(size2);
    if (not_equal(bound, size_json)) {
      ("the end written as a.length is said once as the number it holds, so each run below compares two numbers, as the step-by-step guide solves it");
      app_learn_js_div_cycle_code(root, ["", bound, " is ", size_json]);
    }
    if (equal(skipped, 1)) {
      ("2026-11-11: the end one short is then worked out from that number, a.length - 1 as 5 - 1, which is 4, in two steps as the step-by-step guide takes them, never at once");
      let fewer = js_code_binary_spaced_nb(size_json, "-", "1");
      app_learn_js_div_cycle_code(root, [
        "",
        end_code,
        " is ",
        fewer,
        ", which is ",
        count_json,
      ]);
    }
    let back3 = property_get(right, "start_back");
    if (not_equal(back3, null)) {
      ("2026-11-12: a start counted back from the end is worked out from that number the same way, a.length - 1 as 5 - 1, which is 4");
      let started3 = start_code(right);
      let back_json2 = json_to(back3);
      let worked = js_code_binary_spaced_nb(size_json, "-", back_json2);
      let start_json = json_to(start_index);
      app_learn_js_div_cycle_code(root, [
        "",
        started3,
        " is ",
        worked,
        ", which is ",
        start_json,
      ]);
    }
    let step3 = property_get(right, "step");
    let stepped2 = step_code(step3);
    let step_json = json_to(step3);
    let step_word = " adds ";
    let step_toward = " to ";
    if (less_than(step3, 0)) {
      let object3 = subtract(0, step3);
      step_json = json_to(object3);
      step_word = " takes away ";
      step_toward = " from ";
    }
    for (
      let index = start_index;
      holds(index, op4, end_count);
      index = index + step3
    ) {
      let index_json = json_to(index);
      let condition2 = js_code_binary_spaced_nb(index_json, op4, count_json);
      let written = js_code_index(name, index_json);
      let object = list_get(example_items, index);
      let item = json_to(object);
      app_learn_js_div_cycle_code(root, [
        "",
        condition2,
        " is ",
        "true",
        ", so ",
        read,
        " is ",
        written,
        ", which is ",
        item,
      ]);
      let after = json_to(index + step3);
      app_learn_js_div_cycle_code(root, [
        "",
        stepped2,
        step_word,
        step_json,
        step_toward,
        index_name,
        ", so ",
        index_name,
        " is ",
        after,
      ]);
    }
    ("2026-11-11: i ends at the first value the steps reach that is not below the end - the end itself when it goes up by 1, or its start when it starts there or past it and the loop never runs");
    let last_index = start_index;
    while (holds(last_index, op4, end_count)) {
      last_index = last_index + step3;
    }
    let last_json = json_to(last_index);
    let last = js_code_binary_spaced_nb(last_json, op4, count_json);
    let r = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
    let code8 = program_of(example_items, right);
    let value = eval_console_log_lines(code8);
    if (equal(value, "")) {
      ("2026-11-11: a loop that never ran writes out nothing, said in words, since there is no item to name");
      app_learn_js_div_cycle_code(root, ["So nothing is written out"]);
      return;
    }
    let outs2 = text_split_newline(value);
    let said = ["So "];
    for (let out3 of outs2) {
      if (greater_than(said.length, 1)) {
        said.push(" then ");
      }
      said.push(out3);
    }
    let verb = " are written out";
    let left2 = list_size(outs2);
    if (equal(left2, 1)) {
      verb = " is written out";
    }
    said.push(verb);
    app_learn_js_div_cycle_output(root, said);
  }
  function above(root, context) {
    above_inner(root, context, example, example_by_hand, walk);
  }
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
