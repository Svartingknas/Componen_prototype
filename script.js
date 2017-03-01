
window.onload = function(){

  $('#myCarousel').carousel({
    interval: 5000
  })

  $('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
    	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

  //
  //
  // function handleError(jqXHR, textStatus, error){
  //   console.log(error);
  // };
  //
  // function cbArticles(data){
  // console.log(data);
  // }
  //
  // $.ajax({
  //   type: "GET",
  //   url: "data/articles.json",
  //   success: cbArticles,
  //   error: handleError
  //   }).then(function (res) {
  //   function cbArticles(data){
  //   console.log(res);
  //   }
  // });

  function ajax_getJson(){
    var hr = new XMLHttpRequest();
    hr.open("GET", "data/articles.json", true);
    hr.overrideMimeType("application/json");
    hr.setRequestHeader("Content-type", "application/json");
    hr.onreadystatechange = function() {
    if(hr.readyState == 4 && hr.status == 200) {
      var data = JSON.parse(hr.responseText);
      console.log(data);
      var results = document.getElementById("results");
      // results.innerHTML = data.Slide2.author + " is " + data.Slide2.articleDate+" and " + data.Slide2.text;
      // var carouselItem = " "
      //
      results.innerHTML = "";

      for (var obj in data) {
          results.innerHTML +=
          "<a> testing<img src=" + data[obj].image + " date" + data[obj].articleDate + "></a>" + "<div class='carousel-caption d-none d-md-block'>" +
          "<h5>" + data[obj].text + "</h5>" +
          "<p>" + "stuff here" + "</p>" + "</div>";
        }
      }
    }
    hr.send(null);
    results.innerHTML = "requesting...";
  }
  ajax_getJson();
  };











//     var active = document.getElementById("active");
//
//     active.innerHTML = `<div class="carousel-item active">
//             <div class="col-md-6"><a href="#"><img src="`+data.Slide1.image+`" class="img-fluid"></a>
//               <div class="carousel-caption d-none d-md-block">
//                <h5>`+data.Slide1.text+`</h5>
//                <p></p>
//              </div>
//             </div>
//           </div>`
//
//   var theRest = document.getElementById("theRest")
//         for (var obj in data) {
//             active.innerHTML += `<div class="carousel-item ">
//     <div class="col-md-6"><a href="#"><img src="` + data[obj].image + `" class="img-fluid"></a>
//     <div class="carousel-caption d-none d-md-block">
//     <h5>`+data[obj].text+`</h5>
//     <p>`+data[obj].author+`</p><p></div></div></div>`;
//   }
//
