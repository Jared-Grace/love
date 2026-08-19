export function youtube_innertube_context() {
  "Who youtube's own page says it is when it asks youtube for data - the smallest form of it that is still answered.";
  "The web player sends a much larger description of itself, but everything past the client's name and version is about the screen it is drawing on, and nothing here is drawing anything. Sending only the two that are read keeps the ask short and stops a field going stale that nobody depended on.";
  let context = {
    client: {
      clientName: "WEB",
      clientVersion: "2.20260817.01.00",
    },
  };
  return context;
}
