const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeIMG = document.querySelector("#qr-code img");


// Eventos

// Gerador do QR Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando Código...";

    qrCodeIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeIMG.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código gerado!";
    })
};

qrCodeBtn.addEventListener("click", () =>{
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) =>{
    if(e.code === "Enter") {
    generateQrCode();
}
});

// Limpar o input do Qr Code

qrCodeInput.addEventListener("keyup", () =>{
    if (!qrCodeInput.value) {
            container.classList.remove("active");
            qrCodeBtn.innerText = "Gerar QR Code";
    }
})