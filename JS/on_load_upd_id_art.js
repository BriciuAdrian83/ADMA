function on_load_upd_id_art() {
    // Dacă sqltbl cu art inreg este gol (max_id === null) se trece valoarea 1 
    // Altfel, o valoare incrementală - +1 față de val ult id
    var sqltbl_art_inreg_denum = 'sqlttbl_art_inreg';
    var max_id = jr_get_table_max_id(sqltbl_art_inreg_denum);
    if (max_id === null) {
        jr_set_value('txt_id_art', 1);
    } else {
        var last_id_numb = jr_get_table_value(sqltbl_art_inreg_denum, 0, 'ID_ARTICOL');
        var next_id_numb = parseInt(last_id_numb, 0) + 1;
        jr_set_value('txt_id_art', next_id_numb);
    }
}