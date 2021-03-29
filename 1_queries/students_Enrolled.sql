SELECT name, id , cohort_id
from students
WHERE end_date IS NULL
ORDER BY cohort_id;