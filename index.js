let username = document.getElementById("username");
        let password = document.getElementById("password");
        let flag = 1;


        function validateform() {
            if (username.value == "") {
                document.getElementById("userError").innerHTML = "plase enter your name";
                flag = 0;

            } else if (username.value.length < 3) {
                document.getElementById("userError").innerHTML = "user name minimam 3 charactor";
                flag = 0;
            }
            else{
                document.getElementById("userError").innerHTML = "";
                flag = 1;
            }
            if (password.value == "") {
                document.getElementById("passError").innerHTML = " password is empty";
                flag = 0;
            
            } else if (password.value.length < 8) {
                document.getElementById("passError").innerHTML = "first char is upercase and spacial char is @ $ % &  requrd";
                flag = 0;
            }
            else{
                document.getElementById("passError").innerHTML = "";
                flag = 1;
                
            }
            

            if(flag){
                return true
            }
            else{
                return false
            }
        }
        // function validateform(){
            // document.getElementById(submit).onclick.innerHTML = ""
        // }