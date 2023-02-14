function on_load_add_opt_alt_sqllst() {
    var option_tip_articol = 'Altul';
    $(sqllst_tip_articol).append(new Option(option_tip_articol));
    var option_categ_si_subcateg = 'Alta';
    $(sqllst_categorie).append(new Option(option_categ_si_subcateg));
    $(sqllst_subcategorie).append(new Option(option_categ_si_subcateg));
    
}