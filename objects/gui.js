const pages = ['capa', 'tutorial_carne', 'receita_burguer', 'receita_hamburguer', 'receita_cheeseburguer'];

let numPg = 0;
function openModal(element) {
    element.style.display = 'flex'; // Use flex to center
}
function closeModal(element) {
    element.style.display = 'none';
}

function pageForward(){
    if(pages[numPg+2]==undefined){
        getElement('LeftA').style.display='none';
    }
    if(pages[numPg+1]!==undefined){
        numPg++;
        getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
        getElement('RightA').style.display='flex';
    }else{
        getElement('LeftA').style.display='none';
    }
}
function pageBackward(){
    if(pages[numPg-1]!==undefined){
        numPg--;
        getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
        getElement('LeftA').style.display='flex';
    }else{
        getElement('RightA').style.display='none';
    }
}

window.onload = () => {
    getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
}

    const closeButton = document.querySelector('.modal__close-btn');
    // Function to open the modal
    window.onkeydown = (event) => {
        if (event.key == 'e' && event.keyCode == 69) {
            if (getElement('menuModal').style.display == 'none' && getElement('recipesModal').style.display=='none') {
                openModal(getElement('menuModal'));
                getElement('menu').innerHTML = "<div class='menu__option' onclick='closeModal()'>Voltar ao Jogo</div>" +
                    "<div class='menu__option' onclick='feedback()'>Configurações</div>" +
                    "<div class='menu__option'>Opção 3</div>";
            } else {
                closeModal(getElement('menuModal'));
            }
        }
        if (event.key == 'r' && event.keyCode == 82) {
            if (getElement('recipesModal').style.display == 'none' && getElement('menuModal').style.display=='none') {
                openModal(getElement('recipesModal'));
                
            } else {
                closeModal(getElement('recipesModal'));
            }
        }
        if (event.key == 'ArrowRight' && event.keyCode == 39) {
          pageForward()
        }
        if (event.key == 'ArrowLeft' && event.keyCode == 37) {
          pageBackward()
        }
    }

    closeModal(getElement('recipesModal'));
    closeModal(getElement('menuModal'));
}

