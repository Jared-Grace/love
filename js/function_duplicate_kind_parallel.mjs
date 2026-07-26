export function function_duplicate_kind_parallel() {
  "A mark placed in a function body saying that this function shares its shape with another on purpose, and that the two should never be collapsed into one.";
  "It is named after the function that reads it, so a reader who meets it in a body and does not know why it is there has the answer in front of them: open the function this one is named after. Nothing else written in a body says who is listening.";
  "It does nothing when it runs, and it is a call rather than a bare mention because the auto pass rewrites a bare mention back into a call. Being a call costs one jump into an empty body; being read costs nothing at all, because the mark is found by looking at the written function rather than by running it.";
  "A mark is worth more than a sentence of prose saying the same thing, for the one reason prose cannot manage: something checks it. A sentence can go stale without anyone noticing, and this cannot, because the mark is the very thing the search reads.";
}
