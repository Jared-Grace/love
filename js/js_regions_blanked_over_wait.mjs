import { fn_name } from "./fn_name.mjs";
import { object_property_names } from "./object_property_names.mjs";
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
  let function_types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  let emptier_names = [
    fn_name("html_clear"),
    fn_name("html_clear_context"),
    fn_name("html_text_set"),
  ];
  function scan_here(node, decide, stop_types) {
    if (equal(node, null)) {
      return false;
    }
    let object_is = equal(typeof node, "object");
    if (not(object_is)) {
      return false;
    }
    let list_is = Array.isArray(node);
    if (list_is) {
      for (let item of node) {
        if (scan_here(item, decide, stop_types)) {
          return true;
        }
      }
      return false;
    }
    let typed = equal(typeof node.type, "string");
    if (not(typed)) {
      return false;
    }
    let stopped = stop_types.includes(node.type);
    if (stopped) {
      return false;
    }
    if (decide(node)) {
      return true;
    }
    for (let key of object_property_names(node)) {
      let skipped = equal(key, "type");
      if (skipped) {
        continue;
      }
      if (scan_here(node[key], decide, stop_types)) {
        return true;
      }
    }
    return false;
  }
  function await_here_is(statement) {
    function await_is(node) {
      let awaited = equal(node.type, "AwaitExpression");
      return awaited;
    }
    let found = scan_here(statement, await_is, function_types);
    return found;
  }
  function name_here_is(statement, region, stop_types) {
    function named_is(node) {
      let identifier_is = equal(node.type, "Identifier");
      if (not(identifier_is)) {
        return false;
      }
      let same = equal(node.name, region);
      return same;
    }
    let found = scan_here(statement, named_is, stop_types);
    return found;
  }
  function emptied_region(statement) {
    let expression_is = equal(statement.type, "ExpressionStatement");
    if (not(expression_is)) {
      return null;
    }
    let call = statement.expression;
    let call_is = equal(call.type, "CallExpression");
    if (not(call_is)) {
      return null;
    }
    let named_is = equal(call.callee.type, "Identifier");
    if (not(named_is)) {
      return null;
    }
    let empties = emptier_names.includes(call.callee.name);
    if (not(empties)) {
      return null;
    }
    ("setting a word is only an emptying when the word is nothing");
    let text_set_is = equal(call.callee.name, fn_name("html_text_set"));
    if (text_set_is) {
      let second = call.arguments[1];
      let literal_is = second && equal(second.type, "Literal");
      let blank_is = literal_is && equal(second.value, "");
      if (not(blank_is)) {
        return null;
      }
    }
    let first = call.arguments[0];
    if (equal(first, undefined)) {
      return null;
    }
    let identifier_is = equal(first.type, "Identifier");
    if (identifier_is) {
      let r = first.name;
      return r;
    }
    let member_is = equal(first.type, "MemberExpression");
    let plain_object_is = member_is && equal(first.object.type, "Identifier");
    if (plain_object_is) {
      let r2 = first.object.name;
      return r2;
    }
    return null;
  }
  function emptied_region_here(statement) {
    let plain = emptied_region(statement);
    let b = equal(plain, null);
    let plain_is = not(b);
    if (plain_is) {
      return plain;
    }
    let wrapped = null;
    function empties_is(node) {
      let region = emptied_region(node);
      let b2 = equal(region, null);
      let found_is = not(b2);
      if (found_is) {
        wrapped = region;
      }
      return false;
    }
    scan_here(statement, empties_is, function_types);
    return wrapped;
  }
  function body_read(body) {
    for (let index = 0; less_than(index, body.length); index++) {
      let region = emptied_region_here(body[index]);
      if (equal(region, null)) {
        continue;
      }
      let waited = false;
      for (let after = index + 1; less_than(after, body.length); after++) {
        let statement = body[after];
        if (not(waited)) {
          let held_back = name_here_is(statement, region, function_types);
          if (held_back) {
            break;
          }
          waited = await_here_is(statement);
          continue;
        }
        let refilled = name_here_is(statement, region, declared_types);
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
