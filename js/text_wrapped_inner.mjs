export function text_wrapped_inner(value, opening, closing) {
  arguments_assert(arguments, 3);
  ("What a piece of writing holds between a given opening and a given closing - and nothing at all when it does not both begin with the one and end with the other.");
  ("Its neighbour that reads between two marks looks for them anywhere inside, which answers something for writing that was never wrapped in them at all. Here the two marks are the ends themselves, so not being wrapped is a real answer rather than a wrong one, and every caller so far wanted exactly that: a rule that grants some other tool is not a rule with a strange command in it.");
  ("Nothing is what both refusals hand back, so a caller that goes on to take the inside apart word by word arrives at nothing either way and needs no guard of its own.");
  let opens = text_starts_with(value, opening);
  if (not(opens)) {
    let nothing = text_empty();
    return nothing;
  }
  let closes = text_ends_with(value, closing);
  if (not(closes)) {
    let nothing = text_empty();
    return nothing;
  }
  let start = text_size(opening);
  let end = subtract(text_size(value), text_size(closing));
  let inner = text_slice(value, start, end);
  return inner;
}
