function on_click_sqltbls_and_load_reset_val() {
    // Resetare la empty valori
    jr_set_readonly('txt_denumire', true);
    var value;
    value = '';
    jr_set_value('txt_denumire', value);
    jr_set_value('txt_cod_art', value);
    jr_set_value('txt_cod_bare', value);
    jr_set_value('txt_furnizor1', value);
    jr_set_value('txt_furnizor2', value);
    jr_set_value('txt_stoc', value);
    jr_set_value('txt_um', value);
    jr_set_value('txt_perioada_de_valab', value);
    jr_set_value('txt_densitate', value);
    jr_set_value('txt_volum', value);
    jr_set_value('txt_baxuire', value);
    jr_set_value('txt_greutate', value);
    jr_set_value('txt_paletizare', value);
    jr_set_value('txt_dimensiuni_lxh', value);
    jr_set_value('txt_lungime', value);
    jr_set_value('txt_latime', value);
    jr_set_value('txt_inaltime', value);
    jr_set_value('txt_diametru', value);
    jr_set_value('lst_status', value);
    jr_set_value('sqllst_tip_articol', value);
    jr_set_value('txt_alt_tip_art', value);
    jr_set_value('sqllst_categorie', value);
    jr_set_value('txt_alt_categorie', value);
    jr_set_value('sqllst_subcategorie', value);
    jr_set_value('txt_alt_subcateg', value);
    jr_set_value('txt_cod_art_0', value);
    jr_set_value('txt_cod_art_1', value);
    jr_set_value('txt_cod_art_2', value);
    jr_set_value('txt_cod_art_3', value);
}