export function git_walk_commits_count() {
  "How far back one walk of the history reaches when it is gathering the last commit to touch each file.";
  "Three thousand, which is far enough that every file a gate has ever named was touched inside it, and short enough that the walk costs about five seconds rather than about twenty-three. The whole history was measured at three hundred and fourteen thousand file-touches and this window at eighteen thousand, so the tail being given up is the part nobody has edited in months.";
  "Being short is safe rather than merely cheap, because a file whose last commit is older than this window is not answered wrongly - it is not answered at all, and the asking falls back to the one-file question that has no window. So this number trades speed against how often that fallback is paid, and never against the answer.";
  let count = 3000;
  return count;
}
