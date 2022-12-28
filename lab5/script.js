const regularExpretions = {
  pibMatch: /([А-Яа-яёЁЇїІіЄєҐґ]) ([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\.([А-Яа-яёЁЇїІіЄєҐґ]{0,1})\./,
  phoneMatch: /(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  facultyMatch: /[А-Яа-яёЁЇїІіЄєҐґ]{4}/,
  idcardMatch: /(^[А-Яа-яёЁЇїІіЄєҐґ]{2}) №([0-9]{6})\b/,
  groupMatch: /(^[А-Яа-яёЁЇїІіЄєҐґ]{2})\-([0-9]{2})\b/
}

function validate() {
  const pib = document.querySelector('#pib')
  const group = document.querySelector('#group')
  const phone = document.querySelector('#phone')
  const idcard = document.querySelector('#idcard')
  const faculty = document.querySelector('#faculty')
  const result = {}

    result.pib = {
      value: pib.value,
      isValid: regularExpretions.pibMatch.test(pib.value)
    }
    result.group = {
      value: group.value,
      isValid: regularExpretions.groupMatch.test(group.value)
    }
    result.phone = {
      value: phone.value,
      isValid: regularExpretions.phoneMatch.test(phone.value)
    }
    result.idcard = {
      value: idcard.value,
      isValid:  regularExpretions.idcardMatch.test(idcard.value)
    }
    result.faculty = {
      value: faculty.value,
      isValid:  regularExpretions.facultyMatch.test(faculty.value)
  }
  return displayForm(result)
}

function displayForm(result) {
  const div = document.querySelector('.result')
  return div.innerHTML = `
    <div class="pib" style="color:${result.pib.isValid ? 'green' : 'red'};">
      ${result.pib.value}
    </div>
    <div class="group" style="color:${result.group.isValid ? 'green' : 'red'};">
      ${result.group.value}
    </div>
    <div class="phone" style="color:${result.phone.isValid ? 'green' : 'red'};">
      ${result.phone.value}
    </div>
    <div class="idcard" style="color:${result.idcard.isValid ? 'green' : 'red'};">
      ${result.idcard.value}
    </div>
    <div class="faculty" style="color:${result.faculty.isValid ? 'green' : 'red'};">
      ${result.faculty.value}
    </div>
  `
}

function changeColor() {
  const tr = document.querySelector('#variant')
  const newColor = document.querySelector('#colorInput')
  // tr.style.backgroundColor = `rgb(
  //   ${Math.floor(Math.random() * 255)}, 
  //   ${Math.floor(Math.random() * 255)}, 
  //   ${Math.floor(Math.random() * 255)})
  // `;
  tr.style.backgroundColor = newColor.value
}

function changeRowColor() {
  const tds = document.querySelectorAll('.row')
  const newColor = document.querySelector('#colorInput')
  tds.forEach((item) => {
    console.log(item)
    item.style.backgroundColor = newColor.value
  })
}