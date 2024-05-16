$(document).ready(function() {
    $('#add-item').on('click', function() {
        const itemText = $('#new-item').val();
        
        const newTask = $('<li>' + itemText + '</li>');
        newTask.hide();
        
        $('ul').prepend(newTask);
        
        newTask.slideDown();
        
    });
    $("#list").on('click', 'li', function() {    
        $(this).toggleClass('strike');
    });
});
