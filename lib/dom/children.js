function children (nodes) {
  return [].reduce.call(nodes, function (childNodes, node) {
    return [].push.apply(childNodes, node.children);
  }, []);
}

module.exports = children;