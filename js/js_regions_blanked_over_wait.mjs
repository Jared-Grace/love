import { js_statement_emptied_region_here_or_null } from "./js_statement_emptied_region_here_or_null.mjs";
import { js_statement_name_read_here_is } from "./js_statement_name_read_here_is.mjs";
import { js_statement_await_here_is } from "./js_statement_await_here_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
export function js_regions_blanked_over_wait(ast) {
  arguments_assert(arguments, 1);
  ("Every place in one file where a part of the screen is emptied, then waited on, and only then written into again - so it stands blank for the whole of the wait.");
  ("EMPTYING SOMETHING AND THEN FETCHING IS NOT A SMALL UNTIDINESS, IT IS A DEAD CONTROL. The person tapped, everything they were looking at went away, and nothing came back for as long as the network took. There is no spinner and no word, so the only thing the screen says is that the tap did nothing, and the ordinary response to that is to tap again.");
  ("The one that found this shape emptied the chapter list and then asked the server which chapters the book has. On a phone away from the desk that was a second and a half of nothing, and it fooled the person who wrote it twice, because on a machine beside the server the wait is too short to see.");
  ("Only a region written into AFTERWARDS counts. A part of the screen emptied in order to close it - a picker that has been answered, a bar that the settings menu is drawn over - is emptied on purpose and stays empty on purpose, and calling that a fault would make the reading say nothing anybody would keep.");
  ("A NAME WRITTEN INSIDE A DECLARED FUNCTION FILLS NOTHING HERE, BUT ONE HANDED STRAIGHT TO A CALL DOES. A function given a name is being put away to be run at some later moment, when the emptying is long finished - that is the way back out of a settings hub, not a refill. A function written out where it is handed over is the ordinary way this repo draws a list: the rows come back and each one is put on the screen inside the callback. Reading both as deferred was the narrower first draft, and it was blind to the commonest drawing there is.");
  ("An emptying wrapped in a plain block counts as happening at the line the block stands on. Clearing only when the chapter actually changed, and then fetching, leaves exactly the same blank screen as clearing every time; a reading that only looked at bare lines would have called the guarded one clean.");
  ("A wait written inside a function declared here is still not waiting here, whichever kind of function it is - it is a promise to wait later, and the screen is not blank in the meantime.");
  let gaps = [];
  let declared_types = ["FunctionDeclaration"];
  let function_node_types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  let f_name = fn_name("html_clear");
  let f_name2 = fn_name("html_clear_context");
  let f_name3 = fn_name("html_text_set");
  let emptier_names = [f_name, f_name2, f_name3];
  function body_read(body) {
    for (let index = 0; less_than(index, body.length); index++) {
      let region = js_statement_emptied_region_here_or_null(
        body[index],
        emptier_names,
        function_node_types,
      );
      if (equal(region, null)) {
        continue;
      }
      let waited = false;
      for (let after = index + 1; less_than(after, body.length); after++) {
        let statement = body[after];
        if (not(waited)) {
          let held_back = js_statement_name_read_here_is(
            statement,
            region,
            function_node_types,
          );
          if (held_back) {
            break;
          }
          waited = js_statement_await_here_is(statement, function_node_types);
          continue;
        }
        let refilled = js_statement_name_read_here_is(
          statement,
          region,
          declared_types,
        );
        if (not(refilled)) {
          continue;
        }
        list_add(gaps, region);
        break;
      }
    }
  }
  body_read(ast.body);
  for (let block of js_list_type_nodes(ast, "BlockStatement")) {
    body_read(block.body);
  }
  return gaps;
}
