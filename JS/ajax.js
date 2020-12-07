/*----------------------------------------------------------
 * AJAX
 *----------------------------------------------------------
 * Este script permite a realização de chamadas assíncronas
 * ao servidor Web. Para isso, a metodologia denominada AJAX
 * foi utilizada.
 ----------------------------------------------------------*/

 var obj;   // variável do objeto XMLHttpRequest
 var elem;  // variável que receberá o conteúdo
 
 //--------------------------------------
 // FUNCAO: requisicao
 // Cria um objeto do tipo XMLHttpRequest e realiza uma
 // chamada assíncrona no servidor web.
 //
 // Parâmetros: 
 //      - endereco: localização (ou URL) do conteúdo dinâmico 
 //                  que pode ser qualquer arquivo armazenado
 //                  no servidor.
 //      - elemento: id do elemento da página que receberá a
 //                  resposta da chamada assíncrona
 function requisicao( endereco , elemento)
 {
     try{
         //-- Importante-----------------------
         // Este tipo de criação, por meio do objeto XMLHttpRequest,
         // funciona em todos os navegadores mais recentes, tais 
         // como Internet Explorer 7 (ou superior), Mozilla Firefox,
         // Google Chrome, Safari e Opera.
         //
         // Navegadores mais antigos como, por exemplo, Internet
         // Explorer 6 ou 5, utilizam um objeto do tipo ActiveX e
         // a criação é realizada da seguinte maneira:
         // obj = new ActiveXObject("Microsoft.XMLHTTP");
         //----------------------------------
         obj = new XMLHttpRequest();
 
         //especifica qual elemento receberá a 
         //resposta da chamada assíncrona
         elem = elemento;
         
         //registra a função responsável por
         //tratar a resposta do servidor
         obj.onreadystatechange = resposta;
         
         //--Configuração da solicitação ------
         // O método open recebe três parâmetros
         //     - método....: que pode ser GET ou POST
         //     - endereço..: localização do conteúdo
         //     - assíncrono: que especifica se a
         //                   requisiçao do conteúdo
         //                   será assíncrona (true) ou
         //                   síncrona (false).
         obj.open('GET',endereco,true);
         //------------------------------------
         
         //envia a solicitação
         obj.send();
          
         
     }catch(exception){
         alert('Falha na requisição');
     }
 }
 //--------------------------------------
 // FUNCAO: resposta
 // Apresenta os dados recebidos por meio da requisicao
 // assíncrona.
 function resposta()
 {
     //--Importante --------------------
     // Quando uma requisição é enviado ao servidor, o cliente
     // precisa checar quando o servidor terminou de processar
     // a requisição. Este estado significa que a resposta da
     // solicitação já está pronta e pode ser apresentada para
     // o cliente. Os tipos de estados suportados são:
     //    0: significa que a requisição não foi enviada
     //    1: significa que a conexão com o servidor foi estabelecida
     //    2: significa que a requisição foi recebida pelo servidor
     //    3: significa que a requisição está sendo processada
     //    4: significa que a requisição foi processada e a resposta
     //       esta pronta.
     //
     // Além disso é possível verificar o status da requisição que
     // em geral pode receber dois valores.
     //    200: quando o conteúdo requerido está disponível
     //    400: quando a página do conteúdo não foi encontrada
     //-----------------------------------
     if ( obj.readyState == 4)
     {
         //Adiciona a resposta ao componente passado como parâmetro
         //Note que o nome do elemento HTML que recebe a resposta
         //foi informado no método requisicao
         document.getElementById(elem).innerHTML = obj.responseText;
     }
 }
 