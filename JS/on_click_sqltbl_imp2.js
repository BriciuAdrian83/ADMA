function on_click_sqltbl_imp2(rowId) {
/* Tot scriptul va fi conditionat de valoarea stocată în sessionStorage duop verificare 
    dacă articolul este deja în sqltbl cu art inreg scriptul on_click_sqltbl_imp_deja_inreg */
    var exista_deja = sessionStorage.getItem('exista_deja');
    if (exista_deja !== 'da') {

        // Denumiri sqltbl 
        var name_sqltbl_imp_stoc = 'sqltbl_art_imp_stoc';
        var name_sqltbl_cod_art = 'sqltbl_coduri_asoc';

        var sel_cod_art = jr_get_table_value(name_sqltbl_imp_stoc, rowId, 'COD_ART');

        // Cauta codul art selectat in sqltbl_cod_art si scrie codurile asociate
        var denum_col_cod_art_bi = 'COD_ART_';
        var denum_col_cod_art_max = 6;
        var denum_pt_alt_code_bi = 'txt_cod_art_';
        var arr_cod_art_asoc, i, current_code, index, i2, arr_alt_codes, i3, value;
        jr_loop_table(name_sqltbl_cod_art, function (subtable, rowId) {
            arr_cod_art_asoc = [];
            arr_alt_codes = [];
            for (i = 0; i < denum_col_cod_art_max; i++) {
                current_code = jr_get_table_value(subtable, rowId, denum_col_cod_art_bi + i);
                if (current_code !== '') {
                    arr_cod_art_asoc.push(current_code);
                }
            }
            // Index of sel code -1 if not in array if it is set it to pt alt cod art
            index = arr_cod_art_asoc.indexOf(sel_cod_art);
            if (index !== -1 && arr_cod_art_asoc.length > 1) {
                // jr_notify_info(arr_cod_art_asoc, 20);
                for (i2 = 0; i2 < arr_cod_art_asoc.length; i2++) {
                    if (arr_cod_art_asoc[i2] !== sel_cod_art) {
                        arr_alt_codes.push(arr_cod_art_asoc[i2]);
                    }
                }
                for (i3 = 0; i3 < arr_alt_codes.length; i3++) {
                    value = arr_alt_codes[i3];
                    jr_set_value(denum_pt_alt_code_bi + i3, value);
                }
            }
            
        });   
    }
}