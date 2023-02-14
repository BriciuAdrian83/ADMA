function on_load_upd_id_art() {
    var sqltbl_art_inreg_denum = 'sqlttbl_art_inreg';
    var last_id_numb = jr_get_table_value(sqltbl_art_inreg_denum, 0, 'ID_ARTICOL');
    var next_id_numb = parseInt(last_id_numb, 0) + 1;
    jr_set_value('txt_id_art', next_id_numb);
}