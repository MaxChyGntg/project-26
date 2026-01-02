// random password generator  
  
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const input = document.getElementById("input");

    function generatepass(length, uppercase, lowercase, number, symbol){
        const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
        const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberchars = "123456789";
        const symbolchars = "!@#$%^&*()_+-=`'/?.,<>";

        let answer = "";
          answer += lowercase ? lowercasechars : "";
        answer += uppercase ? uppercasechars : "";
        answer += number ? numberchars : "";
        answer += symbol ? symbolchars : "";
        let password = "";
        for (let i = 0; i < length; i++){
            let random = Math.floor(Math.random() * answer.length)
            password += answer[random];

            
        }
        return password;
    }
    


    submit.addEventListener("click", () => {
        const panjang = parseInt(input.value, 10);
        result.textContent = generatepass(panjang, true, true, true, true); 
    });

    const length = "";
    const uppercase = true;
    const lowercase = true;
    const number = true;
    const symbol = true;
 
