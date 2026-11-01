export function location_hostname() {
  "The name of the site the page in front of the reader was loaded from, without its port.";
  let h = location.hostname;
  return h;
}
