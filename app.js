$ (document).ready( function(){
    // event listener for toggling price text
    $('#plan').on('change', function(){
        var priceText;
        switch(this.value){
            case 'monthly':
            priceText = '$10.00 /mo'
            case 'quarterly':
            priceText = '$9.00 /mo'
            case 'yearly':
            priceText = '$7.00 /mo'
        }
    $('#price').text(priceText)
    })
$('#add').on('click', function() {
    var plan = $('#plan')
    var installment = plan.val()
    var price = $('price').text()
    var inCart = $('#cart')
    var data = 'data-price"' + numeric +
    inCart.append('<li' + installment + '-' + price + '</li>')
    var numeric = price.replace(/[A-Za-z$\/\s]/g, '')
})
// <li class="entry" data-price=10 data-plan=monthly>
})