if (window.location.href == "https://www.laobp.in/Home/Registration") {
  if (window.screen.width < 290) {
    document.querySelector(
      "body > div > div > div.container > div"
    ).style.marginTop = "8em";
  } else {
    document.querySelector(
      "body > div > div > div.container > div"
    ).style.marginTop = "10em";
  }
} else if (window.location.href == "https://www.laobp.in/admin/ItemList") {
  $("#demo-dt-basic").DataTable({
    searching: true,
    ordering: true,
    scrollCollapse: true,
    scroller: true,
    bLengthChange: true,
    pageLength: 10,
    bStateSave: true,
    destroy: true,
    ajax: {
      url: "../admin/ItemList_VendorWise",
      type: "POST",
      datatype: "json",
    },
    columns: [
      { title: "Sr No.", data: "tempid", name: "tempid", autoWidth: true },
      {
        title: "Item Name ",
        data: "item_nm",
        name: "item_nm",
        autoWidth: true,
      },
      {
        title: "Category",
        data: "category",
        name: "category",
        autoWidth: true,
      },
      {
        title: "Sub Category",
        data: "subcategory",
        name: "subcategory",
        autoWidth: true,
      },
      {
        title: "Brand ",
        data: "brand_name",
        name: "brand_name",
        autoWidth: true,
      },
      { title: "Color ", data: "color_nm", name: "color_nm", autoWidth: true },
      { title: "Model", data: "model_nm", name: "model_nm", autoWidth: true },
      { title: "Size/Pack", data: "pack", name: "pack", autoWidth: true },
      {
        title: "Selling Price ",
        data: "pack_price",
        name: "pack_price",
        autoWidth: true,
      },
      //{ title: "CGST ", "data": "cgst", "name": "cgst", "autoWidth": true },
      //{ title: "SGST ", "data": "sgst", "name": "sgst", "autoWidth": true },
      //{ title: "IGST ", "data": "igst", "name": "igst", "autoWidth": true },
      { title: "MRP ", data: "mrp", name: "mrp", autoWidth: true },
      //{ title: "Qty", "data": "avl_qty", "name": "avl_qty", "autoWidth": true },
      //{ title: "SKU Code", "data": "sku_code", "name": "sku_code", "autoWidth": true },
    ],
    dom: "Bfrtip",
    buttons: [
      "csv",
      "excel",
      "pdf",
      //'excel', 'pdf'
    ],
  });
}
document
  .querySelector(".navbar")
  .style.setProperty("background-color", "#0D47A1", "important");
if (
  document.querySelector(
    "body > div.wrapper > div.main-panel.ps > nav > div > div.navbar-wrapper > a:nth-child(2) > label"
  )
) {
  Android.setVendorName(
    document.querySelector(
      "body > div.wrapper > div.main-panel.ps > nav > div > div.navbar-wrapper > a:nth-child(2) > label"
    ).innerHTML
  );
}
