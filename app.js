class passWordGenerator {
    constructor() {
        this.UpperCaseCharaters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.LowerCaseCharaters = ['a', 'b', 'c', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.NumbersCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.SpecialCaseCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\',', ';', "'", '"', ':', '<', '.', '>', '/', '?', '~', '`'];
    }
    generateRandomNumber() {
        let randObj = [Math.floor(Math.random() * 27) + 0, Math.floor(Math.random() * 11) + 0, Math.floor(Math.random() * 32) + 0, Math.floor(Math.random() * 27) + 0];
        return randObj;
    }
    generateSuperStrongPassword() {
        this.password = [];
        for (let i = 0; i <= (Math.floor(Math.random() * 31) + 8); i++) {
            let Robj = this.generateRandomNumber();
            let R = Math.floor(Math.random() * 4) + 0;
            let Rno = Robj[R];
            if (R == 0) {
                this.password[i] = this.UpperCaseCharaters[Rno];
            }
            else if (R == 1) {
                this.password[i] = this.NumbersCharacters[Rno];
            }
            else if (R == 2) {
                this.password[i] = this.SpecialCaseCharacter[Rno];
            }
            else if (R == 3) {
                this.password[i] = this.LowerCaseCharaters[Rno];
            }

        }
        return this.password;
    }

    generateweakPassword() {
        this.password = [];
        for (let i = 0; i <= (Math.floor(Math.random() * 15) + 9); i++) {
            let Robj = this.generateRandomNumber();
            let R = Math.floor(Math.random() * 2) + 0;
            let a = [0, 3];
            let Rno = Robj[a[R]];

            if (a[R] == 0) {
                this.password[i] = this.NumbersCharacters[Rno];
            }
            else if (a[R] == 3) {
                this.password[i] = this.LowerCaseCharaters[Rno];
            }
        }
        return this.password;
    }

    generateStrongPassword() {
        this.password = [];
        for (let i = 0; i <= (Math.floor(Math.random() * 20) + 9); i++) {
            let Robj = this.generateRandomNumber();
            let R = Math.floor(Math.random() * 3) + 0;
            let a = [0, 1, 3];
            let Rno = Robj[a[R]];
            if (a[R] == 0) {
                this.password[i] = this.UpperCaseCharaters[Rno];
            }
            else if (a[R] == 1) {
                this.password[i] = this.NumbersCharacters[Rno];
            }
            else if (a[R] == 3) {
                this.password[i] = this.LowerCaseCharaters[Rno];
            }

        }
        return this.password;
    }

    generateFunnyPassword() {
        this.password = [];
        for (let i = 0; i <= (Math.floor(Math.random() * 10) + 9); i++) {
            let Robj = this.generateRandomNumber();
            let Rno = Robj[3];
            this.password[i] = this.LowerCaseCharaters[Rno];
        }
        return this.password;
    }
}


let password = new passWordGenerator();





document.body.onload = () => {
    main();
}


let main = () =>{
    let getOption = document.getElementById("op");
    getOption.onchange = () => {
      
        
        switch(getOption.value)
        {
            case '1':
                // super strong password
                let psst = password.generateSuperStrongPassword();
                let Sstp = psst.toString().replaceAll(',', '');
                setPassword(Sstp);
                console.log(Sstp);
                break;

            case '2':
                // strong password
                let pst = password.generateStrongPassword();
                let spt = pst.toString().replaceAll(',', '');
                setPassword(spt);
                console.log(spt);
                break;

            case '3':
                // weak password
                let pwt = password.generateweakPassword();
                let wpt = pwt.toString().replaceAll(',', '');
                setPassword(wpt);
                console.log(wpt);
                break;

            case '4':
                //funny password
                let pft = password.generateFunnyPassword();
                let fpt = pft.toString().replaceAll(',', '');
                setPassword(fpt);
                console.log(fpt);
                break;

        }
    }
}

let setPassword = (value) =>{
    let getmain = document.getElementById("main");
    getmain.innerHTML = "";
    getmain.innerHTML = `<button>X</button><h2>${value}</h2>`;
    getmain.firstChild.addEventListener("click", ()=>{
        createSelect();
    })
}


let createSelect = () =>{
    let getmain = document.getElementById("main");
    getmain.innerHTML = "";
    let select  = document.createElement("select");
    select.className = "form-select form-select-sm";
    select.setAttribute("aria-label", ".form-select-sm example");
    select.id = "op";

    let options = ["Select Option", "Generate Super Strong Password", "Generate Strong Password", "Generate Weak Password", "Generate Funny Password"];

    for(let i = 0; i<options.length; i++)
        {
            let option = document.createElement("option");
            option.value = i;
            option.innerText = options[i];
            if(i==0)
                option.setAttribute('selected', true);
            select.appendChild(option);

        }

    getmain.appendChild(select);
    main();
}