const widget = uploadcare.Widget("[role=uploadcare-uploader]");
const preview = document.getElementById("preview");

function handleUploadProgress(fileInfo) {
  preview.src = fileInfo.cdnUrl;
}

widget.onUploadComplete(handleUploadProgress);
