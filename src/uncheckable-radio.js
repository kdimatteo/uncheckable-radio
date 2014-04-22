(function ($) {
    $.fn.uncheckableRadio = function () {
        return this.each(function () {
            var radio = this,
                label = $('label[for="' + radio.id + '"]');
            if (label.length === 0) {
                label = $(radio).closest("label");
            }
            var label_radio = label.add(radio);
            label_radio.mousedown(function () {
                $(radio).data('wasChecked', radio.checked);
            });
            label_radio.click(function () {
                if ($(radio).data('wasChecked')) {
                    radio.checked = false;
                }
            });
        });
    };
})(jQuery);