SELECT name,id, cohort_id
from students
WHERE email IS Null 
OR phone IS Null;