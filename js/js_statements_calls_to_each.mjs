import { fn_name } from "./fn_name.mjs";
import { js_statement_call_single_argument } from "./js_statement_call_single_argument.mjs";
import { js_calls_run_joins_is } from "./js_calls_run_joins_is.mjs";
import { js_calls_run_to_each_statement } from "./js_calls_run_to_each_statement.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_clear } from "./list_clear.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function js_statements_calls_to_each(statements, names) {
  "Puts a single walk in the place of every run of two or more calls standing one after another in this list of statements, where all of them name the same function from the given names and each is given one argument.";
  "The list is changed where it stands, because a statement list belongs to the block that holds it and handing a new one back would leave that block pointing at the old.";
  ("Only the names handed in are collapsed. A walk stops early when what it calls hands back true, so the run and the walk say the same thing only for a function that can never hand that back - and which functions those are is a question about the repo, settled by the caller in ");
  (fn_name("js_calls_to_each"), " rather than here.");
  let after = [];
  let run = [];
  function run_close() {
    let multiple_is = list_multiple_is(run);
    if (multiple_is) {
      let statement = js_calls_run_to_each_statement(run);
      list_add(after, statement);
    }
    if (not(multiple_is)) {
      let kept = list_map_property(run, "statement");
      list_add_multiple(after, kept);
    }
    list_clear(run);
  }
  function statement_sort(statement) {
    let call = js_statement_call_single_argument(statement);
    let plain_is = null_is(call);
    let named_is = false;
    if (not(plain_is)) {
      let name = property_get(call, "name");
      named_is = list_includes(names, name);
    }
    if (not(named_is)) {
      run_close();
      list_add(after, statement);
      return;
    }
    let joins_is = js_calls_run_joins_is(run, call);
    if (not(joins_is)) {
      run_close();
    }
    list_add(run, call);
  }
  each(statements, statement_sort);
  run_close();
  list_clear(statements);
  list_add_multiple(statements, after);
}
