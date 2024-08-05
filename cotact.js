const frmEmail = document.getElementById('frm-email');
frmEmail.addEventListener('submit', sendEmail);

const serviceID = 'service_ywvxjux';
const templateID = 'template_iife4ae';
const apiKey = 'g2VinMspcQY5Jh2sV';

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceID) 

    emailjs.sendForm(serviceID, templateID, frmEmail, apiKey)
    .then(result => Swal.fire('su mensaje s ha enviado'))
    .catch((error) => {
        Swal.fire({
            icon : "error",
            title : "Oops.......",
            text: "No ha sido posible enviar el mensaje!!!"
        })
    })
}