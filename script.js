// script.js

// Function to add a subject to the checklist
function addSubject(subject) {
    const newSubject = { name: subject, completed: false };
    checklist.push(newSubject);
    updateChecklistDisplay();
}

// Function to mark a subject as completed
function completeSubject(index) {
    checklist[index].completed = true;
    updateChecklistDisplay();
}

// Function to display the checklist
function updateChecklistDisplay() {
    const checklistContainer = document.getElementById('checklist');
    checklistContainer.innerHTML = '';
    checklist.forEach((subject, index) => {
        const subjectElement = document.createElement('div');
        subjectElement.textContent = subject.name + (subject.completed ? ' - Completed' : '');
        subjectElement.onclick = () => completeSubject(index);
        checklistContainer.appendChild(subjectElement);
    });
}

const checklist = []; // Array to store subjects

// Example usage
addSubject('Math');
addSubject('Biology');
