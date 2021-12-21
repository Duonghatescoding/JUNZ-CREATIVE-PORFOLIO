
    $(document).ready(function(){
        $('.list').click(function(){
            const value = $(this).attr('data-filter');
            if (value==='all'){
                $('itembox').show('1000');
            }
            else{
                $('.itembox').not('.'+ value).hide('5000');
                $('.itembox').filter('.'+ value).show('5000');
            }
        })
        /*active class*/
        $('.list').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })

