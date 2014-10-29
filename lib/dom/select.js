function select (selector, startNode) {
  if (startNode === undefined) {
    startNode = document;
  }
  if (!(startNode instanceof Node)) {
    throw new TypeError("`startNode` must be a DOM node");
  }
  return [].slice.call(startNode.querySelectorAll(selector));
}

return select;