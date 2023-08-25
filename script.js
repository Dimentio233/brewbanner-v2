$(document).ready(function() {

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1500;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    // $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    // $(pgPrefix + (curPage - 1)).addClass("inactive");
    // $(pgPrefix + (curPage + 1)).removeClass("active");

      // Remove the "active" class from all pages
  $(".skw-page").removeClass("active");

  // Add the "active" class to the current page
  $(pgPrefix + curPage).addClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

  $("#scrollToPage1").click(function() {
    curPage = 1; // Set current page to Page 1
    pagination(); // Trigger the pagination function to scroll to Page 1
    console.log(curPage)
  });

  $("#scrollToPage2").click(function() {
    curPage = 2; // Set current page to Page 2
    pagination(); // Trigger the pagination function to scroll to Page 2
    console.log(curPage)
  });

  $("#scrollToPage3").click(function() {
    curPage = 3; // Set current page to Page 3
    pagination(); // Trigger the pagination function to scroll to Page 3
    console.log(curPage)
  });

  $("#scrollToPage4").click(function() {
    curPage = 4; // Set current page to Page 4
    pagination(); // Trigger the pagination function to scroll to Page 4
    console.log(curPage)
  });

  $("#scrollToPage5").click(function() {
    curPage = 5; // Set current page to Page 5
    pagination(); // Trigger the pagination function to scroll to Page 5
    console.log(curPage)
  });

  $("#scrollToPage6").click(function() {
    curPage = 6; // Set current page to Page 5
    pagination(); // Trigger the pagination function to scroll to Page 5
    console.log(curPage)
  });
});