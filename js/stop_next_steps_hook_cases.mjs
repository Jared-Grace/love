export function stop_next_steps_hook_cases() {
  "What the stop hook must decide about a turn that is ending. It fires after every turn of every parallel session, and a wrong block costs a whole model turn each time - so the corpus is about the two ways it can be wrong, not only about the one it exists to catch.";
  "The first case is the regression, and it is the reason this corpus exists. A turn may say something, run tools, and then close; the closing text is written around the same moment the hook runs, so the hook can look while only the opening remark is on disk. That remark sits after the user's prompt exactly as a closing does, so an anchor on the prompt alone credits it - and an opening remark carries no next steps, so the turn was blocked for a rule it had already kept. Measured 2026-08-16: the user read two next-steps lists in one turn and said the sifting cost them time. The fix is that a candidate must also sit after the last tool call, which is the only thing in a transcript that proves a piece of text was mid-turn.";
  "So the shape of that case is a transcript that STOPS at tool activity. A finished fixture cannot show the fault, because with the whole file present the old reading found the closing too - what it got wrong was what it did with a file that was still being written.";
  function prompt_entry(said) {
    let r = {
      type: "user",
      message: {
        content: said,
      },
    };
    return r;
  }
  function said_entry(said) {
    let r = {
      type: "assistant",
      message: {
        content: [
          {
            type: "text",
            text: said,
          },
        ],
      },
    };
    return r;
  }
  function tool_asked_entry() {
    let r = {
      type: "assistant",
      message: {
        content: [
          {
            type: "tool_use",
            name: "Bash",
          },
        ],
      },
    };
    return r;
  }
  function tool_answered_entry() {
    let r = {
      type: "user",
      message: {
        content: [
          {
            type: "tool_result",
            content: "ok",
          },
        ],
      },
    };
    return r;
  }
  let opening = "Good question — let me check what the gate actually reads.";
  let closing_listed =
    "The name is free.\n\n1. Add the gate\n2. Stop\n\nRecommendation: the first, because nothing guards the fix today.";
  let closing_bare =
    "Done. Committed as b300eab, and the gate came back green.";
  let closing_waiting =
    "I am waiting on the suite to finish. I will say when it is over.";
  let v = prompt_entry("fix the hook");
  let v2 = said_entry(opening);
  let v3 = tool_asked_entry();
  let v4 = tool_answered_entry();
  let v5 = prompt_entry("fix the hook");
  let v6 = tool_asked_entry();
  let v7 = tool_answered_entry();
  let v8 = said_entry(closing_listed);
  let v9 = prompt_entry("fix the hook");
  let v10 = tool_asked_entry();
  let v11 = tool_answered_entry();
  let v12 = said_entry(closing_bare);
  let v13 = prompt_entry("run the suite");
  let v14 = said_entry(closing_waiting);
  let v15 = prompt_entry("fix the hook");
  let v16 = said_entry(closing_listed);
  let v17 = tool_asked_entry();
  let v18 = tool_answered_entry();
  let v19 = said_entry(closing_bare);
  let cases = [
    {
      label: "opening remark, tools still running, closing not written yet",
      entries: [v, v2, v3, v4],
      decision: "silent",
    },
    {
      label: "closing carries a list and a recommendation",
      entries: [v5, v6, v7, v8],
      decision: "silent",
    },
    {
      label: "closing is a bare report of what was done",
      entries: [v9, v10, v11, v12],
      decision: "block",
    },
    {
      label: "closing says what it is waiting on and that it will report back",
      entries: [v13, v14],
      decision: "silent",
    },
    {
      label: "the list was in the opening remark, not in the closing",
      entries: [v15, v16, v17, v18, v19],
      decision: "block",
    },
  ];
  return cases;
}
