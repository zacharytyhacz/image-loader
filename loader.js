// creates img-id
function imgId() {
    let str = '';
    let i;
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (i = 0; i < 20; i++) {
        str.concat(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
    return str;
}

// triggers id method
document.querySelector("button").addEventListener("click", imgId);

// reads img file input
let img-file = document.getElementById("input");
let imgId = img-file;
