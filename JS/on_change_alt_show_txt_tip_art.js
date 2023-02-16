function on_change_alt_show_txt_tip_art() {
    var sel_val = jr_get_value('sqllst_tip_articol');
    if (sel_val === 'Altul') {
        jr_show('txt_alt_tip_art');
        jr_set_required('txt_alt_tip_art', true);
    } else {
        jr_hide('txt_alt_tip_art');
        jr_set_required('txt_alt_tip_art', false);
    }
}