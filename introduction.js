function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  console.log(params)
  return params;
}

// Function to set iframe source
function setIframeSrc() {
  const iframe = document.getElementById('frameworkFrame');
  const errorMessage = document.getElementById('error-message');
  const params = getURLParams();

  let iframeURL = null;

  if (!params || !params.get("fw")) {
    iframe.remove();
    errorMessage.classList.remove("hidden");
  } else {
    iframeURL = "https://script.google.com/macros/s/AKfycbwRehHImRzET9NXRNnej3NiuNyQytpBrCLRBfdQ6pzUHWL7mwaG4Aui5zlf_0gs6A/exec";
  }
  
  // if (!!params && params.get("public") == "true") {
  // } else {
  //     console.log("private")
  //     console.log("AKfycbxuEZ4I27fwucvgYf6ZKL3E400_kOgdeiOm46ETYnjGlJ2kkprIjpfYHccq4SLBbMY")
  //     iframeURL = 'https://script.google.com/macros/s/AKfycbxuEZ4I27fwucvgYf6ZKL3E400_kOgdeiOm46ETYnjGlJ2kkprIjpfYHccq4SLBbMY/exec';
  // }

  // Append parameters to iframe URL
  iframe.src = `${iframeURL}?${params}`;
}

function showPopup(popupId) {
  let popupBg = document.getElementById("popup_background");
  let popupBox = document.getElementById(popupId);
  popupBg.classList.remove('hidden');
  popupBox.classList.remove('hidden');
}

function hidePopups() {
  let popupBg = document.getElementById("popup_background");
  let publicPopupBox = document.getElementById("public_popup_box");
  let privatePopupBox = document.getElementById("private_popup_box");
  let cta = document.getElementById("continue_cta");
  popupBg.classList.add('hidden');
  privatePopupBox.classList.add('hidden');
  publicPopupBox.classList.add('hidden');

  const params = getURLParams();
  if (!!params && params.get("tt")=="true") {
      let cta = document.getElementById("continue_cta");
      cta.classList.remove('hidden');
  }
}

// Call the function on page load
setIframeSrc();
