function on_click_sqltbl_imp_deja_inreg(rowId) {
    // Denumiri sqltbl si pt
    var name_sqltbl_imp_stoc = 'sqltbl_art_imp_stoc';
    var name_sqltbl_art_inreg = 'sqlttbl_art_inreg';
    var cod_art_selectat, denumire_art_selectat;
    var sqltbl_col_denumire = 'DENUMIRE'; 
    cod_art_selectat = jr_get_table_value(name_sqltbl_imp_stoc, rowId, 'COD_ART');
    denumire_art_selectat = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_denumire);
    var val_cod;
    sessionStorage.setItem('exista_deja', 'nu');
    jr_loop_table(name_sqltbl_art_inreg, function (subtable, id_rand) {
        val_cod = jr_get_table_value(subtable, id_rand, 'COD_ART_0');
        if (val_cod === cod_art_selectat) {
            sessionStorage.setItem('exista_deja', 'da');
            document.querySelector('#DataTables_Table_0_filter > label > input[type=search]').value = denumire_art_selectat;
            jr_notify_info("Există deja un articol înregistrat în baza de date cu același cod articol.\nDenumirea acestuia a fost copiată în căsuța de search a tabelului cu articole înregistrate.\nApăsați tasta Enter pentru a filtra tabelul.", 30);
            setTimeout(function() {
                document.querySelector('#DataTables_Table_0_filter > label > input[type=search]').select();
            }, 200);           
        }
    });
}