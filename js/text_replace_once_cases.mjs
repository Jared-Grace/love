import { arguments_assert } from "./arguments_assert.mjs";
export function text_replace_once_cases() {
  "A text, a run to replace and what to put there, with the result written down - or nothing written down, where the replacement must be refused.";
  "The refusals are the whole reason this exists, so they are the cases that matter. Replacing everywhere already worked; what it could not do was notice that it had replaced nothing, or that it had replaced somewhere the caller was not looking.";
  "Nothing where a result would be means the replacement was refused rather than that it produced an empty text. Those are told apart by the case that deliberately replaces a run with nothing at all, which is a real answer and comes back as the shortened text.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      text: "alpha beta gamma",
      from: "beta",
      to: "delta",
      after: "alpha delta gamma",
      why: "the ordinary case: a run that sits in exactly one place is changed there",
    },
    {
      text: "alpha beta gamma",
      from: "epsilon",
      to: "delta",
      after: null,
      why: "a run that is nowhere is refused rather than quietly changing nothing - this is the mistyped letter, and the text that some earlier run already changed, and both of them used to write the file back unaltered and pass every check afterwards",
    },
    {
      text: "alpha beta gamma beta",
      from: "beta",
      to: "delta",
      after: null,
      why: "a run in more than one place is refused rather than changing all of them, because the places the caller was not looking at are changed just as silently as the one they were",
    },
    {
      text: "alpha beta gamma beta",
      from: "gamma beta",
      to: "gamma delta",
      after: "alpha beta gamma delta",
      why: "the way past a refusal is to take in more of the line around it until the run names one place - the same move the editing tool asks for, and the reason a refusal is a direction rather than a wall",
    },
    {
      text: "alpha beta gamma",
      from: " beta",
      to: "",
      after: "alpha gamma",
      why: "replacing a run with nothing at all is a deletion, which is a real answer and must not read as a refusal",
    },
    {
      text: "alpha beta gamma",
      from: "beta",
      to: "beta beta",
      after: "alpha beta beta gamma",
      why: "what goes in may hold what came out. Only the text before the change is counted, so putting a run in twice where it stood once is allowed rather than being judged against itself afterwards",
    },
  ];
  return cases;
}
