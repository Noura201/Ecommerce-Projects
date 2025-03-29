window.onload = function () {
  // Display Or Hide The Pages-List
  document
    .getElementById("pages-list")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var list = document.getElementById("nav-list2");
      if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
      event.stopPropagation();
      document.addEventListener("click", function (event) {
        if (!list.contains(event.target) && event.target !== list) {
          list.style.display = "none";
        }
      });
    });

  // Hide The List When We Click Any Link Inside It
  linksId = [
    "link1",
    "link2",
    "link3",
    "link4",
    "link5",
    "link6",
    "link7",
    "link8",
  ];
  linksId.forEach((id) => {
    document.getElementById(id).addEventListener("click", function () {
      document.getElementById("nav-list2").style.display = "none";
    });
  });

  // Display Or Hide The PopupSearchPage
  document
    .getElementById("search-icon")
    .addEventListener("click", function (event) {
      event.preventDefault();

      let searchIcon = document.getElementById("search-icon");
      let popupSearch = document.getElementById("popup-search");

      if (document.activeElement === searchIcon) {
        popupSearch.style.visibility = "visible";
        popupSearch.style.opacity = 1;
        document.getElementById("chevron-div-left").style.visibility = "hidden";
      } else {
        popupSearch.style.visibility = "hidden";
        popupSearch.style.opacity = 0;
      }
    });

  // Handle The PopupSearch Cursor To Keep/Return In/To The MainPage
  popupSearch = document.getElementById("popup-search");
  popupSearch.onclick = function () {
    popupSearch.style.visibility = "hidden";
    popupSearch.style.opacity = 0;
    document.getElementById("chevron-div-left").style.visibility = "visible";
  };
  document
    .getElementById("inner-section")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  // Handle The formInput To Return The MainPage After Typing Then Clicking "enter"
  popupSearch = document.getElementById("popup-search");
  document
    .getElementById("form-input")
    .addEventListener("keypress", function (event) {
      if (event.key == "enter") {
        popupSearch.style.visibility = "hidden";
        popupSearch.style.opacity = 0;
      } else {
        popupSearch.style.visibility = "visible";
        popupSearch.style.opacity = 1;
      }
    });
};

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
