window.onload = () => {
    
    const menu = () => {

        let ativa = document.querySelector('.ativa')
        let fecha = document.querySelector('.fechar')
        let campo = document.querySelector('.menu-mob ul')

        ativa.addEventListener("click", () => {

            if(campo.classList.contains("menu")){
                campo.classList.remove("menu")
            }

            else{
                campo.classList.add("menu")
            }
        })

        fecha.addEventListener('click', () => {
            campo.classList.remove("menu")
        })

    }

    menu()
}