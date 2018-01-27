function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}

  Phone.prototype.printInfo = function() {
    $("#printinfo").empty();

    $("#printinfo").html("<h1>The phone brand is " + this.brand + ", color is " + this.color + " and price is " + this.price + ".</h1>");
  };

  var SamsungGalaxy = new Phone("Samsung", "1399 zł", "black");
  var iPhone = new Phone("iPhone", "2040 zł", "white");
  var OnePlus = new Phone ("OnePluse One", "1299 zł", "black");

  var samsungImg = "<img src='https://cdn4.tgdd.vn/Products/Images/42/71081/Slider/samsung-galaxy-s6-edge-4.jpg'>";
  var iphoneImg = "<img src='https://allegro.stati.pl/AllegroIMG/PRODUCENCI/APPLE/MKY12ZMA/b.jpg'>";
  var plusImg = "<img src='https://dyw7ncnq1en5l.cloudfront.net/optim/news/64/64047/1_oneplus-5-all.jpg'>";

  $("#samsung").on("click", function(){
    $("#phoneImg").empty();
    $(samsungImg).appendTo($("#phoneImg"));
    SamsungGalaxy.printInfo();
  });

  $("#iphone").on("click", function(){
    $("#phoneImg").empty();
    $(iphoneImg).appendTo($("#phoneImg"));
    iPhone.printInfo();
  });

  $("#oneplus").on("click", function(){
    $("#phoneImg").empty();
    $(plusImg).appendTo($("#phoneImg"));
    OnePlus.printInfo();
  });