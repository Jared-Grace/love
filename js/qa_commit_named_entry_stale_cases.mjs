export function qa_commit_named_entry_stale_cases() {
  "One remembered judgement, and whether it should be forgotten so the commit is judged again rather than answered out of it";
  "Forgetting is the safe answer and that is what makes this worth pinning from both sides. Forget too much and a deployment waits while a commit is judged again, which costs a quarter of an hour and lets nothing out; forget too little and a record nobody can trust goes on answering questions. Only the second is silent, so every case that says KEEP is doing the work here";
  "The names are invented so that the canonicalizing pass cannot rewrite a case into a reference to a real function and change what the case says. They are spelled with underscores because that is what a name looks like here, and the reader asks about the shape of a name rather than reading it";
  let cases = [
    {
      why: "an ordinary green judging is kept. Nothing was red, so naming nothing is exactly what it should look like and there is nothing here a later reader could disagree with",
      entry: {
        green: true,
        failed: [],
        named: {},
      },
      stale: false,
    },
    {
      why: "an ordinary red judging that named a real function is kept. This is what the record is FOR, and forgetting it would spend a quarter of an hour to arrive back at it",
      entry: {
        green: false,
        failed: ["gate_named_this"],
        named: {
          gate_named_this: ["thing_shipped_here"],
        },
      },
      stale: false,
    },
    {
      why: "a single everyday word is forgotten. The reader can no longer produce one, so a record holding one certainly came from the older reader - and every app ships those words, so leaving it would refuse every deployment of every app",
      entry: {
        green: false,
        failed: ["gate_named_this"],
        named: {
          gate_named_this: ["not"],
        },
      },
      stale: true,
    },
    {
      why: "one spoiled name spoils the whole entry, even beside good ones. The names of a judging were worked out together by one reader, so half a record from a replaced reader is not a record of anything",
      entry: {
        green: false,
        failed: ["gate_named_this", "gate_named_that"],
        named: {
          gate_named_this: ["thing_shipped_here"],
          gate_named_that: ["each"],
        },
      },
      stale: true,
    },
    {
      why: "a red gate that named nothing is KEPT. It cannot be placed and so holds the deploy, but that is a true thing the record knows about it - the gate ran, it was red, and it named nobody. Forgetting it would throw away a real judgement",
      entry: {
        green: false,
        failed: ["gate_named_this"],
        named: {
          gate_named_this: [],
        },
      },
      stale: false,
    },
    {
      why: "the second way to be no record of anything, found live on 2026-08-03: not green, and yet no red gate named. A run killed or crashed partway leaves exactly this, and every question anyone can ask of it comes back empty. It must be forgotten, because a reader that treats it as unproven is right and can never be satisfied - the entry cannot improve, and it will not be judged again while it sits there looking judged",
      entry: {
        green: false,
        failed: [],
        named: {},
      },
      stale: true,
    },
    {
      why: "green with nothing failed is the ordinary clean answer and must never be caught by the rule above. The two differ only in the verdict, which is the whole reason the verdict has to be read rather than the list alone",
      entry: {
        green: true,
        failed: [],
        named: {},
      },
      stale: false,
    },
    {
      why: "the third way to be no record of anything, found live on 2026-08-11: the gates came back red and named, and every one of them had run out of file handles. It reads as a full judgement and is a report about how busy the machine was. It must be forgotten, or the commit is refused for every app for ever and is never judged again because it already looks judged",
      entry: {
        green: false,
        failed: ["gate_named_this"],
        named: {
          gate_named_this: [],
        },
        said: {
          gate_named_this: " EMFILE: too many open files, scandir '..'",
        },
      },
      stale: true,
    },
    {
      why: "a gate that said an ordinary thing is KEPT even though the saying is now read. The machine running out is the only saying that unmakes a judgement, and every other complaint a gate has is exactly what the record is for",
      entry: {
        green: false,
        failed: ["gate_named_this"],
        named: {
          gate_named_this: ["thing_shipped_here"],
        },
        said: {
          gate_named_this: " thing_shipped_here is spelled two ways",
        },
      },
      stale: false,
    },
    {
      why: "one gate running out of file handles condemns the whole entry, beside gates that answered properly. They ran on one machine at one moment, so a machine that was full for one of them was full for the run",
      entry: {
        green: false,
        failed: ["gate_named_this", "gate_named_that"],
        named: {
          gate_named_this: ["thing_shipped_here"],
          gate_named_that: [],
        },
        said: {
          gate_named_this: " thing_shipped_here is spelled two ways",
          gate_named_that: " ENOMEM: not enough memory, read",
        },
      },
      stale: true,
    },
  ];
  return cases;
}
