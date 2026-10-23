const usuario = localStorage.getItem("user")

if (usuario === null) {
    window.location.href = "./login.html"
}

export function deslogar(){
    localStorage.removeItem('user')
    window.location.href = '../login.html'
}
