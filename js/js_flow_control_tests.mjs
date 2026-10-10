import { equal } from "./equal.mjs";
export function js_flow_control_tests(node) {
  "The parts of a node that decide whether, or how often, the code inside it runs - so a value set inside an if depends on the if's condition as much as on what was written into it.";
  "A catch depends on the whole try it guards, because which line threw decides whether it runs at all.";
  let type = node.type;
  if (
    [
      "IfStatement",
      "ConditionalExpression",
      "WhileStatement",
      "DoWhileStatement",
    ].includes(type)
  ) {
    let r = [node.test];
    return r;
  }
  if (equal(type, "ForStatement")) {
    let r2 = [node.init, node.test, node.update];
    return r2;
  }
  if (["ForOfStatement", "ForInStatement"].includes(type)) {
    let r3 = [node.right];
    return r3;
  }
  if (equal(type, "SwitchStatement")) {
    let tests = [node.discriminant];
    for (let c of node.cases) {
      tests.push(c.test);
    }
    return tests;
  }
  if (equal(type, "LogicalExpression")) {
    let r4 = [node.left];
    return r4;
  }
  if (equal(type, "TryStatement")) {
    let r5 = [node.block];
    return r5;
  }
  let r6 = [];
  return r6;
}
