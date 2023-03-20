function on_change_denum_check_if_in_adm() {
    var form_name_denum = 'txt_denumire';
    var value = jr_get_value(form_name_denum).toUpperCase();
    var current_row_value;
    jr_loop_table('sqlttbl_art_inreg', function (tableElement, rowId) {
        current_row_value = jr_get_table_value(tableElement, rowId, 'DENUMIRE').toUpperCase();
        if (current_row_value === value) {
            jr_set_value(form_name_denum, '');
            jr_notify_warn("Un articol cu aceeași denumire a fost deja înregistrat!\nNu se pot înregistra 2 articole cu aceeași denumire!", 13);
        }
    });
}