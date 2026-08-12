export function page_boot_poll_ms() {
  "how often to look at a page that is still opening. short enough that a page which arrives quickly is not held back by the looking, long enough that the looking is not itself a load on a busy machine";
  let v = 250;
  return v;
}
