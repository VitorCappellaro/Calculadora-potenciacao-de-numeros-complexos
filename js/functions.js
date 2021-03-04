window.onload = function(){
    var num1 = $('#numinput');
    var result = undefined;


    function calcRest() {
        result = num1.val() % 4;
        console.log('O resto da divisão é: ' + result);
        $('.input').after('<p class="result1">O resto da divisão é: ' + result +'</p>');
        return result;
    }
    
    function verifyResult (){
        
        switch (result){
            case 0:
                $('.result1').after('<p class="result2">i elevado a ' + num1.val() + ' é igual a: 1</p>')
                console.log('i elevado a ' + num1.val() + ' é igual a 1');
            break;

            case 1:
                $('.result1').after('<p class="result2">i elevado a ' + num1.val() + ' é igual a: i</p>')
                console.log('i elevado a ' + num1.val() + ' é igual a i');
            break;

            case 2:
                $('.result1').after('<p class="result2">i elevado a ' + num1.val() + ' é igual a: -1</p>')
                console.log('i elevado a ' + num1.val() + ' é igual a -1');
            break;

            case 3:
                $('.result1').after('<p class="result2">i elevado a ' + num1.val() + ' é igual a: -i</p>')
                console.log('i elevado a ' + num1.val() + ' é igual a -i');
            break;

            default:
                console.log('Algo deu errado');
        }
    }

    function clean (){
        if ($('.result1').css('display') == 'block'){
            $('.result1').remove();
            $('.result2').remove();
        }
    }

    $(document).on('keydown', function (event) {
        if (event.keyCode === 13) {
            clean();
            calcRest();
            verifyResult();
        }
    });

    $('.btn').click(function(){
        clean();
        calcRest();
        verifyResult(); 
    });
    
}