
var array = ['this', 'that', 'those', 'the other']

var capArray = array.map(function(i){
    var cap = i.toString();
    return cap.toUpperCase();
})

console.log(capArray);

