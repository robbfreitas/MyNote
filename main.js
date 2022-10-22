let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("botão clicado");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Digite algo para postar";
        console.log("Falha");
    } else {
        console.log("Sucesso");
        msg.innerHTML = "";
        aceitarDados();
    }
};

let dados = {};

let aceitarDados = () => {
    dados["text"] = input.value;
    criarPost();
}

let criarPost = () => {
    posts.innerHTML += `
    <div>
        <p>${dados.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
</div>`;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}