
const {
  Pool
} = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'priyanka',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = args[0];

const values = [`${cohortName}`];

const queryString = `
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = $1
  ORDER BY teacher;
`;

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  });