function changeTheme(){
    theme = document.getElementById('colors').value;
    document.body.style.backgroundColor = theme == 1 ? 'var(--primary)' : theme == 2 ? 'var(--secundary)' : theme == 3 ? 'var(--terciary)' : 'var(--quaternary)';
}

