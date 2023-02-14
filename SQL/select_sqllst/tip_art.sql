WITH tip_art_subtabel_imp_stoc as 
(
SELECT DISTINCT  
    DEN_TIP
FROM `_71RESIDENT`.IIS_STOC_SI_INF_ADM
WHERE step_id = (SELECT MAX(step_id) FROM `_71RESIDENT`.NP_NERA WHERE step = 1530 AND status = 0) AND STARE='activ'AND DEN_TIP  <> ''
ORDER BY DEN_TIP
), tip_art_din_pt_manag_art as (
SELECT DISTINCT 
	ADMA_ALT_TIP_ART
FROM `_71RESIDENT`.NP_NERA
WHERE status = 3 AND step = 1060 AND ADMA_ALT_TIP_ART <> ''
)
SELECT s.DEN_TIP 
FROM tip_art_subtabel_imp_stoc s
UNION
SELECT m.ADMA_ALT_TIP_ART 
FROM tip_art_din_pt_manag_art m
ORDER BY DEN_TIP  