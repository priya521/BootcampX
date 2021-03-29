SELECT name, id, email, cohort_id
from students
WHERE email NOT LIKE '%gmail.com'
And phone IS NULL;