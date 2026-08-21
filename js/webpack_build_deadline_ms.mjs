export function webpack_build_deadline_ms() {
  "How long one webpack build may run before it is ended and reported as a fault";
  "★ A BUILD THAT NEVER FINISHES USED TO RUN UNTIL SOMEBODY HAPPENED TO LOOK. On the 21st of August four were found still at full power after six and seven hours, and the four apps they belonged to had been quietly out of date the whole time. Nothing was waiting on them, so nothing complained, and the only reason they were found at all is that somebody was looking at the machine for another reason.";
  "Thirty minutes is far above every build ever measured here. One page rebuilt while somebody works takes between seven and seventeen seconds, and all thirty pages together take about two minutes. So a build that reaches this number is not slow, it is stuck, and ending it throws away nothing that was going to arrive.";
  "It is deliberately not shared with the deploy's number, though both are deadlines, because what sets them is different: a build is one program compiling files on this machine, and a deploy is mostly waiting on somebody else's.";
  let ms = 1800000;
  return ms;
}
