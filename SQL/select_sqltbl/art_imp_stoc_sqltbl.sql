SELECT 
    processid, 
    step_id, 
    row_id, 
    DENUMIRE, 
    COD_ART, 
    CATEGORIE, 
    SUBCATEGORIE, 
    DEN_TIP as TIP_ARTICOL, 
    COD_BARE, 
    STOC, 
    UM, 
    PERIOADA_DE_VALAB, 
    FURNIZOR1, 
    FURNIZOR2, 
    DENSITATE, 
    VOLUM, 
    BAXUIRE, 
    GREUTATE, 
    PALETIZARE, 
    DIMENSIUNI_LXH, 
    LUNGIME, 
    LATIME, 
    INALTIME, 
    DIAMETRU,
    STARE as STATUS 
FROM `_71RESIDENT`.IIS_STOC_SI_INF_ADM
WHERE step_id = (SELECT MAX(step_id) FROM `_71RESIDENT`.NP_NERA WHERE step = 1530 AND status = 0);
