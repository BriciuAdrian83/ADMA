function on_change_alt_show_txt_categorie() {
    var sel_val = jr_get_value('sqllst_categorie');
    if (sel_val === 'Alta') {
        jr_show('txt_alt_categorie');
    }
}