/* game-performance-monitor.js (cole no console ou inclua no seu HTML)

(function() { // Usamos uma IIFE para isolar o escopo
    console.clear(); // Limpa o console para uma análise mais limpa
    console.log('%c--- Monitor de Performance do Jogo Ativado ---', 'color: #007bff; font-weight: bold; font-size: 1.2em;');
    console.log('%cDigite "FinalizarAnalise()" no console para parar o monitoramento e ver o relatório final.', 'color: #007bff;');


    if (!window.performance) {
        console.error('API de Performance não suportada neste navegador.');
        return;
    }

    const performanceData = {
        loadMetrics: {},
        resourceLoads: [],
        interactionLatencies: [],
        longTasks: [],
        memoryUsageHistory: [], // Armazenar histórico de memória
        fpsData: [],
        lastFrameTime: 0,
        frameCount: 0
    };

    let performanceObserver = null;
    let memoryIntervalId = null;
    let animationFrameId = null; // Para controlar o requestAnimationFrame
    const eventListeners = []; // Para armazenar referências aos listeners de evento

    // --- 1. Monitoramento de Carregamento (navigation e resource) ---
    const setupPerformanceObserver = () => {
        if (window.PerformanceObserver) {
            performanceObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    if (entry.entryType === 'navigation') {
                        performanceData.loadMetrics = {
                            domContentLoaded: (entry.domContentLoadedEventEnd - entry.navigationStart).toFixed(2),
                            loadEvent: (entry.loadEventEnd - entry.navigationStart).toFixed(2),
                            fcp: (performanceData.paint && performanceData.paint.firstContentfulPaint) ? performanceData.paint.firstContentfulPaint.toFixed(2) : 'N/A'
                        };
                        console.log(`%c[Carregamento]`, 'color: #1a73e8; font-weight: bold;', `DOM Carregado: ${performanceData.loadMetrics.domContentLoaded}ms, Tudo Carregado: ${performanceData.loadMetrics.loadEvent}ms`);
                    } else if (entry.entryType === 'resource' && entry.duration > 10) { // Loga recursos que demoram mais de 10ms
                        performanceData.resourceLoads.push({
                            name: entry.name.substring(entry.name.lastIndexOf('/') + 1, entry.name.length), // Nome curto
                            type: entry.initiatorType,
                            duration: entry.duration.toFixed(2)
                        });
                        // console.log(`%c[Recurso]`, 'color: #9c27b0;', `${entry.name.substring(entry.name.lastIndexOf('/') + 1, entry.name.length)} (${entry.initiatorType}) - ${entry.duration.toFixed(2)}ms`);
                    } else if (entry.entryType === 'longtask') {
                        performanceData.longTasks.push({
                            duration: entry.duration.toFixed(2),
                            startTime: entry.startTime.toFixed(2),
                            name: entry.name,
                            attribution: entry.attribution
                        });
                        console.warn(`%c[Long Task]`, 'color: #d32f2f; font-weight: bold;', `Main thread bloqueado por ${entry.duration.toFixed(2)}ms!`);
                    } else if (entry.entryType === 'paint') {
                        if (entry.name === 'first-contentful-paint') {
                            performanceData.paint = performanceData.paint || {};
                            performanceData.paint.firstContentfulPaint = entry.startTime;
                        }
                    }
                });
            });

            performanceObserver.observe({
                entryTypes: ['navigation', 'resource', 'longtask', 'paint'],
                buffered: true
            });
        } else {
            console.warn('PerformanceObserver não disponível. Métricas de carregamento e long tasks serão limitadas.');
        }
    };

    // --- 2. Monitoramento de Interações ---
    const addInteractionListener = (eventType) => {
        const handler = (event) => {
            const startTime = performance.now();
            // Seu código de manipulador de evento real (deve ser o do jogo) iria aqui
            // ... (seu código de jogo que reage ao clique/tecla) ...
            const endTime = performance.now();
            const duration = (endTime - startTime).toFixed(2);
            performanceData.interactionLatencies.push({
                type: eventType,
                duration: duration,
                target: event.target ? event.target.tagName : 'N/A',
                timestamp: startTime.toFixed(2)
            });
            console.log(`%c[Interação]`, 'color: #FF5722;', `${eventType} em ${event.target ? event.target.tagName : 'document'} - Resposta: ${duration}ms`);
        };
        document.addEventListener(eventType, handler);
        eventListeners.push({ type: eventType, handler: handler }); // Armazena para remover depois
    };

    const setupInteractionMonitoring = () => {
        addInteractionListener('click');
        addInteractionListener('keydown');
        // Adicione outros eventos conforme seu jogo
        // addInteractionListener('mousemove');
    };

    // --- 3. Monitoramento de Uso de Memória ---
    const getMemoryUsage = () => {
        if (performance.memory) {
            const currentMemory = {
                jsHeapSizeLimit: (performance.memory.jsHeapSizeLimit / (1024 * 1024)).toFixed(2),
                totalJSHeapSize: (performance.memory.totalJSHeapSize / (1024 * 1024)).toFixed(2),
                usedJSHeapSize: (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(2),
                timestamp: performance.now().toFixed(2)
            };
            performanceData.memoryUsageHistory.push(currentMemory);
            // console.log(`%c[Memória JS]`, 'color: #8BC34A;', `Usado: ${currentMemory.usedJSHeapSize}MB / Total: ${currentMemory.totalJSHeapSize}MB`);
        } else if (performance.measureUserAgentSpecificMemory) {
            performance.measureUserAgentSpecificMemory()
                .then(memory => {
                    const currentMemory = {
                        total: (memory.bytes / (1024 * 1024)).toFixed(2) + 'MB',
                        breakdown: memory.breakdown,
                        timestamp: performance.now().toFixed(2)
                    };
                    performanceData.memoryUsageHistory.push(currentMemory);
                    // console.log(`%c[Memória User Agent]`, 'color: #8BC34A;', `Total usado: ${currentMemory.total}`);
                })
                .catch(err => {
                    // console.warn('Erro ao obter memória via measureUserAgentSpecificMemory:', err);
                });
        } else {
            // console.warn('API de Memória não disponível neste navegador.');
        }
    };

    const startMemoryMonitoring = () => {
        // Colete memória periodicamente (a cada 2 segundos, por exemplo, para evitar sobrecarga)
        memoryIntervalId = setInterval(getMemoryUsage, 2000);
        getMemoryUsage(); // Colete uma vez ao iniciar
    };

    // --- 4. Monitoramento de FPS (Frame Rate) ---
    const measureFPS = (currentTime) => {
        performanceData.frameCount++;
        if (!performanceData.lastFrameTime) {
            performanceData.lastFrameTime = currentTime;
        }

        const elapsed = currentTime - performanceData.lastFrameTime;
        if (elapsed >= 1000) { // A cada 1 segundo
            const fps = (performanceData.frameCount * 1000 / elapsed).toFixed(1);
            performanceData.fpsData.push(parseFloat(fps));
            if (performanceData.fpsData.length > 60) { // Mantém um histórico limitado de 1 minuto de FPS
                performanceData.fpsData.shift();
            }
            console.log(`%c[FPS]`, 'color: #00BCD4; font-weight: bold;', `Atual: ${fps}`);
            performanceData.frameCount = 0;
            performanceData.lastFrameTime = currentTime;
        }

        // Isso é o seu loop de renderização do jogo.
        // Chame requestAnimationFrame(measureFPS) dentro do seu loop principal de jogo.
        // Se você já tiver um loop de jogo, integre a lógica de FPS nele e NÃO chame requestAnimationFrame(measureFPS) aqui.
        animationFrameId = requestAnimationFrame(measureFPS);
    };


    // --- Inicialização do Monitoramento ---
    const startMonitoring = () => {
        setupPerformanceObserver();
        setupInteractionMonitoring();
        startMemoryMonitoring();
        measureFPS(performance.now()); // Inicia o loop de FPS
    };

    // Chame startMonitoring quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', startMonitoring);

    // --- Função para Finalizar a Análise e Gerar o Relatório ---
    window.FinalizarAnalise = () => {
        // 1. Desconectar o PerformanceObserver
        if (performanceObserver) {
            performanceObserver.disconnect();
            console.log('PerformanceObserver desconectado.');
        }

        // 2. Desativar os listeners de eventos de interação
        eventListeners.forEach(({ type, handler }) => {
            document.removeEventListener(type, handler);
            console.log(`Listener de "${type}" removido.`);
        });
        eventListeners.length = 0; // Limpa o array

        // 3. Limpar o intervalo de monitoramento de memória
        if (memoryIntervalId) {
            clearInterval(memoryIntervalId);
            console.log('Monitoramento de memória parado.');
        }

        // 4. Interromper o loop de requestAnimationFrame para o FPS
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            console.log('Monitoramento de FPS parado.');
        }

        // 5. Imprimir o relatório final
        console.groupCollapsed('%c--- Relatório de Performance do Jogo (FINAL) ---', 'color: #4CAF50; font-weight: bold; font-size: 1.2em;');

        console.group('%cCarregamento e Primeiros Bytes', 'color: #1a73e8;');
        console.table(performanceData.loadMetrics);
        console.log('Recursos Carregados (demora > 10ms):', performanceData.resourceLoads);
        console.groupEnd();

        console.group('%cInterações e Responsividade (Latência)', 'color: #FF5722;');
        const avgInteractionLatency = performanceData.interactionLatencies.length > 0
            ? (performanceData.interactionLatencies.reduce((sum, i) => sum + parseFloat(i.duration), 0) / performanceData.interactionLatencies.length).toFixed(2)
            : 'N/A';
        console.log(`Média Latência Interação: ${avgInteractionLatency}ms`);
        console.table(performanceData.interactionLatencies.slice(-10)); // Últimas 10 interações
        console.log('Long Tasks Detectadas:', performanceData.longTasks);
        console.groupEnd();

        console.group('%cUso de Memória (Histórico)', 'color: #8BC34A;');
        // Exibe a última leitura e o histórico
        if (performanceData.memoryUsageHistory.length > 0) {
            console.log('Última Leitura de Memória:', performanceData.memoryUsageHistory[performanceData.memoryUsageHistory.length - 1]);
            console.table(performanceData.memoryUsageHistory.map(m => ({
                'Tempo (ms)': m.timestamp,
                'Memória Usada (MB)': m.usedJSHeapSize || m.total,
                'Total JS Heap (MB)': m.totalJSHeapSize || 'N/A'
            })));
        } else {
            console.log('Nenhum dado de memória coletado.');
        }
        console.groupEnd();

        console.group('%cFrame Rate (FPS) Histórico', 'color: #00BCD4;');
        const avgFps = performanceData.fpsData.length > 0
            ? (performanceData.fpsData.reduce((sum, fps) => sum + fps, 0) / performanceData.fpsData.length).toFixed(1)
            : 'N/A';
        console.log(`FPS Médio (da coleta): ${avgFps}`);
        console.log('Histórico de FPS:', performanceData.fpsData);
        console.groupEnd();

        console.groupEnd(); // Fim do grupo principal

        console.log('%c--- Análise Finalizada ---', 'color: #4CAF50; font-weight: bold;');
    };

    // Torna a função acessível globalmente
    window.FinalizarAnalise = window.FinalizarAnalise;

})(); */
