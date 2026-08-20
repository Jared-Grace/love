export function visit_filter_recursive_cycle_message() {
  "The complaint when the walk reaches a node it is already inside. Both the plain walk and its awaiting twin ask the same question the same way, so the sentence is named once here rather than written out in each of them, where the two could drift apart.";
  "Being inside a node and reaching it again means it holds itself somewhere below, and a walk over a shape like that never ends. Left alone it runs until the machine refuses the next call, which says nothing about which node or which file - and by then the lambda has already been handed a thousand things, so a caller that catches the refusal keeps whatever those thousand did.";
  "This is NOT the question of whether a node has been seen before anywhere. The same node standing in two places is an ordinary thing for built code to hold, and both places really do hold it, so both must be visited; refusing the second one would quietly answer about one of them and call it the whole answer. Only being inside a node and meeting it again is a shape that cannot be walked.";
  let v =
    "the walk reached a node it is already inside, which means that node holds itself somewhere below and the shape has no bottom to reach - was a node put back underneath itself while a change was being made to the tree?";
  return v;
}
