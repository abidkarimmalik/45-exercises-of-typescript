function mycarCreated(color, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        color: color,
        model: model,
    };
    //add additional options
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var mycar = mycarCreated("black", "2024", "manufacturer:suzuki", "auto:True");
console.log(mycar);
