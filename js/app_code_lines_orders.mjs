import { js_code_loops_guarded } from "./js_code_loops_guarded.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lines_held_count } from "./app_code_lines_held_count.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { catch_null } from "./catch_null.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_lines_orders(code) {
  "Every order of a program's lines that logs exactly what the program itself logs, each as a list of its lines.";
  "WHAT DECIDES AN ORDER IS WHAT IT DOES, never how close it sits to the order it was written in. Two lines that do not touch each other may trade places and nothing changes, so both orders are right; a name read before it is made stops the program, so no order doing that is right. The rule is the lesson's own fact, asked of the program by running it rather than written down a second time here.";
  "AN ORDER THAT STOPS WITH AN ERROR COUNTS AS LOGGING NOTHING it can match, so it is simply not kept.";
  "Every order is tried, and a program of n lines has n factorial of them. The programs asked about are a handful of lines long once the held lines are set aside, and the order has to be judged by running it in any case, so there is nothing to be saved by being cleverer.";
  let lines = text_split_newline(code);
  let logged = eval_console_log_to_list(code);
  ("THE FIRST LINES MAY BE HELD IN PLACE, as many as ",
    fn_name("app_code_lines_held_count"),
    " says, and only the rest are reordered: every order is tried, so a long program was too many orders for a phone - measured 2026-10-04, a twelve-line program left the quiz blank.");
  let held_count = app_code_lines_held_count(lines);
  let held = list_take(lines, held_count);
  let rest = list_skip(lines, held_count);
  let rest_orders = list_permutations(rest);
  function held_prepend(rest_order) {
    let order = list_concat(held, rest_order);
    return order;
  }
  let orders = list_map(rest_orders, held_prepend);
  function order_logs_same(order) {
    let joined = list_join_newline(order);
    function order_logs() {
      let guarded = js_code_loops_guarded(joined);
      let logs = eval_console_log_to_list(guarded);
      return logs;
    }
    let got = catch_null(order_logs);
    let same = json_equal(got, logged);
    return same;
  }
  let kept = list_filter(orders, order_logs_same);
  return kept;
}
