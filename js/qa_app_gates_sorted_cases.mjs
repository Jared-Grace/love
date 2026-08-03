export function qa_app_gates_sorted_cases() {
  "Which gates were red, what each of them named, what one app reaches - and which of them should hold that app's deployment. This is the judgement a deploy turns on, and every fault found in it so far had to be found by hand on a real afternoon";
  "The three faults that have actually happened are each written down here as a case, so that none of them can come back quietly. Two of them let gates through that could not be placed, and one held every app for words a gate used while being helpful";
  "The names are invented so that the canonicalizing pass cannot rewrite a case into a reference to a real function and change what the case says. They are spelled with underscores because that is what a name looks like here, and the sorting compares names rather than reading them";
  let cases = [
    {
      why: "the ordinary case: a gate naming something this app ships holds it, and only the shared names are carried back",
      green: false,
      failed: ["gate_named_this"],
      named: {
        gate_named_this: ["thing_shipped_here", "thing_shipped_elsewhere"],
      },
      reach: ["thing_shipped_here", "thing_else_here"],
      sorted: {
        blocking: [
          {
            gate: "gate_named_this",
            why: "names something this app ships",
            names: ["thing_shipped_here"],
          },
        ],
        elsewhere: [],
      },
    },
    {
      why: "the whole point: a gate naming only what this app cannot reach is a complaint about somewhere else and must not hold this deploy",
      green: false,
      failed: ["gate_named_this"],
      named: {
        gate_named_this: ["thing_shipped_elsewhere"],
      },
      reach: ["thing_shipped_here"],
      sorted: {
        blocking: [],
        elsewhere: [
          {
            gate: "gate_named_this",
            names: ["thing_shipped_elsewhere"],
            gate_itself_shipped: false,
          },
        ],
      },
    },
    {
      why: "a red gate recorded with an EMPTY list cannot be placed and is counted against the app. This is the fault that let sixteen unproven gates through: only the absent spelling was checked, and every red gate is in fact recorded with a list, so the rule applied to nothing at all",
      green: false,
      failed: ["gate_named_this"],
      named: {
        gate_named_this: [],
      },
      reach: ["thing_shipped_here"],
      sorted: {
        blocking: [
          {
            gate: "gate_named_this",
            why: "named no function, so it cannot be placed",
            names: [],
          },
        ],
        elsewhere: [],
      },
    },
    {
      why: "the other spelling of the same silence - red, and absent from the record altogether - answered the same way",
      green: false,
      failed: ["gate_named_this"],
      named: {},
      reach: ["thing_shipped_here"],
      sorted: {
        blocking: [
          {
            gate: "gate_named_this",
            why: "named no function, so it cannot be placed",
            names: [],
          },
        ],
        elsewhere: [],
      },
    },
    {
      why: "a gate whose own function this app ships is still sorted on what it NAMED, not on itself. The fact is carried back for the reader and changes nothing",
      green: false,
      failed: ["gate_named_this"],
      named: {
        gate_named_this: ["thing_shipped_elsewhere"],
      },
      reach: ["gate_named_this", "thing_shipped_here"],
      sorted: {
        blocking: [],
        elsewhere: [
          {
            gate: "gate_named_this",
            names: ["thing_shipped_elsewhere"],
            gate_itself_shipped: true,
          },
        ],
      },
    },
    {
      why: "nothing was red, so nothing holds the deploy. An empty answer here is what a green commit looks like and must not be confused with an answer that could not be worked out",
      green: true,
      failed: [],
      named: {},
      reach: ["thing_shipped_here"],
      sorted: {
        blocking: [],
        elsewhere: [],
      },
    },
    {
      why: "gates are sorted one at a time and both answers can occur together, so a single blocker among several is enough to hold the app while the rest are still set aside correctly",
      green: false,
      failed: ["gate_named_this", "gate_named_that", "gate_named_other"],
      named: {
        gate_named_this: ["thing_shipped_elsewhere"],
        gate_named_that: ["thing_shipped_here"],
        gate_named_other: [],
      },
      reach: ["thing_shipped_here"],
      sorted: {
        blocking: [
          {
            gate: "gate_named_that",
            why: "names something this app ships",
            names: ["thing_shipped_here"],
          },
          {
            gate: "gate_named_other",
            why: "named no function, so it cannot be placed",
            names: [],
          },
        ],
        elsewhere: [
          {
            gate: "gate_named_this",
            names: ["thing_shipped_elsewhere"],
            gate_itself_shipped: false,
          },
        ],
      },
    },
    {
      why: "written down because the answer is the ALARMING one and should never change quietly: an app reaching nothing has nothing in common with any complaint, so every named gate is set aside and the app reads as clear. That is the letting-out direction. It is written down rather than fixed because it cannot happen today - the reach is walked from the app's own roots and a root reaches at least itself, so an empty answer means the walk threw rather than returned. Should a reach ever be able to come back empty, this is the case that must change first",
      green: false,
      failed: ["gate_named_this"],
      named: {
        gate_named_this: ["thing_shipped_elsewhere"],
      },
      reach: [],
      sorted: {
        blocking: [],
        elsewhere: [
          {
            gate: "gate_named_this",
            names: ["thing_shipped_elsewhere"],
            gate_itself_shipped: false,
          },
        ],
      },
    },
    {
      why: "the fault this actually shipped with, found in the record on 2026-08-03: a judging that did not come back green and yet named no red gate. A loop over no gates adds no blocker, so the app read as CLEAR and a commit recorded as failed was offered as deployable. This is what a run that died partway leaves behind, and the two spellings above do not catch it because they are asked once per red gate and there is no red gate to ask about",
      green: false,
      failed: [],
      named: {},
      reach: ["thing_shipped_here"],
      sorted: {
        blocking: [
          {
            gate: "the judging itself",
            why: "did not come back green and named no red gate, so what broke cannot be placed",
            names: [],
          },
        ],
        elsewhere: [],
      },
    },
    {
      why: "not green is only consulted when nothing was named. A red commit that listed its gates is answered gate by gate, and the overall verdict must add nothing on top - otherwise every red commit would carry a blocker no gate stands behind",
      green: false,
      failed: ["gate_named_this"],
      named: {
        gate_named_this: ["thing_shipped_elsewhere"],
      },
      reach: ["thing_shipped_here"],
      sorted: {
        blocking: [],
        elsewhere: [
          {
            gate: "gate_named_this",
            names: ["thing_shipped_elsewhere"],
            gate_itself_shipped: false,
          },
        ],
      },
    },
  ];
  return cases;
}
