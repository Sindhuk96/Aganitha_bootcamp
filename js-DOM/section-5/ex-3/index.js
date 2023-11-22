function toggleTheme() {
    const body = document.body;
    const isChecked = document.getElementById('themeToggle').checked;

    if (isChecked) {
        body.classList.add('dark-theme');
        
    } else {
        body.classList.remove('dark-theme');
    }
}