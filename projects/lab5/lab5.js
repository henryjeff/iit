/* Lab 5 JavaScript File 
   Place variables and functions in this file */

window.onload = () => {
  const firstNameElm = document.getElementById("firstName");
  firstNameElm.focus();
};

function validate(formObj) {
  if (formObj.firstName.value == "") {
    alert("You must enter a first name");
    formObj.firstName.focus();
    return false;
  }

  if (formObj.lastName.value == "") {
    alert("You must enter a last name");
    formObj.lastName.focus();
    return false;
  }

  if (formObj.title.value == "") {
    alert("You must enter a title");
    formObj.title.focus();
    return false;
  }

  if (formObj.org.value == "") {
    alert("You must enter an organization");
    formObj.org.focus();
    return false;
  }

  if (formObj.pseudonym.value == "") {
    alert("You must enter a nickname");
    formObj.pseudonym.focus();
    return false;
  }

  if (formObj.comments.value == "") {
    alert("You must enter some comments");
    formObj.comments.focus();
    return false;
  }

  alert("Form successfully validates!")
  return true;
}

let clearedComments = false

function clearComments(obj) {
  if (!clearedComments) obj.children.comments.innerHTML = ""
  clearedComments = true
}

function alertNick(obj) {
  const formObj = obj.parentElement.children[2]
  alert(`${formObj.firstName.value} ${formObj.lastName.value} is ${formObj.pseudonym.value}`)
}