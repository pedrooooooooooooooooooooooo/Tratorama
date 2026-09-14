// AGUARDA O CARREGAMENTO COMPLETO DO HTML
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // VERIFICA SE JÁ EXISTE UMA PREFERÊNCIA SALVA
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        themeIcon.textContent = '🌙';
    }

    // EVENTO DE CLIQUE NO BOTÃO
    themeToggleBtn.addEventListener('click', () => {
        // Alterna a classe dark-theme no elemento <body>
        document.body.classList.toggle('dark-theme');

        let theme = 'light';
        
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }

        // Salva a escolha do usuário no navegador
        localStorage.setItem('theme', theme);
    });
});
