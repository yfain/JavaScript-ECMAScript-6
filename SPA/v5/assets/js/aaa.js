var xhr = new XMLHttpRequest();

xhr.open('GET', dataUrl);

xhr.onreadystatechange = function(){

    if (xhr.readyState == 4) {

        if((xhr.status >=200 && xhr.status <300) || xhr.status===304) {

            // We got the data. Get the value from one of the response attributes
            // e.g. xhr.responseText and process the data accordingly.

        } else {
            // We got an error. Process the error code and
            // display the content of the statusText attribute.
        }

    }
};