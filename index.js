module.exports = function (ary, item) {
  if (ary.length === 0) {
    return [];
  }

  var i = -1, indexes = [];

  while ((i = ary.indexOf(item, i + 1)) !== -1) {
    indexes.push(i);
  }

  return indexes;
}
