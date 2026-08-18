export function app_index_dev_pages() {
  "The plain pages worth reaching by one tap while something is being looked into - the ones with no app behind them, kept by hand under the working copy.";
  "A page made by hand is invisible unless it is listed somewhere: nothing generates it, so nothing else will ever mention it, and the only way to reach it is to peck its address into a phone. Every new one belongs here the moment it is written.";
  "These show only on a machine on this same network, alongside the working links, so nothing here is ever seen by a reader of the deployed site.";
  let r = [
    {
      page: "typing.html",
      label: "Typing test",
      text: "One writing box and nothing else, so a phone that cannot type into an app can try the same thing with none of that app on the page",
    },
  ];
  return r;
}
