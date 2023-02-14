WITH categorii_subtabel_imp_stoc as 
(
SELECT DISTINCT  
    CATEGORIE
FROM `_71RESIDENT`.IIS_STOC_SI_INF_ADM
WHERE step_id = (SELECT MAX(step_id) FROM `_71RESIDENT`.NP_NERA WHERE step = 1530 AND status = 0) AND STARE='activ'
ORDER BY CATEGORIE
), categorii_din_pt_manag_art as (
SELECT DISTINCT 
	ADMA_ALT_CATEGORIE
FROM `_71RESIDENT`.NP_NERA
WHERE status = 3 and step = 1060 and ADMA_ALT_CATEGORIE <> ''
)
SELECT s.CATEGORIE 
FROM categorii_subtabel_imp_stoc s
UNION
SELECT m.ADMA_ALT_CATEGORIE 
FROM categorii_din_pt_manag_art m
ORDER BY CATEGORIE 

