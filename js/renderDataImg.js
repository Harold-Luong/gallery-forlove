import imageGallery from "../asset/data.js";
import { animationClickBtn } from "./animationTagFilter.js";

renderLiImg(paginate(imageGallery, 5, 1));
renderBtnTag(paginate(imageGallery, 5, 1));

renderPagination(imageGallery);
//$(".pagination ul li:first a").addClass("active");
animationClickBtn();

function renderLiImg(paginate) {
  // Duyệt qua mảng imageGallery và tạo các phần tử <li> tương ứng
  const gallery = $(".image-gallery");
  $.each(paginate, function (index, item) {
    const listItem = $("<li>", { class: item.tag + " tile scale-anm all" });
    const img = $("<img>", { src: item.src, alt: item.tag });
    const overlay = $("<div>", {
      class: "overlay",
      "data-bs-toggle": "modal",
      "data-bs-target": "#showInforModal",
      "data-whatever": item.id,
    });
    const span = $("<span>", { text: item.title });
    overlay.append(span);
    listItem.append(img, overlay);
    gallery.append(listItem);
  });
}
function renderBtnTag(paginateObj) {
  const tagLocationMap = paginateObj.reduce((acc, item) => {
    if (!acc[item.tag]) {
      acc[item.tag] = { location: item.location };
    }
    return acc;
  }, {});
  const btnAll = $("<button>", {
    class: "btn-nav nav-filter btn-nav-active",
    "data-rel": "all",
    text: "All",
  });
  $(".toolbar").append(btnAll);

  const btns = Object.entries(tagLocationMap).map(([tag, { location }]) => {
    return $("<button>", {
      class: "btn-nav nav-filter",
      "data-rel": tag,
      text: location,
    });
  });
  $(".toolbar").append(btns);
}

//phân trang
function paginate(array, page_size, page_number) {
  //page_size mặc định la 5 item
  page_size = 5;
  // Đánh dấu trang đầu tiên là 1 thay vì 0
  --page_number;
  //trả về 1 mảng obj đã được phân trang
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}
//show phan trang
function renderPagination(array) {
  const itemsPerPage = 5;
  const paginationList = $(".pagination");
  const totalPages = Math.ceil(array.length / itemsPerPage); // tính số trang

  //render li
  for (let i = 0; i < totalPages; i++) {
    const pageButton = $(
      `<li class="page-item"><a class="page-link" href="#">${i + 1}</a></li>`
    );
    paginationList.append(pageButton);
  }
  // Kích hoạt trang khi nhấp vào
  let pageNum = 1;
  paginationList.on("click", "a", function (event) {
    event.preventDefault();
    pageNum = parseInt($(this).text());
    // Xóa các sản phẩm hiện có
    $(".image-gallery").empty();
    $(".toolbar").empty();
    //  console.log(paginate(array, itemsPerPage, pageNum));
    renderLiImg(paginate(array, itemsPerPage, pageNum));
    renderBtnTag(paginate(array, itemsPerPage, pageNum));
  });
}
