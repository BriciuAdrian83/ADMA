function on_click_sqltbl_imp(rowId) {

    // Denumiri sqltbl si pt
    var name_sqltbl_imp_stoc = 'sqltbl_art_imp_stoc';
    var sqltbl_col_denumire = 'DENUMIRE'; 
    var pt_form_el_denumire = "txt_" + sqltbl_col_denumire.toLowerCase();   
    var sqltbl_col_cod_art = 'COD_ART';
    var pt_form_el_cod_art = "txt_" + sqltbl_col_cod_art.toLowerCase();
    var sqltbl_col_categorie = 'CATEGORIE';
    var pt_form_el_categorie = "sqllst_" + sqltbl_col_categorie.toLowerCase();
    var sqltbl_col_subcategorie = 'SUBCATEGORIE';
    var pt_form_el_subcategorie = "sqllst_" + sqltbl_col_subcategorie.toLowerCase();
    var sqltbl_col_tip_art = 'TIP_ARTICOL';
    var pt_form_el_tip_art = "sqllst_" + sqltbl_col_tip_art.toLowerCase();
    var sqltbl_col_cod_bare = 'COD_BARE';
    var pt_form_el_cod_bare = "txt_" + sqltbl_col_cod_bare.toLowerCase();
    var sqltbl_col_stoc = 'STOC';
    var pt_form_el_stoc = "txt_" + sqltbl_col_stoc.toLowerCase();
    var sqltbl_col_um = 'UM';
    var pt_form_el_um = "txt_" + sqltbl_col_um.toLowerCase();
    var sqltbl_col_perioada_de_valab = 'PERIOADA_DE_VALAB';
    var pt_form_el_perioada_de_valab = "txt_" + sqltbl_col_perioada_de_valab.toLowerCase();
    var sqltbl_col_frunizor1 = 'FURNIZOR1';
    var pt_form_el_furnizor1 = "txt_" + sqltbl_col_frunizor1.toLowerCase();
    var sqltbl_col_furnizor2 = 'FURNIZOR2';
    var pt_form_el_furnizor2 = "txt_" + sqltbl_col_furnizor2.toLowerCase();
    var sqltbl_col_densitate = 'DENSITATE';
    var pt_form_el_densitate = "txt_" + sqltbl_col_densitate.toLowerCase();
    var sqltbl_col_volum = 'VOLUM';
    var pt_form_el_volum = "txt_" + sqltbl_col_volum.toLowerCase();
    var sqltbl_col_baxuire = 'BAXUIRE';
    var pt_form_el_baxuire = "txt_" + sqltbl_col_baxuire.toLowerCase();
    var sqltbl_col_greutate = 'GREUTATE';
    var pt_form_el_greutate = "txt_" + sqltbl_col_greutate.toLowerCase();
    var sqltbl_col_paletizare = 'PALETIZARE';
    var pt_form_el_paletizare = "txt_" + sqltbl_col_paletizare.toLowerCase();
    var sqltbl_col_dimensiuni_lxh = 'DIMENSIUNI_LXH';
    var pt_form_el_dimesiuni_lxh = "txt_" + sqltbl_col_dimensiuni_lxh.toLowerCase();
    var sqltbl_col_lungime = 'LUNGIME';
    var pt_form_el_lungime = "txt_" + sqltbl_col_lungime.toLowerCase();
    var sqltbl_col_latime = 'LATIME';
    var pt_form_el_latime  = "txt_" + sqltbl_col_latime.toLowerCase();
    var sqltbl_col_inaltime = 'INALTIME';
    var pt_form_el_inaltime = "txt_" + sqltbl_col_inaltime.toLowerCase();
    var sqltbl_col_diametru = 'DIAMETRU';
    var pt_form_el_diametru = "txt_" + sqltbl_col_diametru.toLowerCase();
    var sqltbl_col_status = 'STATUS';
    var pt_form_el_status = "lst_" + sqltbl_col_status.toLowerCase();
    // Pt coduri art
    // var name_sqltbl_cod_art = 'sqltbl_coduri_asoc';
    // var sqltbl2_col_cod_art_0 = 'COD_ART_0';
    // var pt_form_el_cod_art_0 = "txt_" + sqltbl2_col_cod_art_0.toLocaleLowerCase
    // var sqltbl2_col_cod_art_1 = 'COD_ART_1';
    // var pt_form_el_cod_art_1 = "txt_" + sqltbl2_col_cod_art_1.toLocaleLowerCase
    // var sqltbl2_col_cod_art_2 = 'COD_ART_2';
    // var pt_form_el_cod_art_2 = "txt_" + sqltbl2_col_cod_art_2.toLocaleLowerCase
    // var sqltbl2_col_cod_art_3 = 'COD_ART_3';
    // var pt_form_el_cod_art_3 = "txt_" + sqltbl2_col_cod_art_3.toLocaleLowerCase
    // var sqltbl2_col_cod_art_4 = 'COD_ART_4';
    // var sqltbl2_col_cod_art_5 = 'COD_ART_5';

    // Copiere date existente in sql table imp stocuri on click
    var value;
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_denumire);
    jr_set_value(pt_form_el_denumire, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_cod_art);
    jr_set_value(pt_form_el_cod_art, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_categorie);
    jr_set_value(pt_form_el_categorie, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_subcategorie);
    jr_set_value(pt_form_el_subcategorie, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_tip_art);
    jr_set_value(pt_form_el_tip_art, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_cod_bare);
    jr_set_value(pt_form_el_cod_bare, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_stoc);
    jr_set_value(pt_form_el_stoc, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_um);
    jr_set_value(pt_form_el_um, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_perioada_de_valab);
    jr_set_value(pt_form_el_perioada_de_valab, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_frunizor1);
    jr_set_value(pt_form_el_furnizor1, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_furnizor2);
    jr_set_value(pt_form_el_furnizor2, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_densitate);
    jr_set_value(pt_form_el_densitate, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_volum);
    jr_set_value(pt_form_el_volum, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_baxuire);
    jr_set_value(pt_form_el_baxuire, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_greutate);
    jr_set_value(pt_form_el_greutate, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_paletizare);
    jr_set_value(pt_form_el_paletizare, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_dimensiuni_lxh);
    jr_set_value(pt_form_el_dimesiuni_lxh, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_lungime);
    jr_set_value(pt_form_el_lungime, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_latime);
    jr_set_value(pt_form_el_latime, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_inaltime);
    jr_set_value(pt_form_el_inaltime, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_diametru);
    jr_set_value(pt_form_el_diametru, value);
    value = jr_get_table_value(name_sqltbl_imp_stoc, rowId, sqltbl_col_status);
    jr_set_value(pt_form_el_status, value);
}