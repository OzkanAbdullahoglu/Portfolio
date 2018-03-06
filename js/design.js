$(document).ready(function() {
    if ($(window).width() >= 1024) {
        $('[data-toggle="popover"]').popover({
            html: true,
            placement: 'auto',
            trigger: 'hover',
            container: 'body',
            content: function() {
                return '<img class="img img-responsive" src="' + $(this).data('img') + '">';
            }
        });
    }
});