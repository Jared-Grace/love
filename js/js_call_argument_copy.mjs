export function js_call_argument_copy(call, index) {
  arguments_assert(arguments, 2);
  ("A copy of one of the things a call is given, taken by its place counting from");
  ("zero.");
  ("The copy is what every address here wants. The argument is about to be hung");
  ("under a node that replaces the call, and the one still standing inside the call");
  ("must not travel with it - two parents holding the same node is how an edit in");
  ("one place shows up in the other.");
  ("Counting from zero rather than from one, unlike the sibling that reads a place");
  ("a person said out loud: the callers here are code that already knows an");
  ("operator's left is the first and its right is the second.");
  let call_arguments = js_call_arguments_get(call);
  let only = list_get(call_arguments, index);
  let copy = object_copy(only);
  return copy;
}
