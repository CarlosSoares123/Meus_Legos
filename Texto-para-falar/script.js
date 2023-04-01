const textarea = document.querySelector('textarea')
const voiceList = document.querySelector('select')
const speechBtn = document.querySelector('button')

let synth = speechSynthesis
isSpeacking = true

function voice() {
  for (let voice of synth.getVoices()) {
    let selected = voice.name === "Google Us English" ? "selected" : ""
    let option = `<option value="${voice.name}" ${selected}>${voice.name} ${voice.lang}</option>`
    voiceList.insertAdjacentHTML("beforeend", option)
  }
}

synth.addEventListener('voiceschanged', voice)

function textToSpeech(text) {
  let utterance = new SpeechSynthesisUtterance(text)
  for (let voice of synth.getVoices()) {
  if(voice.name === voiceList.value){
    utterance.voice = voice
  }
  }
  synth.speak(utterance)
}

speechBtn.addEventListener('click', e => {
  e.preventDefault()
  if (textarea.value !== '') {
    if(!synth.speaking){
      textToSpeech(textarea.value)
    }
    if(textarea.value.length > 80){
      if(isSpeacking){
        synth.resume()
        isSpeacking = false;
        speechBtn.innerText = "Pausar Discurso"
      }else{
        synth.pause()
        isSpeacking = true;
        speechBtn.innerText = "Retomar o Discurso"
      }
      setInterval(() => {
        if(!synth.speaking && !isSpeacking){
          isSpeacking = true;
          speechBtn.innerHTML = "Converter para Falar"
        }
      })
    } else{
      speechBtn.innerHTML = "Converter para Falar"
    }
  }
})



