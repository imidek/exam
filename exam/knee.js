const romRes = document.querySelector('.romRes');
const wyprost = document.querySelector('#wyprost');
const zgiecie = document.querySelector('#zgiecie');
const tkliwosc=document.querySelectorAll('input')
const palpacja = document.querySelector('.palpacja')
const opis = document.querySelector('.opis')


const result = document.querySelector('p.wyniki')

const resButt = document.querySelector('button')
let res = []

// romBar.addEventListener('input',e=>{
//   console.log(romBar.value)
//   romRes.textContent = romBar.value

//   // console.log(romRes.textContent);
// })

palpacja.addEventListener('click',e=>{
  tkliwosc.forEach(itm=>{
    if(itm.checked){
      res.push(itm.value)
    }
  })
  console.log(res);
  opis.textContent=res
  console.log(res);
})

wyprost.addEventListener('input',e=>{
  console.log(`wyprost = ${wyprost.value}`);
  wyprost.nextElementSibling.textContent=wyprost.value
})
zgiecie.addEventListener('input',e=>{
  console.log(`zgiecie = ${zgiecie.value}`);
  zgiecie.nextElementSibling.textContent=zgiecie.value
})








resButt.addEventListener('click',e=>{
  e.preventDefault()
  result.textContent=`ROM kolana: ${wyprost.value} - ${zgiecie.value}`
})
