function on_change_alt_show_txt_subcategorie() {
    var sel_val = jr_get_value('sqllst_subcategorie');
    if (sel_val === 'Alta') {
        jr_show('txt_alt_subcateg');
        jr_set_required('txt_alt_subcateg', true);
    }
}