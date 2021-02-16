// $(document).ready(function () {

//     $("#form").submit(function (evt) {
//         evt.preventDefault();

//         let formData = new FormData($(this)[0]);

//         $.ajax({
//             url: '/upload',
//             type: 'POST',
//             data: formData,
//             async: false,
//             cache: false,
//             contentType: false,
//             enctype: 'multipart/form-data',
//             processData: false,
//             success: function (response) {
//                 $("#response").empty();
//                 if (response.status !== "error") {
//                     let displayInfo = response.filename + " : " + response.message + "";

//                     $("#response").append(displayInfo);

//                     let downloadLink = response.downloadUrl;
//                     let downloadAt = "    -> Download File: "
//                         + "" + downloadLink + "";

//                     $("#response").append(downloadAt);

//                     // add some css
//                     $("#response").css("display", "block");
//                     $("#response").css("background-color", "#e6e6ff");
//                     $("#response").css("border", "solid 1px black");
//                     $("#response").css("border-radius", "3px");
//                     $("#response").css("margin", "10px");
//                     $("#response").css("padding", "10px");
//                 } else {
//                     $("#response").css("display", "none");
//                     let error = response.error;
//                     alert(error);
//                 }
//             },
//             error: function (e) {
//                 alert("Fail! " + e);
//             }
//         });

//         return false;
//     })
// });