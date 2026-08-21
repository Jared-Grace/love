export function qa_commit_entry_beside_moved_cases() {
  "An answer already written down, the neighbouring repos somebody is standing beside now, and which of those neighbours has moved since that answer was worked out.";
  "Its neighbour answers whether the answer may be handed back and is deliberately all-or-nothing. This one says what is different, and the cases are written so that the two can never be confused: an entry with no word about its neighbours is a no over there and names nobody here, because there is nothing recorded for a neighbour to have moved away from.";
  "The case that matters most is the one real afternoon this was written for - three neighbours, one of them moved, and a quarter of an hour of judging thrown away with no reason given for it.";
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
      moved: [],
      why: "the same neighbours standing on the same commits, so nothing moved and nobody is named",
    },
    {
      remembered: {
        green: 1,
        beside: {
          karate_code: "7fcff35ee820",
          p_np: "383c69452c06",
          portfolio_qa: "4536c3d4d002",
        },
      },
      heads: {
        karate_code: "cf5620f2341e",
        p_np: "383c69452c06",
        portfolio_qa: "4536c3d4d002",
      },
      moved: [
        {
          name: "karate_code",
          was: "7fcff35ee820",
          now: "cf5620f2341e",
        },
      ],
      why: "the measured case: of three neighbours one had moved, and it alone is what cost the run a quarter of an hour",
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
      moved: [
        {
          name: "portfolio_qa",
          was: null,
          now: "4536c3d4d002",
        },
      ],
      why: "a neighbour is here now that was not there then, and it is named rather than passed over, because everything in it was unseen by that run",
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
        karate_code: "7fcff35ee820",
      },
      moved: [
        {
          name: "portfolio_qa",
          was: "4536c3d4d002",
          now: null,
        },
      ],
      why: "a neighbour that could not say where it stands this time is named too - a neighbour part way through saving a file looks exactly like this, and it is the ordinary reason a run finds nothing to hand back",
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
      },
      moved: [],
      why: "an entry written before the neighbours were recorded names nobody: it is refused next door for having no word about them, and there is nothing here for a neighbour to have moved away from",
    },
    {
      remembered: null,
      heads: {
        karate_code: "7fcff35ee820",
      },
      moved: [],
      why: "nothing written down at all, which is what a commit nobody has judged looks like - no answer was declined, so no neighbour is to blame for it",
    },
  ];
  return cases;
}
