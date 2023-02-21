function on_click_sqltbl_imp_get_codes_from_sqltbl(rowId) {
    // Dupa activarea search sqltbl cu coduri art max_id va fi 1 sau null
    var sqltbl_name = 'sqltbl_coduri_asoc';
    setTimeout(function() {
        var max_id = jr_get_table_max_id(sqltbl_name);
        var cod_art_selectat = jr_get_table_value('sqltbl_art_imp_stoc', rowId, 'COD_ART');
        var col_name_before_index = "COD_ART_";
        var max_index = 5; // starts at 0
        var i, val_cod, arr_coduri = [], i2;
        var pt_name_cod_art_before_index = 'txt_cod_art_';
        var max_pt_cod_index = 3; // starts at 0;
        var index = 0;
        jr_notify_info(max_id, 30);
        if (max_id !== null) {
            for(i = 0; i <= max_index; i++) {
                val_cod = jr_get_table_value(sqltbl_name, 0, col_name_before_index + i);
                if (val_cod !== '') {
                    arr_coduri.push(val_cod);
                }
            }
            for(i2 = 0; i < arr_coduri.length; i++) {
                if (arr_coduri[i2] !== cod_art_selectat && arr_coduri[i2] !== '') {
                    jr_set_value(pt_name_cod_art_before_index + index, arr_coduri[i2]);
                    if (index <= max_pt_cod_index) {
                        index += 1;
                    }
                }
            }
        }
    }, 5000); 
}