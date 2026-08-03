export function js_types_loop_all_node() {
  ("Every kind of node that goes round: the counting loop, the two that walk something, and the two that test a condition.");
  ("The wider twin of the list of loops whose header is a scope of its own. That one is asked which names a loop binds, and the two condition loops bind none, so they are rightly absent from it. This one is asked what a break or a continue would land on, and there all five count.");
  let types_loop_all = [
    "ForStatement",
    "ForInStatement",
    "ForOfStatement",
    "WhileStatement",
    "DoWhileStatement",
  ];
  return types_loop_all;
}
