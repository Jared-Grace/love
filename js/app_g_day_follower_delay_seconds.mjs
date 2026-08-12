import { g_ripple_delay_seconds } from "./g_ripple_delay_seconds.mjs";
export function app_g_day_follower_delay_seconds(index) {
  "how long the person standing this far back in the line waits before setting off after the player.";
  "A line of people does not move as one piece. The player steps, then the person behind them steps into the space, then the person behind THAT one - so each place further back waits one more gap than the place in front of it, and the whole line ripples instead of sliding.";
  "The gap is small on purpose. It is a delay before a slide that itself takes a moment, so the people behind are already moving while the one in front is still finishing - a queue shuffling forward, not a set of turns being taken.";
  let seconds = g_ripple_delay_seconds(index);
  return seconds;
}
