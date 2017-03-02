
window.onload = function(){

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

    function replaceItems (data) {
      for (let i in data) {
        // console.log("i is:", i);
        var id = data[i].image;
        // console.log("generating item", id);
        var carouselId = "carousel-" + i;
        var carouselItem = document.getElementById(carouselId)
        carouselItem.innerHTML =
        `<a href="#" class="thumbnail"><img src="`+data[i].image+`" class="img-fluid" alt="Image" style="max-width:100%;"></a>
        <div class="carousel-caption d-none d-md-block">
         <h5>`+data[i].text+`</h5>
         <p>`+data[i].author+`: `+data[i].articleDate+`</p>
       </div>`
      }
    }

    hr.onreadystatechange = function() {
    if(hr.readyState == 4 && hr.status == 200) {
      var data = JSON.parse(hr.responseText);
      // console.log(data);
      replaceItems(data);
      }
    }
    hr.send(null);
    carouselItem.innerHTML = "requesting...";
  }
  ajax_getJson();

  $(document).ready(function() {
      $('#Carousel').carousel({
          interval: 5000
      })
  });

};
