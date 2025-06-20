document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const nameUser = document.querySelector('input[type="text"]');
    const age = document.querySelector('input[type="number"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const userName = nameUser.value.trim();
        const userAge = age.value;

        if (userAge < 18) {
            Swal.fire({
                title: `Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!.`,
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                },
                hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                }
            });
        }else if (userAge >= 18)  {
            Swal.fire({
                title: `Hola ${userName}, eres mayor de edad.¡Prepárate para grandes oportunidades en el mundo de la programación!.`,
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                },
                hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                }
            });
        }
        alertConfirm();
    })

    function alertConfirm(){
        alertify.alert('Demo').set({onshow:null, onclose:function(){ alertify.message('alert was closed.')}});
    }

});