import imageGallery from "../asset/data.js";
$(() => {
  // const modal = $(
  //   '<div class="modal fade" id="showInforModal" tabindex="-1" role="dialog" aria-hidden="true">'
  // );
  const modal = $("#showInforModal");
  const modalDialog = $(
    '<div class="modal-dialog modal-dialog-centered modal-xl">'
  );
  const modalContent = $('<div class="modal-content">');
  const modalHeader = $('<div class="modal-header">');
  const modalTitle = $('<h5 class="modal-title"></h5>');
  const modalCloseButton = $(
    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
  );
  const modalBody = $('<div class="modal-body">');
  const modalRow = $('<div class="row">');
  const modalImageCol = $('<div class="col-md-4">');
  const modalImage = $('<img class="img-fluid" src="" alt="">');
  const modalTextCol = $('<div class="col-md-8">');
  const modalTag = $('<h3 class="tag"></h3>');
  const modalDescription = $('<p class="description"></p>');

  modal.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(modalHeader, modalBody);
  modalHeader.append(modalTitle, modalCloseButton);
  modalBody.append(modalRow);
  modalRow.append(modalImageCol, modalTextCol);
  modalImageCol.append(modalImage);
  modalTextCol.append(modalTag, modalDescription);

  $("#showInforModal").on("show.bs.modal", function (event) {
    $("body").append(modal);
    const button = $(event.relatedTarget);
    const id = button.data("whatever");
    const item = imageGallery.find((x) => x.id === id);
    console.log(item);
    modalTitle.text(item.location);
    modalImage.attr("src", item.src);
    modalDescription.text(item.description);
    modalTag.text(item.title);
  });
});
