var data;
function getData(params) {
    data = params;
    //document.getElementById('status').innerText = data;
    // document.getElementsByClassName('status').innerText = data;
    // document.getElementsByTagName('span').textContent = data;
    var totalspan = document.getElementsByTagName('span');
    for (i=0; i<totalspan.length; i++){
        totalspan[i].textContent = data;
    }
}

