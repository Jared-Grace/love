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
  ("A wait written inside a function declared here does not count as waiting here, and a name written inside one does not count as filling anything here. Both are handed on to be run at some later moment, when the emptying is long finished. Reading them as happening now was what made this reading unusable on its first two drafts: it named a hub whose bar is deliberately left empty, and it named a bar whose only later mention was the argument of the way back.");
  let gaps = [];
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
  function scan_here(node, decide) {
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
        if (scan_here(item, decide)) {
          return true;
        }
      }
      return false;
    }
    let typed = equal(typeof node.type, "string");
    if (not(typed)) {
      return false;
    }
    let inner_function_is = function_types.includes(node.type);
    if (inner_function_is) {
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
      if (scan_here(node[key], decide)) {
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
    let found = scan_here(statement, await_is);
    return found;
  }
  function name_here_is(statement, region) {
    function named_is(node) {
      let identifier_is = equal(node.type, "Identifier");
      if (not(identifier_is)) {
        return false;
      }
      let same = equal(node.name, region);
      return same;
    }
    let found = scan_here(statement, named_is);
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
  function body_read(body) {
    for (let index = 0; less_than(index, body.length); index++) {
      let region = emptied_region(body[index]);
      if (equal(region, null)) {
        continue;
      }
      let waited = false;
      for (let after = index + 1; less_than(after, body.length); after++) {
        let statement = body[after];
        let mentioned = name_here_is(statement, region);
        if (not(waited)) {
          if (mentioned) {
            break;
          }
          waited = await_here_is(statement);
          continue;
        }
        if (not(mentioned)) {
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
