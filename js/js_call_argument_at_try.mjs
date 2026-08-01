export function js_call_argument_at_try(call, place) {
  "One of the things a call is given, by where it stands among them, or null where the call was given no such thing. Read-only, pure.";
  "The one that insists is right where the caller already knows the shape of the call it found. A reading that sweeps the repo does not: it asks about a name, and the same name is called with different numbers of things in different files, so a call with fewer than expected is ordinary rather than wrong. Asking there and being thrown at turns a whole sweep into a stack trace over one file that was written perfectly well.";
  arguments_assert(arguments, 2);
  let args = js_call_arguments_get(call);
  let counted = number_from_text(place);
  let size = list_size(args);
  let absent = greater_than(counted, size);
  if (absent) {
    return null;
  }
  let only = js_call_argument_at(call, place);
  return only;
}
