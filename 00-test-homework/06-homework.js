const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
  
  
  //  1st function
  const getSubjects = (students) => {
    const {subjects, name, course} = students;
    let subjt = [];
  
    for (let i in subjects) {
      subjt.push(
        i.charAt(0).toUpperCase() + i.replaceAll("_", " ").slice(1)
      );
    }
    return subjt;
  };
  console.log(getSubjects(students[0])
  );
  
  
  //2nd function
  const getAverageMark = (students) => {
    const {subjects, name, course} = students;
    const marks = Object.values(subjects);
    let count = 0;
    let total = 0;
    let calculateAverage = 0;
    
    marks.forEach((item) => {
      count += item.reduce((previousValue, currentValue) => previousValue + currentValue);
      total += item.length;
      return (calculateAverage = count / total);
    });
  
    return Number(calculateAverage.toFixed(2));
  };
  
  console.log(getAverageMark(students[0])
  );
  
  
  //3d function
  const getStudentInfo = (students) => {
    let studentInfo = {};
    
    for(let key in students) {
      if (key !== "subjects") {
        studentInfo[key] = students[key];
      }
    }
    studentInfo["averageMark"] = getAverageMark(students);
    return studentInfo;
  };
  console.log(getStudentInfo(students[0])
  );
  
  //4th fucntion
  const getStudentsNames = (students) => {
    let studentsName = [];
    
    for (let i in students) {
      const {name, course, subjects} = students[i];
      studentsName.push(name);
    }
    return studentsName.sort();
  };
  
  console.log(getStudentsNames(students)
  );
  
  //5th function
  const getBestStudent = (students) => {
    let bestStudent = "";
    let bestMark = 0;
    
    for (let i of students) {
      let {name, course, subjects, averageMark} = getStudentInfo(i);
      
      if (averageMark > bestMark) {
        bestMark = averageMark;
        bestStudent = name;
      }
    }
    return bestStudent;
  };
  console.log(getBestStudent(students)
  );
  
  //6th function
  const calculateWordLetters = (str) => {
    const calculateLetters = {};
    
    for (let i of str) {
      if (calculateLetters[i] === undefined) {
        let counter = 0;
      
        for (let j of str) {
          if (i === j) {
            counter++
          }
        }
      
        calculateLetters[i] = counter;
      }
    }
    return calculateLetters;
  };
  console.log(calculateWordLetters("тест"));