// Define the data structures
const CourseInfo = {
  id: 1,
  name: "Course 101"
};

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

const LearnerSubmissions = [
  {
    learner_id: 1,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-14",
      score: 90
    }
  },
  {
    learner_id: 1,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-14",
      score: 80
    }
  }
];

// Validate the data
function validateData(course, assignmentGroups) {
  assignmentGroups.forEach(group => {
    if (group.course_id !== course.id) {
      throw new Error(`Assignment group ${group.id} does not belong to course ${course.id}`);
    }
    group.assignments.forEach(assignment => {
      if (typeof assignment.points_possible !== 'number' || assignment.points_possible <= 0) {
        throw new Error(`Invalid points_possible for assignment ${assignment.id}`);
      }
    });
  });
}

// Calculate weighted average
function calculateWeightedAverage(submissions, assignmentGroups) {
  const learnerScores = {};

  submissions.forEach(sub => {
    const assignmentGroup = assignmentGroups.find(group => 
      group.assignments.some(assignment => assignment.id === sub.assignment_id)
    );
    
    if (!assignmentGroup) {
      throw new Error(`Assignment ${sub.assignment_id} not found in any assignment group`);
    }

    const assignment = assignmentGroup.assignments.find(assignment => assignment.id === sub.assignment_id);

    if (new Date(assignment.due_at) < new Date()) {
      if (!learnerScores[sub.learner_id]) {
        learnerScores[sub.learner_id] = { totalScore: 0, totalPoints: 0, assignments: {} };
      }

      const percentage = (sub.submission.score / assignment.points_possible) * 100;
      learnerScores[sub.learner_id].totalScore += sub.submission.score;
      learnerScores[sub.learner_id].totalPoints += assignment.points_possible;
      learnerScores[sub.learner_id].assignments[assignment.id] = percentage;
    }
  });

  return Object.keys(learnerScores).map(id => {
    const learner = learnerScores[id];
    return {
      id: parseInt(id),
      avg: (learner.totalScore / learner.totalPoints) * 100,
      ...learner.assignments
    };
  });
}

// Generate learner report
function generateLearnerReport(course, assignmentGroups, submissions) {
  try {
    validateData(course, assignmentGroups);
    return calculateWeightedAverage(submissions, assignmentGroups);
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

// Execute the program
const report = generateLearnerReport(CourseInfo, [AssignmentGroup], LearnerSubmissions);
console.log(report);

// Unit tests
function runTests() {
  // Test with valid data
  try {
    const testCourse = {
      id: 1,
      name: "Test Course"
    };

    const testAssignmentGroup = {
      id: 1,
      name: "Test Group",
      course_id: 1,
      group_weight: 0.5,
      assignments: [
        {
          id: 1,
          name: "Test Assignment 1",
          due_at: "2023-01-15",
          points_possible: 100
        },
        {
          id: 2,
          name: "Test Assignment 2",
          due_at: "2023-02-15",
          points_possible: 100
        }
      ]
    };

    const testSubmissions = [
      {
        learner_id: 1,
        assignment_id: 1,
        submission: {
          submitted_at: "2023-01-14",
          score: 50
        }
      },
      {
        learner_id: 1,
        assignment_id: 2,
        submission: {
          submitted_at: "2023-02-14",
          score: 100
        }
      }
    ];

    const expectedReport = [
      {
        id: 1,
        avg: 75,
        1: 50,
        2: 100
      }
    ];

    const result = generateLearnerReport(testCourse, [testAssignmentGroup], testSubmissions);
    console.assert(JSON.stringify(result) === JSON.stringify(expectedReport), 'Test 1 Failed');
    console.log('Test 1 Passed');
  } catch (error) {
    console.error('Test 1 Failed', error);
  }

  // Test with invalid course_id
  try {
    const invalidAssignmentGroup = {
      id: 1,
      name: "Invalid Group",
      course_id: 2, // Invalid course_id
      group_weight: 0.5,
      assignments: [
        {
          id: 1,
          name: "Test Assignment 1",
          due_at: "2023-01-15",
          points_possible: 100
        }
      ]
    };

    generateLearnerReport(CourseInfo, [invalidAssignmentGroup], LearnerSubmissions);
    console.error('Test 2 Failed: No error thrown for invalid course_id');
  } catch (error) {
    console.log('Test 2 Passed');
  }

  // Test with zero points_possible
  try {
    const zeroPointsAssignmentGroup = {
      id: 1,
      name: "Zero Points Group",
      course_id: 1,
      group_weight: 0.5,
      assignments: [
        {
          id: 1,
          name: "Test Assignment 1",
          due_at: "2023-01-15",
          points_possible: 0 // Invalid points_possible
        }
      ]
    };

    generateLearnerReport(CourseInfo, [zeroPointsAssignmentGroup], LearnerSubmissions);
    console.error('Test 3 Failed: No error thrown for zero points_possible');
  } catch (error) {
    console.log('Test 3 Passed');
  }
}

runTests();
