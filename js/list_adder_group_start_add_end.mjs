import { list_add } from "./list_add.mjs";
export function list_adder_group_start_add_end(la) {
  "the three things a grouping lambda is handed - start a group, put an item in it, end it - filing each ended group with the adder it was given and opening the next one";
  "both groupers, the waiting one and the not-waiting one, said all of this in the";
  "same words; the only two things that ever differed between them were whether they";
  "waited on the lambda and which adder they filed into, and neither of those is";
  "here. So collecting a group is written once and the difference stays outside it.";
  "Nothing is open until start is called, and putting an item into a group that was";
  "never started throws instead of quietly making one. The lambda is the one who";
  "knows where a group begins, so opening one on its behalf would hide a caller that";
  "forgot to.";
  let group = null;
  function end() {
    la(group);
    start();
  }
  function start() {
    group = [];
  }
  function add_item(item) {
    list_add(group, item);
  }
  let handed = {
    start,
    add: add_item,
    end,
  };
  return handed;
}
