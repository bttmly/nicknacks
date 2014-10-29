var support = (function (Blob, URL) {
  return Blob && URL && (new Blob() instanceof Blob) && URL.createObjectURL
})(global.Blob, global.URL)

function downloadObj (obj, filename, contentType) {
  if (!support) {
    throw new Error("Browser doesn't support Blob constructor and/or URL.createObjectURL");
  }
  var link = document.createElement("a");
  link.download = filename;
  link.href = URL.createObjectURL(blob);
  link.dataset.downloadurl = [contentType, link.download, link.href].join(":");
  var evt = document.createEvent("MouseEvents")
  evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  link.dispatchEvent(evt);
}