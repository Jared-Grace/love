export async function app_g_day_followers_settle() {
  "wait for the back of the line to have set off, before the player takes their next step.";
  "Without it the player's next step arrives while the people behind are still waiting their turn, and each of them is sent somewhere new before they have moved at all - so the tail of a walking line stands still the whole way and then slides across the map at the end. Waiting costs the walk the length of the ripple, which is what a procession is: it goes at the speed of the person at the back.";
  let followers = app_g_day_state_property("followers");
  let none = list_empty_is(followers);
  if (none) {
    return;
  }
  let last = list_size_subtract(followers, 1);
  let seconds = app_g_day_follower_delay_seconds(last);
  await sleep_seconds(seconds);
}
