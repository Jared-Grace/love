export function visit_filter_recursive_stack_message() {
  "The complaint when the walk's own stack comes back holding something other than the node this step put onto it. Both the plain walk and its awaiting twin check the same thing the same way, so the sentence is named once here rather than written out in each of them, where the two could drift apart.";
  let v =
    "the walk keeps a stack of the nodes it is currently inside, and the one taken back off the top is not the one this step put there - something else added to or removed from that stack while the children were being visited";
  return v;
}
