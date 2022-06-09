export function getOS() {
  var OSName = "Unknown";
  if (window.navigator.userAgent.includes("Windows")) OSName = "Windows";
  if (window.navigator.userAgent.includes("Mac")) OSName = "Mac";
  if (window.navigator.userAgent.includes("X11")) OSName = "UNIX";
  if (window.navigator.userAgent.includes("Linux")) OSName = "Linux";
  return OSName;
}
