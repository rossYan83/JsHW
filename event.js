const radios = document.querySelectorAll('input[name="color"]')

radios.forEach(radio =>{
    radio.addEventListener('change', function(){
        document.body.style.backgroundColor = this.value;
    })
})

document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;


const input = document.getElementById('name-input')
const output = document.getElementById('name-output')

input.addEventListener('input', ()=>{
    output.textContent = input.value.trim() === "" ? 'незнайомець' : input.value
})

const input2 = document.getElementById('validation-input');

    input2.addEventListener('blur', () => {
      const expectedLength = Number(input2.dataset.length);
      const actualLength = input2.value.trim().length;

      if (actualLength === expectedLength) {
        input2.classList.add('valid');
        input2.classList.remove('invalid');
      } else {
        input2.classList.add('invalid');
        input2.classList.remove('valid');
      }
    });

const slider = document.getElementById('font-size-control');
const text = document.getElementById('text')
slider.addEventListener('input', ()=>{
    text.style.fontSize = slider.value + 'px'
})