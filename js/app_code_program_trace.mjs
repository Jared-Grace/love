import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not_equal } from "./not_equal.mjs";
import { error } from "./error.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { list_get } from "./list_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { not } from "./not.mjs";
export function app_code_program_trace(code) {
  arguments_assert(arguments, 1);
  ("every line of a program in the order the computer runs it, each with what running it does, in order: a name declared, an expression evaluated, a value assigned to a name, a value logged to the console. A line is done once its last thing is done. Asked for by the human 2026-10-13, so a learner can do every step of the running themselves before being asked what a program logs.");
  ("A line is the line a statement begins on, and an else if's line is the one its own if begins on. Not picked: counting a line holding only } or } else { as one that runs, since nothing on it is worked out; the computer goes from an if's line straight to the first line of the { ... } it picks.");
  ("A value written out is used as it stands, with nothing to evaluate; a name is evaluated by looking up the value it holds. Anything else stops rather than guessing, so a program this does not answer for is refused where it arrives.");
  let ast = js_parse(code);
  let values = {};
  let trace = [];
  function line_of(node) {
    "which line of the program a node begins on, counting from 0";
    let start = property_get(node, "start");
    let before = text_slice(code, 0, start);
    let lines = text_split_newline(before);
    let left = list_size(lines);
    let index = subtract(left, 1);
    return index;
  }
  function value_of(node, actions) {
    "what an expression comes to, with any evaluating it took added to actions";
    let type = property_get(node, "type");
    if (equal(type, "Literal")) {
      let value = property_get(node, "value");
      return value;
    }
    if (equal(type, "Identifier")) {
      let name = property_get(node, "name");
      let value2 = property_get(values, name);
      let from = property_get(node, "start");
      let to = property_get(node, "end");
      list_add(actions, {
        kind: "evaluate",
        name,
        value: value2,
        from,
        to,
        expression: null,
      });
      return value2;
    }
    if (equal(type, "BinaryExpression")) {
      ("2026-10-15, at the human's asking: an operator between two values written out is solved in one evaluate, as the lessons on operators solve one, so a program that logs 9 + 7 can be run a line at a time. Its name is the expression as it is written, and expression says the operator and its two sides, so a stepper can ask for what it comes to and offer the wrong values the operator lessons offer. Not picked: a side that is a name or another operator, which would be several solvings on one line; such a line is still refused where it arrives");
      let left = property_get(node, "left");
      let right = property_get(node, "right");
      let left_type = property_get(left, "type");
      let right_type = property_get(right, "type");
      if (not_equal(left_type, "Literal") || not_equal(right_type, "Literal")) {
        error({
          message:
            "only an operator between two values written out can be solved here",
          code,
          left_type,
          right_type,
        });
      }
      let operator = property_get(node, "operator");
      let expression = {
        left: property_get(left, "value"),
        operator,
        right: property_get(right, "value"),
      };
      let left4 = property_get(expression, "left");
      let right2 = property_get(expression, "right");
      let value8 = app_code_operator_solve(left4, operator, right2);
      let from2 = property_get(node, "start");
      let to2 = property_get(node, "end");
      list_add(actions, {
        kind: "evaluate",
        name: text_slice(code, from2, to2),
        value: value8,
        from: from2,
        to: to2,
        expression,
      });
      return value8;
    }
    error({
      message: "only a value written out or a name can be evaluated here",
      code,
      type,
    });
  }
  function line_add(node, actions) {
    let line = line_of(node);
    let entry = {
      line,
      actions,
    };
    list_add(trace, entry);
    return entry;
  }
  function statements_run(statements) {
    for (let statement of statements) {
      statement_run(statement);
    }
  }
  function statement_run(node) {
    "one statement run, its lines added to the trace in the order they run";
    let type = property_get(node, "type");
    let actions = [];
    if (equal(type, "VariableDeclaration")) {
      let declarations = property_get(node, "declarations");
      list_size_assert(declarations, 1);
      let declaration = list_get(declarations, 0);
      let id = property_get(declaration, "id");
      let name = property_get(id, "name");
      let init = property_get(declaration, "init");
      list_add(actions, {
        kind: "declare",
        name,
        from: property_get(id, "start"),
        to: property_get(id, "end"),
      });
      ("a declare says where its name is written, and an assign where what is right of the = is written, as an evaluate says where its name is, so a stepper can send a copy of either into the note it writes");
      let value = value_of(init, actions);
      list_add(actions, {
        kind: "assign",
        name,
        value,
        from: property_get(init, "start"),
        to: property_get(init, "end"),
      });
      property_set(values, name, value);
      line_add(node, actions);
      return;
    }
    if (equal(type, "ExpressionStatement")) {
      let expression = property_get(node, "expression");
      let left_type2 = property_get(expression, "type");
      if (equal(left_type2, "AssignmentExpression")) {
        ("2026-10-15, at the human's asking: a name given a new value, as a = 5; does, solves what is right of the = if needed and assigns it, as a let line does without declaring, so the lessons that change what a name holds can be run a line at a time. Not picked: += and the other operators that assign, which solve and assign in one; such a line is still refused where it arrives");
        let operator2 = property_get(expression, "operator");
        let target = property_get(expression, "left");
        let target_type = property_get(target, "type");
        if (not_equal(operator2, "=") || not_equal(target_type, "Identifier")) {
          error({
            message: "only a name given a value with = can be assigned here",
            code,
            operator: operator2,
            target_type,
          });
        }
        let name3 = property_get(target, "name");
        property_exists_assert(values, name3);
        let right3 = property_get(expression, "right");
        let value9 = value_of(right3, actions);
        list_add(actions, {
          kind: "assign",
          name: name3,
          value: value9,
          from: property_get(right3, "start"),
          to: property_get(right3, "end"),
        });
        property_set(values, name3, value9);
        line_add(node, actions);
        return;
      }
      let callee = property_get(expression, "callee");
      let called = js_unparse(callee);
      if (not_equal(called, "console.log")) {
        error({
          message: "only console.log can be called here",
          code,
          called,
        });
      }
      let args = property_get(expression, "arguments");
      list_size_assert(args, 1);
      let arg = list_get(args, 0);
      let value3 = value_of(arg, actions);
      list_add(actions, {
        kind: "log",
        value: value3,
      });
      line_add(node, actions);
      return;
    }
    if (equal(type, "IfStatement")) {
      let test = property_get(node, "test");
      let value4 = value_of(test, actions);
      let entry2 = line_add(node, actions);
      ("an if's line also says what its condition came to, since a condition written out as true or false is not evaluated and so is in none of its actions; a guide saying why the next line runs reads it here");
      property_set(entry2, "condition", value4);
      let alternate = property_get(node, "alternate");
      ("an if's line also says what stands after its { ... }: none, else, or else_if; a guide saying which { ... } runs instead reads it here");
      let after = "none";
      let b = equal(alternate, null);
      if (not(b)) {
        let left3 = property_get(alternate, "type");
        after = equal(left3, "IfStatement") ? "else_if" : "else";
      }
      property_set(entry2, "alternate", after);
      if (value4) {
        let consequent = property_get(node, "consequent");
        let value5 = property_get(consequent, "body");
        statements_run(value5);
        return;
      }
      if (equal(alternate, null)) {
        return;
      }
      let left2 = property_get(alternate, "type");
      if (equal(left2, "IfStatement")) {
        statement_run(alternate);
        return;
      }
      let value6 = property_get(alternate, "body");
      statements_run(value6);
      return;
    }
    error({
      message: "this kind of statement is not run here",
      code,
      type,
    });
  }
  let value7 = property_get(ast, "body");
  statements_run(value7);
  return trace;
}
