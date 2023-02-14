SELECT DISTINCT  
    DEN_TIP
FROM `_71RESIDENT`.IIS_STOC_SI_INF_ADM
WHERE step_id = (SELECT MAX(step_id) FROM `_71RESIDENT`.NP_NERA WHERE step = 1530 AND status = 0) AND STARE='activ'
ORDER BY DEN_TIP;