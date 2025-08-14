export function git_push_schedule() {
  `schtasks /create /sc daily /st 08:00 /tn "GitPushDaily" /tr "cmd /c cd /d C:\Users\chris\love && git push"
`;
}
