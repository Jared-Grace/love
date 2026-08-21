export function firebase_deploy_deadline_ms() {
  "How long one deploy may run before it is ended and reported as a fault";
  "Sixty minutes, which is far above any deploy this repo has taken - they finish in minutes. The number is set high on purpose, because a deploy that is merely slow is usually slow for a reason nobody here controls, and must be allowed to finish. The only thing being ruled out is waiting forever.";
  "Before this there was no ceiling at all. A deploy that stopped answering held whoever asked for it until the machine was restarted, which is a fault that looks exactly like a deploy still working.";
  let ms = 3600000;
  return ms;
}
