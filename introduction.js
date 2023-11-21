function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    console.log(params)
    return params;
}

// Function to set iframe source
function setIframeSrc() {
    const iframe = document.getElementById('frameworkFrame');
    const params = getURLParams();

    let iframeURL = null;
    if (!!params && params.get("public") == "true") {
        iframeURL = "https://script.google.com/macros/s/AKfycbyhj1SfIqfu0P5VPB82ind8pf1XRoyQ0j0HZmMl9KRLjzxUenIvEIRdNWgLCCk_ovA/exec";
    } else {
        console.log("private")
        iframeURL = 'https://script.google.com/macros/s/AKfycby9CMl7yGdZUF1u9gW52wR_Wt4zxIGWRjgcQxe9NAxD0t_phkXRtTY5agSsTIJv8JM/exec';
    }

    // Append parameters to iframe URL
    iframe.src = `${iframeURL}?${params}`;
}

function setPopup() {
    const params = getURLParams();
    if (!!params && params.get("tt")=="true") {
        showPopup("public_popup_box");
        let title = params.get("dt");
        let titleDiv = document.getElementById("popup_title");
        titleDiv.innerHTML = title;
    } else if (!!params && params.get("nv")=="true") {
        showPopup("private_popup_box");
    }
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
setTimeout(function() {
    setPopup();
},2000);