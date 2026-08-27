import { arguments_assert } from "./arguments_assert.mjs";
export function usfm_markers_paragraph() {
  arguments_assert(arguments, 0);
  ("The usfm line marks that begin a new paragraph of prose, as against the ones that begin another line of the paragraph already running.");
  ("This is the whole of what puts a blank line into laid-out prose. Poetry says where its breaks go with a break mark of its own, but prose says nothing at all: a paragraph simply starts, and the only evidence that one has is a mark of this kind opening the line. Without the distinction a chapter of a gospel comes out as one unbroken block.");
  ("The stepped and margined kinds are all in it because they all start a paragraph, differing only in how the paragraph sits. What makes them one list here is the break before them, which is the same for every one.");
  let markers = [
    "p",
    "m",
    "pi",
    "pi1",
    "pi2",
    "pi3",
    "mi",
    "nb",
    "pc",
    "pr",
    "pm",
    "pmo",
    "pmc",
    "pmr",
    "cls",
  ];
  return markers;
}
