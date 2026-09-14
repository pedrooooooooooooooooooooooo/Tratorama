document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const rootElement = document.documentElement; // Seleciona a tag <html>

    // Recupera o tema salvo no navegador (se houver)
    const savedTheme = localStorage.getItem('tratorama_theme');

    // Função que aplica o tema visualmente
    function applyTheme(theme) {
        if (theme === 'dark') {
            rootElement.classList.add('dark-theme');
            themeIcon.textContent = '☀️';
        } else {
            rootElement.classList.remove('dark-theme');
            themeIcon.textContent = '🌙';
        }
    }

    // Aplica o tema salvo no carregamento
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light'); // Padrão claro (fundo branco)
    }

    // Alterna o tema ao clicar no botão
    themeToggleBtn.addEventListener('click', () => {
        const isDark = rootElement.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';

        applyTheme(newTheme);
        localStorage.setItem('tratorama_theme', newTheme);
    });
});
