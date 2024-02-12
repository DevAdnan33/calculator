let string = ""

let btn = document.querySelectorAll(".btn")

Array.from(btn).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.getElementById("form").value = string
        } else if (e.target.innerHTML == 'c') {
            string = ""
            document.getElementById("form").value = string
        }
        string = string + e.target.innerHTML;
        document.getElementById("form").value = string

    })
})