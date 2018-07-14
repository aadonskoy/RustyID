var identityDocument; // Set in getIdentityDoc()

function getIdentityProperty(item) {
    return identityDocument.getElementById(item).innerHTML;
}

function getIdentityDoc(path) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", path, true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log("Document loaded in variable identityDocument")
            identityDocument = xhttp.responseXML;
        }
    };
    xhttp.send();
}