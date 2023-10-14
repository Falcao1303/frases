var app = angular.module('app', []);

app.controller('appController', appController);

appController.$inject = ['$scope', '$http', '$rootScope', '$location', '$window'];

function appController($scope, $http, $rootScope, $location, $window) {
    $scope.mensagem = [
        "Ponta Grossa, cidade acolhedora.",
        "Terra de gente bonita e generosa.",
        "Cidade de oportunidades e futuro promissor.",
        "História, cultura e belas paisagens.",
        "Cidade de alegria, esperança e amor.",
        "Gente feliz, sorridente e que ama viver.",
        "Gente hospitaleira, amiga e compartilhadora.",
        "Gente trabalhadora e determinada.",
        "Gente orgulhosa, que ama sua cidade e busca o melhor.",
        "Gente que faz a diferença e torna o mundo melhor.",
        "Ponta Grossa, cidade de coração forte e gente valente. Juntos, somos invencíveis!",
        "O otimismo ponta-grossense é nossa maior força. Acreditamos no amanhã!",
        "Nossa cidade é um exemplo de resiliência, superando desafios com determinação.",
        "Ponta-grossenses são conhecidos por sua hospitalidade calorosa. O acolhimento é nosso lema.",
        "Em meio a tempestades, nossa cidade sempre encontra um caminho para o sol.",
        "A educação é uma prioridade para nós, investindo no futuro brilhante de nossos jovens.",
        "A história de Ponta Grossa é repleta de realizações notáveis. O futuro será ainda mais grandioso!",
        "Nossa comunidade é unida, sempre pronta para se apoiar nos momentos difíceis.",
        "A cultura local é rica e diversificada, trazendo alegria para nossas vidas.",
        "A paixão pelo esporte nos faz superar limites e alcançar vitórias.",
        "A inovação está em nosso DNA. Ponta-grossenses são empreendedores visionários.",
        "Nossa cidade é um exemplo de comprometimento com a sustentabilidade e o meio ambiente.",
        "O orgulho de ser ponta-grossense nos inspira a alcançar grandes conquistas.",
        "A diversidade de talentos em nossa cidade enriquece nossas vidas todos os dias.",
        "A solidariedade é um valor que todos compartilhamos. Juntos, somos imbatíveis.",
        "A beleza de nossa cidade e seu entorno é uma constante fonte de inspiração.",
        "Ponta Grossa é o lar de pessoas apaixonadas pela cultura, arte e música.",
        "O espírito empreendedor de nossa comunidade é um motor para o crescimento constante.",
        "Nossos líderes comunitários são verdadeiros visionários, construindo um amanhã melhor.",
        "A fé e a esperança nunca nos abandonam. O futuro é promissor.",
        "A força da juventude é a promessa de um futuro brilhante para Ponta Grossa.",
        "A dedicação de nossos profissionais de saúde é admirável. Cuidando uns dos outros.",
        "Ponta-grossenses têm o dom de transformar desafios em oportunidades.",
        "Nossa cidade é um farol de esperança e positividade para toda a região.",
        "Valorizamos nossa história, mas sempre olhamos adiante para o futuro.",
        "O caráter trabalhador de nossa gente é nossa maior riqueza.",
        "O amor pela natureza nos inspira a preservar e proteger o meio ambiente.",
        "A união é nossa força. Juntos, somos imparáveis.",
        "A inovação e a criatividade são a essência de Ponta Grossa.",
        "A tradição e a modernidade coexistem harmoniosamente em nossa cidade.",
        "A música e a cultura locais nos enchem de alegria e inspiração.",
        "A juventude de Ponta Grossa é a promessa de um amanhã repleto de conquistas.",
        "A solidariedade é um valor inabalável em nossa comunidade.",
        "A educação é a chave para um futuro brilhante, e nós a valorizamos profundamente.",
        "Nosso amor por Ponta Grossa é incondicional, e isso nos motiva a alcançar a grandeza.",
        "A diversidade é a nossa força. Celebramos as diferentes origens e culturas.",
        "Ponta-grossenses enfrentam desafios com coragem e determinação.",
        "A hospitalidade é um traço distintivo de nossa cidade. Todos são bem-vindos.",
        "Nossa cidade está no caminho da prosperidade e do progresso contínuo.",
        "A resiliência é nossa marca registrada. Não importa o que aconteça, sempre superamos.",
        "A arte floresce em cada esquina de Ponta Grossa, inspirando a todos.",
        "Nossos líderes comunitários são guias experientes em nossa jornada para o futuro.",
        "A fé é nossa âncora, mantendo-nos firmes nos momentos mais desafiadores.",
        "A natureza ao nosso redor é um tesouro que cuidamos com carinho.",
        "O otimismo inabalável dos ponta-grossenses é a força que impulsiona nossa cidade a alcançar o sucesso. Juntos, somos invencíveis!",
        "Ponta Grossa, cidade de coração forte e gente valente. Juntos, somos invencíveis!",
        "O otimismo ponta-grossense é nossa maior força. Acreditamos no amanhã!",
        "Nossa cidade é um exemplo de resiliência, superando desafios com determinação.",
        "Ponta-grossenses são conhecidos por sua hospitalidade calorosa. O acolhimento é nosso lema.",
        "Em meio a tempestades, nossa cidade sempre encontra um caminho para o sol.",
        "A educação é uma prioridade para nós, investindo no futuro brilhante de nossos jovens.",
        "A história de Ponta Grossa é repleta de realizações notáveis. O futuro será ainda mais grandioso!",
        "Nossa comunidade é unida, sempre pronta para se apoiar nos momentos difíceis.",
        "A cultura local é rica e diversificada, trazendo alegria para nossas vidas.",
        "A paixão pelo esporte nos faz superar limites e alcançar vitórias.",
        "A inovação está em nosso DNA. Ponta-grossenses são empreendedores visionários.",
        "Nossa cidade é um exemplo de comprometimento com a sustentabilidade e o meio ambiente.",
        "O orgulho de ser ponta-grossense nos inspira a alcançar grandes conquistas.",
        "A diversidade de talentos em nossa cidade enriquece nossas vidas todos os dias.",
        "A solidariedade é um valor que todos compartilhamos. Juntos, somos imbatíveis.",
        "A beleza de nossa cidade e seu entorno é uma constante fonte de inspiração.",
        "Ponta Grossa é o lar de pessoas apaixonadas pela cultura, arte e música.",
        "O espírito empreendedor de nossa comunidade é um motor para o crescimento constante.",
        "Nossos líderes comunitários são verdadeiros visionários, construindo um amanhã melhor.",
        "A fé e a esperança nunca nos abandonam. O futuro é promissor.",
        "A força da juventude é a promessa de um futuro brilhante para Ponta Grossa.",
        "A dedicação de nossos profissionais de saúde é admirável. Cuidando uns dos outros.",
        "Ponta-grossenses têm o dom de transformar desafios em oportunidades.",
        "Nossa cidade é um farol de esperança e positividade para toda a região.",
        "Valorizamos nossa história, mas sempre olhamos adiante para o futuro.",
        "O caráter trabalhador de nossa gente é nossa maior riqueza.",
        "O amor pela natureza nos inspira a preservar e proteger o meio ambiente.",
        "A união é nossa força. Juntos, somos imparáveis.",
        "A inovação e a criatividade são a essência de Ponta Grossa.",
        "A tradição e a modernidade coexistem harmoniosamente em nossa cidade.",
        "A música e a cultura locais nos enchem de alegria e inspiração.",
        "A juventude de Ponta Grossa é a promessa de um amanhã repleto de conquistas.",
        "A solidariedade é um valor inabalável em nossa comunidade.",
        "A educação é a chave para um futuro brilhante, e nós a valorizamos profundamente.",
        "Nosso amor por Ponta Grossa é incondicional, e isso nos motiva a alcançar a grandeza.",
        "A diversidade é a nossa força. Celebramos as diferentes origens e culturas.",
        "Ponta-grossenses enfrentam desafios com coragem e determinação.",
        "A hospitalidade é um traço distintivo de nossa cidade. Todos são bem-vindos.",
        "Nossa cidade está no caminho da prosperidade e do progresso contínuo.",
        "A resiliência é nossa marca registrada. Não importa o que aconteça, sempre superamos.",
        "A arte floresce em cada esquina de Ponta Grossa, inspirando a todos.",
        "Nossos líderes comunitários são guias experientes em nossa jornada para o futuro.",
        "A fé é nossa âncora, mantendo-nos firmes nos momentos mais desafiadores.",
        "A natureza ao nosso redor é um tesouro que cuidamos com carinho.",
        "O otimismo inabalável dos ponta-grossenses é a força que impulsiona nossa cidade a alcançar o sucesso. Juntos, somos invencíveis!"

    ];
    $scope.mensagensExibidas = []; // Array para acompanhar as mensagens exibidas
    $scope.mensagem_gerada = "";

    $scope.descobrirMensagem = function() {
        if ($scope.mensagensExibidas.length === $scope.mensagem.length) {
            $scope.mensagem_gerada = "Não há mais mensagens disponíveis!";
        } else {
            var mensagemAleatoriaIndex;
            do {
                mensagemAleatoriaIndex = Math.floor(Math.random() * $scope.mensagem.length);
            } while ($scope.mensagensExibidas.includes(mensagemAleatoriaIndex));
            
            $scope.mensagensExibidas.push(mensagemAleatoriaIndex);
            $scope.mensagem_gerada = $scope.mensagem[mensagemAleatoriaIndex];
        }
    };
}
