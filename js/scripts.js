$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").append("<li>Why hello there!</li>");
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").append("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").append("<li>Pardon me. I meant no offense.</li>");
  });
  $("button#image").click(function() {
    $("ul#webpage").append("<img src='img/one.jpg' width='200' height='200'>");

  });
});
