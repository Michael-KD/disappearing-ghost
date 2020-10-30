$(".hide-button").click(function() {
  $(".ghost-image").hide();
});

$(".show-button").click(function() {
  $(".ghost-image").show();
});

$(".update-img-button").click(function() {
  $(".ghost-image").attr(
    "src",
    "https://i.pinimg.com/originals/61/36/01/6136018df38bda5e3185a727ca6a873e.png"
  );
});

$(".message-button").click(function() {
  let message = $(".input").val();
  $(".message").append("<p>" + message + "</p>");
});

$(".name-button").click(function() {
  let name = $(".input").val();
  if (name === "") {
    $(".name").text("Give me a name!");
  } else {
    $(".name").text("My name is " + name + "!");
  }

});

$(".hidden").click(function() {
  $(".name").text("Boo!");
});
