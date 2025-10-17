document.addEventListener('DOMContentLoaded', () => {
    const lumosButton = document.getElementById('lumosButton');
    const splashScreen = document.getElementById('splashScreen');
    const mainContent = document.getElementById('mainContent');
    const startButton = document.getElementById('startButton'); 

    // --- LUMOS AÇILIŞ EFEKTİ ---
    if(lumosButton) {
        lumosButton.addEventListener('click', () => {
            lumosButton.style.opacity = '0'; 
            lumosButton.style.pointerEvents = 'none';
            splashScreen.classList.add('lumos-glow-effect');

            // Not: Zamanlamalar CSS'teki animasyon/transition süreleriyle eşleşmelidir.
            // 1200ms = CSS lumosGlow animasyonu süresi (1.2s)
            setTimeout(() => {
                splashScreen.style.opacity = '0';
                // 500ms = CSS opacity transition süresi (0.5s)
                setTimeout(() => {
                    splashScreen.style.pointerEvents = 'none'; 
                    mainContent.style.display = 'flex'; 
                }, 500); 
            }, 1200); 
        });
    }

    // --- EXPULSO EFEKTİ VE SAYFA YÖNLENDİRMESİ ---
    if(startButton) {
        startButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            startButton.classList.add('expulso-blast');

            // 600ms = EXPULSO animasyon süresi (0.6s) sonra yeni sayfaya yönlendir
            setTimeout(() => {
                window.location.href = startButton.getAttribute('href'); 
            }, 600);
        });
    }
});