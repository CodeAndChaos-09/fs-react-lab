import React from "react";

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }
}

function ClassHierarchy() {
  const student = new Student("Rahul", "Computer Science");

  return (
    <div className="page">
      <h2>Class Hierarchy</h2>

      <div className="card">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Course:</strong> {student.course}</p>
      </div>
    </div>
  );
}

export default ClassHierarchy;
