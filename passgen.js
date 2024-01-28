function generate(){
    const length = document.getElementById("length").value;
    const numbers = document.getElementById("numbers").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const symbol = document.getElementById("symbols").checked;
    const space = document.getElementById("space").checked;
    const noDuplicates = document.getElementById("noDuplicates").checked;
    //console.log(length);
    const password = generatePassword(parseInt(length),numbers,lowercase,uppercase,symbol,noDuplicates,space);

    document.getElementById("output").innerHTML = password;

}

function generatePassword(length,numbers,lowercase,uppercase,symbol,noDuplicates,spaces){
    let characters = '';

    if(numbers) characters+="1234567890";
    if(lowercase) characters+="abcdefghijklmnopqrstuvwxyz";
    if(uppercase) characters+="ABCDEFGHJKLMNOPQRSTUVWXYZ";
    if(symbol) characters+="!@#$%^&*()_+=-";
    if(spaces) characters+=" ";

    if(noDuplicates && (length>characters.length)){
        alert("Insufficient characters for derised password without duplicates!");
        return '';
    }

    let passwordArray = [];

    while(passwordArray.length < length){
        const character =characters[Math.floor(Math.random()*characters.length)];
        console.log(character);

        if(spaces && (passwordArray.length == length-1) && (character==' ')) continue;

        if(!noDuplicates || !passwordArray.includes(character)){
            passwordArray.push(character);
        }
    }

    return passwordArray.join('');
}