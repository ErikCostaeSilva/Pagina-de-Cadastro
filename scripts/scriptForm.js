(()=>{
    const form=document.querySelector("#form")
    const inputFirstName=document.querySelector("#inputFirstName")
    const inputLastName=document.querySelector("#inputLastName")
    const inputEmail=document.querySelector("#inputEmail")
    const inputPassword=document.querySelector("#inputPassword")
    const divFirstName=document.querySelector(".firstNameDiv")
    const divLastName=document.querySelector(".lastNameDiv")
    const divEmail=document.querySelector(".emailDiv")
    const divPassword=document.querySelector(".passwordDiv")
    const listIconError=document.querySelectorAll("#icon-error")
    console.log(validateEmail(inputEmail.value));
    form.addEventListener("submit",(event)=>{
         if(inputFirstName.value===""){
             divFirstName.innerHTML=""
             addP("First Name cannot be empty",divFirstName)
             addIconError(0)
             event.preventDefault()
         }
         if(inputLastName.value===""){
             divLastName.innerHTML=""
             addP("Last Name cannot be empty",divLastName)
             addIconError(1)
             event.preventDefault()
         }
         if(inputEmail.value===""){
             divEmail.innerHTML=""
             addP("Email address cannot be empty",divEmail)
             addIconError(2)
             event.preventDefault()
         }else if(!validateEmail(inputEmail.value)){
            divEmail.innerHTML=""
             addP("Looks like this is not an email",divEmail)
             addIconError(2)
             event.preventDefault()
         }
         if(inputPassword.value===""){
             divPassword.innerHTML=""
             addP("Password cannot be empty",divPassword)
             addIconError(3)
             event.preventDefault()
         }else if(inputPassword.value.length<8 || inputPassword.value.length>16){
            divPassword.innerHTML=""
             addP("The password must contain  8-16 characters",divPassword)
             addIconError(3)
             event.preventDefault()
         }
    })
    function createP(){
        const p=document.createElement('p')
        return p
    }
    function addP(text,div){
        const p = createP()
        p.innerHTML+=text
        p.classList.add("erroSubmit")
        div.appendChild(p)
    }
    function addIconError(number){
        listIconError[number].style.display="inline-block"
    }
    function validateEmail(email){
        let re=/\S+@\S+\.\S+/;
        return re.test(email)
    }
})()