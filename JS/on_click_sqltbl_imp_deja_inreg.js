function on_click_sqltbl_imp_deja_inreg(rowId) {
    // Setare radio pe import si cod import read only 
    jr_set_value('radio_sel_operat', 'import');
    jr_set_readonly('txt_cod_art', true);
    // Denumiri sqltbl si pt
    var name_sqltbl_imp_stoc = 'sqltbl_art_imp_stoc';
    var name_sqltbl_art_inreg = 'sqlttbl_art_inreg';
    var cod_art_selectat;
    cod_art_selectat = jr_get_table_value(name_sqltbl_imp_stoc, rowId, 'COD_ART');
    var val_cod, denumire;
    sessionStorage.setItem('exista_deja', 'nu');
    jr_loop_table(name_sqltbl_art_inreg, function (subtable, id_rand) {
        val_cod = jr_get_table_value(subtable, id_rand, 'COD_ART_0');
        if (val_cod === cod_art_selectat) {
            denumire = jr_get_table_value(subtable, id_rand, 'DENUMIRE');
            sessionStorage.setItem('exista_deja', 'da');
            document.querySelector('#DataTables_Table_0_filter > label > input[type=search]').value = denumire;
            jr_notify_info("Există deja un articol înregistrat în baza de date cu același cod articol", 10);
            document.querySelector('#DataTables_Table_0_filter > label > input[type=search]').focus();
            var e = jQuery.Event("keyup");
            e.which = 13; //enter key
            jQuery("#DataTables_Table_0_filter > label > input[type=search]").trigger(e);     
        }
    });
}