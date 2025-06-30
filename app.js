const btnGrid = document.getElementById("btnGrid");
const btnList = document.getElementById("btnList");
const imageGrid = document.getElementById("imageGrid");
const allImages = [...imageGrid.children];

function setGridView() {
  // Update button styles
  btnGrid.classList.add("grid-btn");
  btnGrid.classList.remove("list-btn");
  btnList.classList.add("list-btn");
  btnList.classList.remove("grid-btn");

  // Show all images in 3-column grid
  allImages.forEach((imgBox) => {
    imgBox.classList.remove("col-12");
    imgBox.classList.add("col-sm-4");
    imgBox.style.display = "block";
  });
}

function setListView() {
  // Update button styles
  btnList.classList.add("grid-btn");
  btnList.classList.remove("list-btn");
  btnGrid.classList.add("list-btn");
  btnGrid.classList.remove("grid-btn");

  // Show only first 3 images in full-width column
  allImages.forEach((imgBox, index) => {
    imgBox.classList.remove("col-sm-4");
    if (index < 3) {
      imgBox.classList.add("col-12");
      imgBox.style.display = "block";
    } else {
      imgBox.style.display = "none";
    }
  });
}

// Event listeners
btnGrid.addEventListener("click", setGridView);
btnList.addEventListener("click", setListView);

// Default to grid view on load
setGridView();
