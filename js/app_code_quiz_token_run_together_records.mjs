import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { js_tokens_run_together } from "./js_tokens_run_together.mjs";
import { null_is } from "./null_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_quiz_token_run_together_records(
  chosen,
  token,
  tokens_unique,
) {
  "What to say to a learner who has just tapped a piece that cannot go there, when the piece they tapped before it and this one are written side by side in real code as a third piece - cut into the pieces it is made of, so that the bits of code in it can be lettered as code and the words around them cannot.";
  "It hands back pieces rather than a sentence because the whole point of what it says is which characters are the code. Joined into one run of text first, the pieces named in it look exactly like the words naming them by the time anything could letter them differently.";
  "TWO THINGS ARE SAID, AND WHICH ONE DEPENDS ON THE PIECES IN FRONT OF THEM. When the merged piece is one of the buttons, the reader wanted it and tapped for it the long way, so they are pointed at the button. When it is not, the line they are building does not use it at all, so they are told that instead.";
  "NOTHING IS SAID WHEN NOTHING RAN TOGETHER, and nothing is said on the first tap of all, because there is no piece in front of it for anything to run together with.";
  let none = list_empty_is(chosen);
  if (none) {
    return null;
  }
  let before = list_last(chosen);
  let merged = js_tokens_run_together(before, token);
  let apart = null_is(merged);
  if (apart) {
    return null;
  }
  let opening = [
    {
      text: before,
      code: true,
    },
    {
      text: " and ",
      code: false,
    },
    {
      text: token,
      code: true,
    },
    {
      text: " side by side spell ",
      code: false,
    },
    {
      text: merged,
      code: true,
    },
    {
      text: ", which is one piece of its own.",
      code: false,
    },
  ];
  let available = list_includes(tokens_unique, merged);
  if (available) {
    let here = [
      {
        text: " Tap the ",
        code: false,
      },
      {
        text: merged,
        code: true,
      },
      {
        text: " button instead.",
        code: false,
      },
    ];
    let r = list_concat(opening, here);
    return r;
  }
  let elsewhere = [
    {
      text: " This line does not use ",
      code: false,
    },
    {
      text: merged,
      code: true,
    },
    {
      text: ", so something has to go between the two.",
      code: false,
    },
  ];
  let r2 = list_concat(opening, elsewhere);
  return r2;
}
