document.addEventListener('DOMContentLoaded', () => {
    Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
        e.addEventListener('keyup', (el) => {
            if(e.value.length>0){
                document.getElementsByClassName('bi')[i].getElementsByClassName.transform="rotate(180deg)";           }
            else{

            }
            e.style.borderColor = '#000';
        });
        e.addEventListener('blur', () => {
            e.style.borderColor = '';
        });
    });
});
