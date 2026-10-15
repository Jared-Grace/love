import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_declaration_fixed_call(declaration) {
  arguments_assert(arguments, 1);
  ("The call a function makes when all it does is call one other function with its inputs already written in, as {fn, args}; otherwise null.");
  ("★ IT EXISTS SO A PROMPT CAN NAME THE COMMAND THAT NEVER PROMPTS. A function that takes a word cannot be granted when what it reaches could be steered by that word, and a function that takes nothing and passes a fixed word can be. The guard needs to know the second stands for the first with that word, and only the code can say so.");
  ("Only plain words count as inputs - letters, digits and _./- - because those are the only inputs a command line hands over unchanged as one word each, so a call with them and a command with them are the same thing. Prose and the input check are left out, since they do nothing at run time; anything else in the body means the function does more than pass the call on, and then it stands for nothing.");
  if (not_equal(declaration.params.length, 0)) {
    return null;
  }
  function statement_inert_is(statement) {
    if (not_equal(statement.type, "ExpressionStatement")) {
      return false;
    }
    let expression = statement.expression;
    if (
      equal(expression.type, "Literal") &&
      equal(typeof expression.value, "string")
    ) {
      return true;
    }
    if (equal(expression.type, "SequenceExpression")) {
      return true;
    }
    let assert_is =
      equal(expression.type, "CallExpression") &&
      equal(expression.callee.type, "Identifier") &&
      equal(expression.callee.name, fn_name("arguments_assert"));
    return assert_is;
  }
  function call_unwrap(expression) {
    if (equal(expression, null)) {
      return null;
    }
    if (equal(expression.type, "AwaitExpression")) {
      let r = call_unwrap(expression.argument);
      return r;
    }
    if (not_equal(expression.type, "CallExpression")) {
      return null;
    }
    if (not_equal(expression.callee.type, "Identifier")) {
      return null;
    }
    return expression;
  }
  function word_plain_is(node) {
    if (
      not_equal(node.type, "Literal") ||
      not_equal(typeof node.value, "string")
    ) {
      return false;
    }
    let r2 = /^[A-Za-z0-9_./-]+$/.test(node.value);
    return r2;
  }
  function lambda(statement) {
    let b = statement_inert_is(statement);
    let n = not(b);
    return n;
  }
  let statements = declaration.body.body.filter(lambda);
  let call = null;
  if (
    equal(statements.length, 1) &&
    equal(statements[0].type, "ReturnStatement")
  ) {
    call = call_unwrap(statements[0].argument);
  }
  if (
    equal(statements.length, 2) &&
    equal(statements[0].type, "VariableDeclaration") &&
    equal(statements[0].declarations.length, 1) &&
    equal(statements[1].type, "ReturnStatement") &&
    not_equal(statements[1].argument, null) &&
    equal(statements[1].argument.type, "Identifier") &&
    equal(statements[1].argument.name, statements[0].declarations[0].id.name)
  ) {
    call = call_unwrap(statements[0].declarations[0].init);
  }
  if (equal(call, null) || equal(call.arguments.length, 0)) {
    return null;
  }
  let b2 = call.arguments.every(word_plain_is);
  if (not(b2)) {
    return null;
  }
  function lambda2(node) {
    let r3 = node.value;
    return r3;
  }
  let fixed = {
    fn: call.callee.name,
    args: call.arguments.map(lambda2),
  };
  return fixed;
}
