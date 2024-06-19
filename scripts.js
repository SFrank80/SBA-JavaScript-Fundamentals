const AssignmentGroup = {
  id: 1,
  name: "Homework",
  course_id: 1,
  group_weight: 0.4,
  assignments: [
    {
      id: 1,
      name: "Assignment 1",
      due_at: "2023-01-15",
      points_possible: 100
    },
    {
      id: 2,
      name: "Assignment 2",
      due_at: "2023-02-15",
      points_possible: 100
    }
  ]
};

// Generate 10 random student names with three-digit IDs
const students = [
  "Tanya-Reese", "John-Doe", "Jane-Smith", "Michael-Jones", "Emily-Davis",
  "Chris-Wilson", "Amanda-Brown", "Daniel-Garcia", "Laura-Martinez", "David-Lopez"
].map(name => `${name}_${Math.floor(100 + Math.random() * 900)}`);

// Random scores for assignments
const randomScores = () => Math.floor(Math.random() * 101);

// Generate student scores for assignments
const studentScores = students.map(student => ({
  student,
  scores: {
    assignment1: randomScores(),
    assignment2: randomScores()
  }
}));

// Calculate Below Average and Above Average percentages
const calculateAveragesAndPercentages = () => {
  let belowAverageCount = 0;
  let aboveAverageCount = 0;

  studentScores.forEach(({ scores }) => {
    scores.average = calculateAverage(scores);
    if (scores.average !== 'NULL') {
      const average = parseFloat(scores.average);
      if (average < 75) {
        belowAverageCount++;
      }
      if (average >= 75) {
        aboveAverageCount++;
      }
    }
  });

  const totalStudents = studentScores.length;
  const belowAveragePercentage = (belowAverageCount / totalStudents) * 100;
  const aboveAveragePercentage = (aboveAverageCount / totalStudents) * 100;

  return {
    belowAveragePercentage: belowAveragePercentage.toFixed(2),
    aboveAveragePercentage: aboveAveragePercentage.toFixed(2)
  };
};

function calculateAverage(scores) {
  const { assignment1, assignment2 } = scores;
  if ((assignment1 === null || assignment1 === 0) && (assignment2 === null || assignment2 === 0)) {
    return 'NULL';
  } else if (assignment1 === null || assignment1 === 0) {
    return assignment2.toFixed(2);
  } else if (assignment2 === null || assignment2 === 0) {
    return assignment1.toFixed(2);
  }
  return ((assignment1 + assignment2) / 2).toFixed(2);
}

// Display the results in the HTML
document.addEventListener("DOMContentLoaded", () => {
  const studentScoresTable = document.getElementById("student-scores");
  const belowAverageElement = document.getElementById("below-average");
  const aboveAverageElement = document.getElementById("above-average");

  const { belowAveragePercentage, aboveAveragePercentage } = calculateAveragesAndPercentages();

  belowAverageElement.textContent += `${belowAveragePercentage}%`;
  aboveAverageElement.textContent += `${aboveAveragePercentage}%`;

  studentScores.forEach(({ student, scores }) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student}</td>
      <td><input type="number" value="${scores.assignment1 !== null ? scores.assignment1 : ''}" data-student="${student}" data-assignment="assignment1"></td>
      <td><input type="number" value="${scores.assignment2 !== null ? scores.assignment2 : ''}" data-student="${student}" data-assignment="assignment2"></td>
      <td class="average">${scores.average}</td>
    `;
    studentScoresTable.appendChild(row);
  });

  const inputs = document.querySelectorAll("td input");
  inputs.forEach(input => {
    input.addEventListener("input", (event) => {
      const { student, assignment } = event.target.dataset;
      const newValue = event.target.value ? parseInt(event.target.value, 10) : null;

      const studentData = studentScores.find(s => s.student === student);
      studentData.scores[assignment] = newValue;

      const averageCell = event.target.parentElement.nextElementSibling.nextElementSibling;
      averageCell.textContent = calculateAverage(studentData.scores);

      updateSummary();
    });
  });
});

function updateSummary() {
  const { belowAveragePercentage, aboveAveragePercentage } = calculateAveragesAndPercentages();

  document.getElementById("below-average").textContent = `Below Average Percentage: ${belowAveragePercentage}%`;
  document.getElementById("above-average").textContent = `Above Average Percentage: ${aboveAveragePercentage}%`;

  studentScores.forEach(({ scores }, index) => {
    const averageCell = document.querySelectorAll("td.average")[index];
    averageCell.textContent = scores.average;
  });
}
