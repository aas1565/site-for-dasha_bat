function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

function redirectOnAdminPage(event) {
    event.preventDefault();
    console.log(getCookie('kristal_auth'));
    getCookie('kristal_auth') === '' ? window.location.href = 'account' : window.location.href = 'admin';
}

document.querySelector('.adminPath').addEventListener('click', redirectOnAdminPage);

