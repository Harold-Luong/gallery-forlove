import imageGallery from "../asset/data.js";
import { animationClickBtn } from "./animationTagFilter.js";

var locations = [];
var tags = [];
// Duyệt qua mảng imageGallery và tạo các phần tử <li> tương ứng
const gallery = $(".image-gallery");
$.each(imageGallery, function (index, item) {
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

const tagLocationMap = imageGallery.reduce((acc, item) => {
  if (!acc[item.tag]) {
    acc[item.tag] = { location: item.location };
  }
  return acc;
}, {});

const btns = Object.entries(tagLocationMap).map(([tag, { location }]) => {
  return $("<button>", {
    class: "btn-nav nav-filter",
    "data-rel": tag,
    text: location,
  });
});

$(".toolbar").append(btns);

animationClickBtn();
