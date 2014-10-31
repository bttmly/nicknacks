function children (nodes) {
  return [].reduce.call(nodes, function (childNodes, node) {
    [].push.apply(childNodes, node.children);
    return childNodes;
  }, []);
}

module.exports = children;