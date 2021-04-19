document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#button").addEventListener("click", () => {

        let password = document.querySelector("#input").value;
        let passverify = document.querySelector("#secondinput").value;
        console.log("imherewith", password);
        console.log("imherewith", passverify);


    
            if (password != passverify)
            {
                alert("the passwords entered don't match");
            }
           else if (password.length < 8 && passverify.length < 8)
            {
                alert("the passwords are not at least 8 characters long")
            }
            else
            {
                alert ("welcome!")
            }
        
    })
})