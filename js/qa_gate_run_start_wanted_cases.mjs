export function qa_gate_run_start_wanted_cases() {
  "What the machine was found to be doing, and whether a whole-repo judging is worth starting into it";
  "A judging costs about a quarter of an hour when the machine is busy and about a minute when it is not, so this answer is worth a quarter of an hour every time it is right and costs one every time it is wrong in the yes direction";
  let cases = [
    {
      why: "a quiet machine with nothing being judged is the one case worth a yes, and it is the case that makes the whole run take a minute instead of half an hour",
      flight: {
        runs: 0,
        shards: 0,
        cores: 14,
        load: 2,
        crowded: false,
      },
      wanted: true,
    },
    {
      why: "somebody is already judging. A second run makes both of them slower and answers about a commit the first one is not asking about, so waiting costs nothing and starting costs everybody",
      flight: {
        runs: 1,
        shards: 0,
        cores: 14,
        load: 3,
        crowded: false,
      },
      wanted: false,
    },
    {
      why: "the shares are what actually hold the processors, and the one that started them is not always still there to be counted. Counting only the starters would read a machine full of shares as quiet - which is exactly how six judgings came to be going at once",
      flight: {
        runs: 0,
        shards: 6,
        cores: 14,
        load: 73,
        crowded: true,
      },
      wanted: false,
    },
    {
      why: "a share going while the machine still reads as quiet is answered on the share alone. Load is a lagging average, so a judging started seconds ago is real work the number has not caught up with",
      flight: {
        runs: 0,
        shards: 1,
        cores: 14,
        load: 2,
        crowded: false,
      },
      wanted: false,
    },
    {
      why: "nothing is being judged and the machine is full anyway - ten of us doing other things. A judging would crawl however alone it is, so the answer is no for the second reason rather than the first",
      flight: {
        runs: 0,
        shards: 0,
        cores: 14,
        load: 40,
        crowded: true,
      },
      wanted: false,
    },
    {
      why: "both reasons at once, which is what the machine actually looked like the day this was written down",
      flight: {
        runs: 2,
        shards: 6,
        cores: 14,
        load: 73,
        crowded: true,
      },
      wanted: false,
    },
  ];
  return cases;
}
