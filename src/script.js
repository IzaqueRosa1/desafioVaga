function somar () {
    const stValue = document.querySelector("#value1");
    const scValue = document.querySelector("#value2");

    const st = stValue.value
    const nd = scValue.value
    
    

    if (st == null || nd == null) {
        alert("Os valores não podem ser nulos. ")
    };
    if (st.trim() == "" || nd.trim() == "") {
        alert("Os campos não podem estar vazios. ")
    };
    if (st < 0 || nd < 0){
        alert("O valor  digitado nos campos não podem ser menor que zero..")
    }else {
        const num1 = parseInt(st)
        const num2 = parseInt(nd)
        const soma = num1 + num2
        
        const result = document.querySelector(".result")

        const div1 = document.createElement('p')
        div1.classList.add('result')
        div1.innerHTML = soma

        result.appendChild(div1)
    }


}