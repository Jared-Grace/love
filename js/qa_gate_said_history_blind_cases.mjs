export function qa_gate_said_history_blind_cases() {
  ("What a gate complained about, and whether that complaint is the one meaning it was asked in a folder with no history at all.");
  ("The complaint a gate hands back is wrapped before anybody reads it. Git prints its own sentence on the second channel, the wrapper carries both channels into the message it throws, and the run prints that. So the shape that matters is the wrapped one, and it is written out here in full rather than shortened, because a reader matching only the bare sentence would answer no to every complaint the run actually sees.");
  ("The cases that must answer no carry the weight. A reader that said yes to everything would turn every red in the run into the same advice - move it to the other list - and send whoever read it to edit a roster instead of fixing their code. So a complaint about real faults, a complaint that talks about git without being that complaint, and a complaint about nothing at all are all here.");
  let cases = [
    {
      said:
        "git -C /dev/shm/qa_tree/abc/repos/love log --format=%H -- js/a.mjs exited with code 128\n\nSTDOUT:\n\n\nSTDERR:\nfatal: not a git repository (or any of the parent directories): .git\n",
      blind: true,
      why: "the shape the run really sees: the wrapper's own line, both channels, and git's sentence inside the second one",
    },
    {
      said: "fatal: not a git repository (or any of the parent directories): .git",
      blind: true,
      why: "git's sentence on its own, unwrapped, which is what it says wherever it is read from",
    },
    {
      said: "8 functions hold a local that hides a name already in scope",
      blind: false,
      why: "a gate finding real faults and counting them, which must never be answered with advice about which list it sits in",
    },
    {
      said:
        "the history names nobody for these functions, so git had nothing to say about who last touched them",
      blind: false,
      why: "a complaint about the history that is not this one - saying the word git is not the same as being told there is no repository",
    },
    {
      said: "",
      blind: false,
      why: "nothing said at all, which is what a gate that was never asked leaves behind",
    },
  ];
  return cases;
}
