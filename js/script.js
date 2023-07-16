// Your JS code here

//You’ll write event listeners, event handlers, function expressions, and callback functions to calculate the numbers and return a message.

var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (Number) {
  subDuration = Number.target.value;
  //console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv =
  ("input",
  function () {
    var monthlyCost = 5;
    if (subType === "standard") {
      monthlyCost = 7;
    } else if (subType === "premium") {
      monthlyCost = 10;
    }
    var total = subDuration * monthlyCost;
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
  });
