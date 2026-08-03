export function process_line_sleep_loop_is_cases() {
  "Command lines a process can be running, and whether each one is a loop waiting by sleeping.";
  "The yes cases are real lines, copied from four sessions found stopped at once on 2026-08-03 - together they had been waiting for eighty-eight hours. Real ones are used because every one of them looked reasonable when it was written, and an invented line would be written already knowing the answer.";
  "What each was waiting for differs every time and none of it matters here, which is the whole finding: one polls a process by name and finds its own shell, one asks whether a file exists that is created before the run starts and so always does, one waits for a file to fill that only fills when the run ends, and one has no exit condition at all. Four bugs, one shape.";
  "The no cases are the ordinary traffic on this machine - a run, a shell carrying a run, and a line that merely says the word sleep - because a report of stopped sessions is only read if it is empty when nothing is wrong.";
  let cases = [
    {
      name: "waiting on a name the waiter's own line carries",
      line: '/bin/bash -c eval \'while pgrep -f "timeout 900 node scripts/ai.mjs qa_gate_run" >/dev/null; do sleep 10; done; echo "GATE FINISHED"\'',
      sleep_loop: true,
      why: "the pattern it searches command lines for is written in its own command line, so it finds itself and the answer is yes for as long as the machine is up",
    },
    {
      name: "waiting for a file to stop existing that is made before the run starts",
      line: "/bin/bash -c eval 'until [ ! -e /tmp/tasks/bh2yh3csk.output ] || ! pgrep -f \"node scripts/ai.mjs qa_gate_run\" >/dev/null; do sleep 10; done; echo DONE'",
      sleep_loop: true,
      why: "the file is opened when the run begins and outlives it, so the first half is false forever and the second half finds the waiter itself - two conditions, neither reachable",
    },
    {
      name: "waiting for a file to fill that fills only at the end",
      line: "/bin/bash -c eval 'until [ -s /tmp/tasks/bvuhwznk3.output ]; do sleep 20; done; echo finished'",
      sleep_loop: true,
      why: "what a run prints is held until it exits, so the file is empty the whole time it works - and when the run died it stayed empty, leaving nothing that could ever end the loop",
    },
    {
      name: "a loop with no way out at all",
      line: "/bin/bash -c eval 'prev=\"\"; while true; do cur=$(node scripts/ai.mjs g_verify_loop_check_line); if [ \"$cur\" != \"$prev\" ]; then prev=\"$cur\"; fi; sleep 3; done'",
      sleep_loop: true,
      why: "nothing is wrong with its condition because it has none. This is also the costly one: it starts a whole run every three seconds, so unlike the others it does not merely stop a session, it loads the machine every other session shares",
    },
    {
      name: "a run of this repo's own",
      line: "node /home/j/repos/love/scripts/ai.mjs qa_gate_run",
      sleep_loop: false,
      why: "working, not waiting - and the thing every waiter here is waiting for",
    },
    {
      name: "a shell carrying a run",
      line: "/bin/bash -c eval 'node scripts/ai.mjs qa_app_commit_deployable g 2aba7dba2b 2>&1 | tail -30'",
      sleep_loop: false,
      why: "a shell told to run something carries the whole command as its own line, which is what makes lines hard to read - but there is no loop in it, so it is simply waiting for its child the way a shell should",
    },
    {
      name: "a line that only says the word",
      line: "node scripts/ai.mjs functions_prose_search sleep",
      sleep_loop: false,
      why: "one of the three words on its own is ordinary. Asking for all three together is what keeps a search for the word from being read as a session that has stopped",
    },
  ];
  return cases;
}
