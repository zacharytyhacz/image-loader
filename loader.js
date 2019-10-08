// creates img-id
function createId() {
	console.log("here");
    let str = '';
    let i;
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (i = 0; i < 20; i++) {
        str.concat(chars.charAt(Math.floor(Math.random() * chars.length)));
    }

	// to get the uploaded file, you can access the `files` array and first file
	let imgFile = document.getElementById("input").files[0];

	// look up javascript's File() object and you can change the name and see file size and stuff


	// get the <form> id and submit it to send the form data to the PHP file
}

// triggers id method
document.querySelector("button").addEventListener("click", createId);


// moved the code that was here into the createID function
