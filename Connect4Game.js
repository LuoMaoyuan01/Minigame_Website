console.log('Jscript is connected')

var PlayerOne = prompt('Player 1, enter your name (You will be Blue)')
var PlayerTwo = prompt('Player 2, enter your name (You will be Red)')
var BlueChip = 'Blue Chip'
var RedChip = 'Red Chip'

var PlayerOneMessage = function (){
    $('#PlayerInterface').text(PlayerOne + ': It is your turn, please pick a column to drop your ' + BlueChip)
}

var PlayerTwoMessage = function (){
    $('#PlayerInterface').text(PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)
}

PlayerOneMessage()

// Changing Player Interface //
$('td').on('click',function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        PlayerOneMessage()
    }else{
        PlayerTwoMessage()
    }
})

// Variables needed for chip drop function //
var TableColumnList1 = $('.1')
var TableColumnList2 = $('.2')
var TableColumnList3 = $('.3')
var TableColumnList4 = $('.4')
var TableColumnList5 = $('.5')
var TableColumnList6 = $('.6')
var TableColumnList7 = $('.7')

// Interface for dropping chips //
$('.1').click(function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        TableColumnList1.eq(-1).css('background-color','blue')
        TableColumnList1.length = (TableColumnList1.length -1)
    }else{
        TableColumnList1.eq(-1).css('background-color','red')
        TableColumnList1.length = (TableColumnList1.length -1)
    }
})

$('.2').click(function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        TableColumnList2.eq(-1).css('background-color','blue')
        TableColumnList2.length = (TableColumnList2.length -1)
    }else{
        TableColumnList2.eq(-1).css('background-color','red')
        TableColumnList2.length = (TableColumnList2.length -1)
    }
})

$('.3').click(function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        TableColumnList3.eq(-1).css('background-color','blue')
        TableColumnList3.length = (TableColumnList3.length -1)
    }else{
        TableColumnList3.eq(-1).css('background-color','red')
        TableColumnList3.length = (TableColumnList3.length -1)
    }
})

$('.4').click(function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        TableColumnList4.eq(-1).css('background-color','blue')
        TableColumnList4.length = (TableColumnList4.length -1)
    }else{
        TableColumnList4.eq(-1).css('background-color','red')
        TableColumnList4.length = (TableColumnList4.length -1)
    }
})

$('.5').click(function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        TableColumnList5.eq(-1).css('background-color','blue')
        TableColumnList5.length = (TableColumnList5.length -1)
    }else{
        TableColumnList5.eq(-1).css('background-color','red')
        TableColumnList5.length = (TableColumnList5.length -1)
    }
})

$('.6').click(function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        TableColumnList6.eq(-1).css('background-color','blue')
        TableColumnList6.length = (TableColumnList6.length -1)
    }else{
        TableColumnList6.eq(-1).css('background-color','red')
        TableColumnList6.length = (TableColumnList6.length -1)
    }
})

$('.7').click(function (){
    if ($('#PlayerInterface').text() === (PlayerTwo + ': It is your turn, please pick a column to drop your ' + RedChip)){
        TableColumnList7.eq(-1).css('background-color','blue')
        TableColumnList7.length = (TableColumnList7.length -1)
    }else{
        TableColumnList7.eq(-1).css('background-color','red')
        TableColumnList7.length = (TableColumnList7.length -1)
    }
})


// Restart Button //
$('#restart').click(function (){
    $('td').css('background-color','grey')
    TableColumnList1 = $('.1')
    TableColumnList2 = $('.2')
    TableColumnList3 = $('.3')
    TableColumnList4 = $('.4')
    TableColumnList5 = $('.5')
    TableColumnList6 = $('.6')
    TableColumnList7 = $('.7')
    PlayerOneMessage()
})

// Win condition //

console.log('Connected')