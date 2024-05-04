//city function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//calling function
describe_city("KARACHI");
describe_city("LAHORE");
describe_city("BEIJING", "CHINA");
