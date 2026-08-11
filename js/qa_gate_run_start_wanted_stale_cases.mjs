export function qa_gate_run_start_wanted_stale_cases() {
  "What the machine was found to be doing and how long it had been since anything was judged, beside whether a whole-repo judging is worth starting into that.";
  "The pairs matter more than the rows. Every state that appears here appears twice, once fresh and once stale, because the whole of what this rule adds is that the SAME machine can deserve a different answer depending on how long the record has been sitting - and a corpus holding only one of each pair could not tell a rule that reads the staleness from one that ignores it.";
  let cases = [
    {
      why: "a quiet machine with nothing being judged is a yes whatever the record looks like, and it is the case that makes the whole run take a minute instead of half an hour",
      flight: {
        runs: 0,
        shards: 0,
        cores: 14,
        load: 2,
        crowded: false,
      },
      stale: false,
      wanted: true,
    },
    {
      why: "the same quiet machine with a stale record is the same yes, reached by the ordinary door rather than by the escape - staleness is never a reason to refuse something that was already wanted",
      flight: {
        runs: 0,
        shards: 0,
        cores: 14,
        load: 2,
        crowded: false,
      },
      stale: true,
      wanted: true,
    },
    {
      why: "somebody is already judging and the record is fresh. A second run makes both of them slower and answers about a commit the first one is not asking about",
      flight: {
        runs: 1,
        shards: 0,
        cores: 14,
        load: 3,
        crowded: false,
      },
      stale: false,
      wanted: false,
    },
    {
      why: "somebody is already judging and the record is stale, and this is the one refusal staleness must not overturn. The run already going is what makes the record fresh again, so a second one buys nothing and costs a quarter of an hour of everybody's machine",
      flight: {
        runs: 1,
        shards: 0,
        cores: 14,
        load: 3,
        crowded: false,
      },
      stale: true,
      wanted: false,
    },
    {
      why: "a share going while the machine still reads as quiet, with a fresh record. Load is a lagging average, so a judging started seconds ago is real work the number has not caught up with, and waiting a minute is free while the record is young",
      flight: {
        runs: 0,
        shards: 1,
        cores: 14,
        load: 2,
        crowded: false,
      },
      stale: false,
      wanted: false,
    },
    {
      why: "the same single share with a stale record is a yes, and this is the row that unblocks the daemon. A share belongs to somebody else's gate run rather than to a judging - it will end on its own and it is not spending the quarter of an hour we want spent, so an hour of nothing judged outweighs it",
      flight: {
        runs: 0,
        shards: 1,
        cores: 14,
        load: 2,
        crowded: false,
      },
      stale: true,
      wanted: true,
    },
    {
      why: "nothing is being judged and the machine is full anyway - ten of us doing other things - with a fresh record. A judging would crawl however alone it is, and a fresh record means nobody is waiting on it",
      flight: {
        runs: 0,
        shards: 0,
        cores: 14,
        load: 40,
        crowded: true,
      },
      stale: false,
      wanted: false,
    },
    {
      why: "the same full machine with a stale record is a yes. A judging that crawls still finishes and a judging that never starts never does, and this is the state the machine was measured in nearly every minute of an afternoon",
      flight: {
        runs: 0,
        shards: 0,
        cores: 14,
        load: 40,
        crowded: true,
      },
      stale: true,
      wanted: true,
    },
    {
      why: "both old reasons at once and a stale record on top. The judgings already going are the reason, and they are the reason that outlives staleness",
      flight: {
        runs: 2,
        shards: 6,
        cores: 14,
        load: 73,
        crowded: true,
      },
      stale: true,
      wanted: false,
    },
    {
      why: "shares filling the machine with no judging behind them and a stale record. Nobody is spending the quarter of an hour, so somebody should",
      flight: {
        runs: 0,
        shards: 6,
        cores: 14,
        load: 73,
        crowded: true,
      },
      stale: true,
      wanted: true,
    },
  ];
  return cases;
}
