angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function ($scope) {
    $scope.app = "Lista Telefônica";

    $scope.contatos = [
        {nome: "Pedro", telefone:"3311-2501",operadora:{nome:"Oi",codigo:"14"}},
        {nome: "Zup", telefone:"3311-2501",operadora:{nome:"Tim",codigo:"41"}},
        {nome: "João Paulo", telefone:"9195-8052",operadora:{nome:"CTBC",codigo:"25"}},
    ];
    $scope.operadoras = [
        {nome: "Oi",codigo:14,categoria:"celular"},
        {nome: "Vivo",codigo:15,categoria:"celular"},
        {nome: "Tim",codigo:41,categoria:"celular"},
        {nome: "CTBC",codigo:25,categoria:"Fixo"},
        {nome: "Embratel",codigo:21,categoria:"Fixo"},
    ];

    $scope.adicionarContato  = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete  $scope.contato;
        $scope.contactForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos =  contatos.filter(function (contato) {
            if(!contato.selecionado) return contato;
        });

    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });

    };
    $scope.ordernarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };


});