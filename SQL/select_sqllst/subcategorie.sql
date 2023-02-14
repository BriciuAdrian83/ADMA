WITH sub_categorii_subtabel_imp_stoc as 
(
SELECT DISTINCT  
    SUBCATEGORIE
FROM `_71RESIDENT`.IIS_STOC_SI_INF_ADM
WHERE step_id = (SELECT MAX(step_id) FROM `_71RESIDENT`.NP_NERA WHERE step = 1530 AND status = 0) AND STARE='activ'AND SUBCATEGORIE <> '' AND CATEGORIE = '[sqllst_categorie]'
ORDER BY SUBCATEGORIE
), sub_categorii_din_pt_manag_art as (
SELECT DISTINCT 
	ADMA_ALT_SUBCATEG
FROM `_71RESIDENT`.NP_NERA
WHERE status = 3 AND step = 1060 AND ADMA_ALT_SUBCATEG <> '' AND (ADMA_ALT_CATEGORIE='[sqllst_categorie]' OR ADMA_CATEGORIE = '[sqllst_categorie]')
)
SELECT s.SUBCATEGORIE 
FROM sub_categorii_subtabel_imp_stoc s
UNION
SELECT m.ADMA_ALT_SUBCATEG 
FROM sub_categorii_din_pt_manag_art m
ORDER BY SUBCATEGORIE  
