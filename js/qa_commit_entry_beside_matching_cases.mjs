export function qa_commit_entry_beside_matching_cases() {
  "An answer already written down, the neighbouring repos somebody is standing beside now, and whether that answer was worked out over those very same neighbours.";
  "The cases that must answer no carry the weight. Saying yes wrongly hands back a quarter of an hour of judging that was done over other contents, and hands it back silently, to everybody who asks afterwards.";
  "An entry from before any of this was recorded is written out here as its own case, because it is not a rare shape - it is every entry the record already holds, and the one a reader is most likely to be lenient about.";
  let cases = [
    {
      remembered: {
        green: 1,
        beside: {
          karate_code: "7fcff35ee820",
          portfolio_qa: "4536c3d4d002",
        },
      },
      heads: {
        karate_code: "7fcff35ee820",
        portfolio_qa: "4536c3d4d002",
      },
      matching: true,
      why: "the same neighbours standing on the same commits, which is the whole case for handing an answer back",
    },
    {
      remembered: {
        green: 1,
        beside: {
          karate_code: "7fcff35ee820",
          portfolio_qa: "4536c3d4d002",
        },
      },
      heads: {
        karate_code: "aaaaaaaaaaaa",
        portfolio_qa: "4536c3d4d002",
      },
      matching: false,
      why: "one neighbour has moved since, so the answer is about contents nobody is standing on any more",
    },
    {
      remembered: {
        green: 1,
        beside: {
          karate_code: "7fcff35ee820",
        },
      },
      heads: {
        karate_code: "7fcff35ee820",
        portfolio_qa: "4536c3d4d002",
      },
      matching: false,
      why: "a neighbour is here now that was not there then, and everything in it was unseen by that run",
    },
    {
      remembered: {
        green: 1,
        failed: [],
        named: {},
        said: {},
      },
      heads: {
        karate_code: "7fcff35ee820",
        portfolio_qa: "4536c3d4d002",
      },
      matching: false,
      why: "every entry written before the neighbours were recorded looks like this, and it is an answer about contents nobody wrote down rather than an answer merely missing a word",
    },
    {
      remembered: null,
      heads: {
        karate_code: "7fcff35ee820",
        portfolio_qa: "4536c3d4d002",
      },
      matching: false,
      why: "nothing written down at all, which is what a commit nobody has judged looks like, and it is handed in here rather than guarded against at the asking",
    },
    {
      remembered: {
        green: 1,
        beside: {},
      },
      heads: {},
      matching: true,
      why: "no neighbours then and none now is genuine agreement, and refusing it would make a repo standing on its own unable to keep any answer at all",
    },
  ];
  return cases;
}
