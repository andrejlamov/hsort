Hsort = {
  split: function(list, compare, access) {
    if(list.length == 0) return [[]];

    list.sort(function(a,b) {
      return compare(access(a), access(b));
    });

    var splitted = [];
    var pivot = list.splice(0, 1)[0];
    splitted.push([pivot]);
    var idx = 0;

    list.forEach(function(d) {
      if(access(d) == access(pivot)) {
        splitted[idx].push(d);
      } else {
        splitted.push([d]);
        pivot = d
        idx++;
      }
    });
    return splitted;
  },

  flatten: function(list) {
    return list.reduce(function(acc, d){
               d.forEach(function(d0) {
                 acc.push(d0);
               })
               return acc;
           }, []);
  }
}
