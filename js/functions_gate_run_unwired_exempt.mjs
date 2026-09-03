import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function functions_gate_run_unwired_exempt() {
  "The gates the whole-repo gate is not expected to list, each named with the reason it is not one of its members.";
  "Named one at a time rather than spotted by shape, because a rule guessing which gate is allowed to sit outside the list would go wrong in the one direction that matters - quietly excusing the next gate somebody wrote and forgot to wire in.";
  let f_name = fn_name("app_replace");
  let f_name2 = fn_name("app_g_dev_routes_phone_gate_run");
  let f_name4 = fn_name("apps_prod_chunks_missing_gate_run");
  let f_name5 = fn_name("qa_stage_pieces_assert");
  let f_name6 = fn_name("qa_app_e2e_happy_run");
  let exempt = [
    {
      name: fn_name("qa_gate_run"),
      why: "this is the whole-repo gate itself - it asks the list, so it cannot be in it",
    },
    {
      name: fn_name("app_g_dev_routes_phone_gate_run"),
      why: text_combine_multiple([
        "it opens every screen of the game in a real browser at the size of a phone, so it needs the local server running and a browser to drive - it is slower than everything in the list and it goes red for want of a server rather than for anything wrong with the code. run on its own after touching the game's screens, the same way the ",
        f_name,
        " end-to-end tests are",
      ]),
    },
    {
      name: fn_name("apps_boot_cold_gate_run"),
      why: text_combine_multiple([
        "it opens every app in a real browser the way a stranger opens it - nothing after the address, nothing remembered - so it needs the local server running and a fresh browser for each one, and it goes red for want of a server rather than for anything wrong with the code. it is also the slowest thing here by a long way, because a browser is built and thrown away per app on purpose: they all share one origin, so reusing a browser would let each app read what the app before it had written and the arrival being tested would no longer be the first one. run it on its own after touching anything an app does while it opens, the same way the ",
        f_name2,
        " sweep above is",
      ]),
    },
    {
      name: fn_name("apps_prod_chunks_unreachable_gate_run"),
      why: text_combine_multiple([
        "it asks the live site whether every piece of every app that is already being served can actually be got, so all of it is network and none of it is about the files. measured at sixty-seven seconds over twenty-seven apps, and the fault it looks for can only arrive when something is sent out - so it is asked at a sending rather than at every commit, where it would be paid for constantly and could tell nobody anything new. its twin ",
        f_name4,
        " reads the folder an app is about to be sent out of and is in the list, and the two answer different questions: that one catches the fault before it goes out, this one says whether it went out already",
      ]),
    },
    {
      name: fn_name("bundles_names_missing_gate_run"),
      why: text_combine_multiple([
        "it reads built files for calls to names of this repo's own that the file does not carry, and a built file is made by a build rather than by anybody - so nothing a commit tracks is one. a gate is judged in a copy of what a commit tracks, and from the day the working folder moved out of the served one this threw there on a folder that was not there, having measured nothing since. the question it asks is now asked by ",
        f_name5,
        " on the way up, of the very pieces one build has just made, which is the only place a build is certain to exist. it is kept alive and grantable because asked by hand of the folder people work in, where that folder really is there, it still answers - it is the subject that could not survive a frozen copy, not the check",
      ]),
    },
    {
      name: fn_name("html_regenerate_stable_gate_run"),
      why: text_combine_multiple([
        "it asks whether writing a generated page out again would change it, and the pages it reads are written by a build into a folder nothing tracks - so in the copy a commit is judged in there is no page there to ask about, and it threw rather than answering from the day that folder moved. the same question is now asked by ",
        f_name5,
        " of the pages one build has just put where the sending reads from. asked by hand of the working folder it still answers, so it is kept rather than removed",
      ]),
    },
    {
      name: fn_name("app_code_happy_gate_run"),
      why: text_combine_multiple([
        "it walks the whole code course as somebody who gets every question right, and the course is served out of a stage folder that a copy of what a commit tracks does not carry - so it refused itself in seconds rather than walking anything, and a refusal that fast reads like a pass. the walk is run instead by ",
        f_name6,
        " on the way up, against the very pieces about to go out, which is both the only place the course exists to be walked and the only place walking it is worth the half hour",
      ]),
    },
  ];
  return exempt;
}
