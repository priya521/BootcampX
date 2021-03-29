SELECT name, email, phone
from students
WHERE  github IS NULL
AND end_date IS NOT NULL;