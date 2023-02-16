function on_change_alt_show_txt_categorie() {
    var sel_val = jr_get_value('sqllst_categorie');
    if (sel_val === 'Alta') {
        jr_show('txt_alt_categorie');
        jr_set_required('txt_alt_categorie', true);
    } else {
        jr_hide('txt_alt_categorie');
        jr_set_required('txt_alt_categorie', false);
    }
    // Arată doar subcategoriile aferente categoriilor
    jr_sql_refresh('sqllst_subcategorie');
    // Adaugă și opțiunea Alta
    setTimeout(function() {
        $(sqllst_subcategorie).append(new Option('Alta'));
    }, 500); 
}