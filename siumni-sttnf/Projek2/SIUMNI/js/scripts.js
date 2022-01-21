// Empty JS for your own code to be here
function login(){
//	alert("Anda Berhasil Login")
	let user = document.getElementById("recipient-name");
	let pass = document.getElementById("message-text");
	
	console.log("recipient-name :" + user.value);
	console.log("message-text :" + pass.value);
	if(user.value=="admin" && pass.value=="1234"){
		alert("Selamat Anda Berhasil Login Sebagai Admin");
		window.location = "Form_Registrasi_Tempat_Rekreasi_Wisata.html";
		return false;
	}
	else if(user.value=="siumni" && pass.value=="12345"){
		alert("Selamat Datang Alumni STTNF");
		window.location = "index.html";
		return false;
	}
	else{
		alert("Username dan Password anda salah !!!");
	}
}