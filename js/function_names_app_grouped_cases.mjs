import { arguments_assert } from "./arguments_assert.mjs";
export function function_names_app_grouped_cases() {
  arguments_assert(arguments, 0);
  ("Lists of function names and lists of app names, with the piles they sort into written down rather than worked out.");
  ("The names here are invented on purpose and name nothing in the repo. This is the one step of a promotion that does not read anything, so it is the one step whose answer can be written down and still be true next week - held against real names, every line of this would have to be rewritten the next time anybody added an import.");
  ("The case that decides the most is an app named inside another. A verifier living under a game is its own app, so a name is owned by the LONGEST app name it sits under and not by the first that fits. Sorted by the first, every one of that app's functions is filed under its parent, and a promotion that reads the pile sees one app where there are two - which is the difference between a rename and a design question.");
  ("A name owned by nobody being dropped is written down as its own case, because dropping it is a decision and not an oversight. Most of the repo belongs to no app, and a pile gathered for those would be longer than every real pile put together while answering nothing anybody asked.");
  let cases = [
    {
      f_names: ["app_reply_one", "app_reply_two"],
      app_names: ["app_reply", "app_verses"],
      owned: {
        app_reply: ["app_reply_one", "app_reply_two"],
      },
      why: "names from a single app come back as one pile, and an app that owns nothing is not named at all - an empty pile would read as an app that was reached",
    },
    {
      f_names: ["app_reply_one", "app_verses_two", "app_reply_three"],
      app_names: ["app_reply", "app_verses"],
      owned: {
        app_reply: ["app_reply_one", "app_reply_three"],
        app_verses: ["app_verses_two"],
      },
      why: "two apps come back as two piles, which is the whole answer a promotion turns on, and each pile keeps the order the names arrived in",
    },
    {
      f_names: ["text_combine", "app_reply_one", "list_add"],
      app_names: ["app_reply"],
      owned: {
        app_reply: ["app_reply_one"],
      },
      why: "a name no app owns is dropped rather than gathered - shared code and plain machinery belong to nobody, so they never block a move and never need counting",
    },
    {
      f_names: ["app_game_one", "app_game_verify_two"],
      app_names: ["app_game", "app_game_verify"],
      owned: {
        app_game: ["app_game_one"],
        app_game_verify: ["app_game_verify_two"],
      },
      why: "an app named inside another takes its own names back off it - filed by the first app that fitted, the verifier would vanish into the game and two apps would read as one",
    },
    {
      f_names: ["app_replay_one"],
      app_names: ["app_reply"],
      owned: {},
      why: "sitting under an app name needs the whole name and the break after it - a longer word merely starting the same way is owned by nobody",
    },
    {
      f_names: ["app_reply"],
      app_names: ["app_reply"],
      owned: {
        app_reply: ["app_reply"],
      },
      why: "an app's own entry point is owned by that app, so a move that reaches it is told so rather than being told the reach was clean",
    },
    {
      f_names: ["app_reply_one"],
      app_names: [],
      owned: {},
      why: "no apps at all means nothing is owned, which is an answer and not a failure - it is what a repo with no apps in it honestly looks like",
    },
    {
      f_names: [],
      app_names: ["app_reply"],
      owned: {},
      why: "reaching nothing owns nothing, and this is the shape a promotion wants to see: an empty answer is the proof that a move is closed",
    },
  ];
  return cases;
}
