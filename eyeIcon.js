let inputPass= document.getElementById('pass'),
    icon= document.getElementById('icon');

    icon.onclick= function() {
        if(inputPass.className=='active') {
            inputPass.setAttribute('type','text');
            icon.className='far fa-eye';
            inputPass.className='';
        }
        else {
            inputPass.setAttribute('type','password');
            icon.className='far fa-eye-slash';
            inputPass.className='active';
        }
    }
