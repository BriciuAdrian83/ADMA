function on_load_hide_unimp_colums() {
    var sqltbl_art_inreg_denum = 'sqlttbl_art_inreg';
    var denum_col_ascunse = ['BAXUIRE', 'GREUTATE', 'PALETIZARE', 'DIMENSIUNI_LXH', 'COD_ART_2',
                             'COD_ART_3', 'COD_ART_4'];
    var i;
    for(i = 0; i < denum_col_ascunse.length; i ++) {
        jr_hide_table_column(sqltbl_art_inreg_denum, denum_col_ascunse[i]);
    }                         
}