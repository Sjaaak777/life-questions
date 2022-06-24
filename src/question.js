'use strict'
import { questions } from './all-questions.js'

export default class Question {
  constructor() {
    this.questions = questions
    this.element = document.getElementById('question')
    this.element.style.width = '250px'
    this.element.style.height = '250px'
    this.element.style.backgroundColor = 'white'
    this.element.style.border = 'solid 15px '
    this.element.style.borderImage =
      'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1'
    this.element.style.alignItems = 'center'
    this.element.style.display = 'flex'
    this.element.style.textAlign = 'center'
    this.element.style.fontSize = '30px'
    this.element.style.fontWeight = 'bold'
    this.element.style.color = 'red'
    this.element.style.cursor = 'pointer'
    this.element.style.userSelect = 'none'
    this.element.style.padding = '25px'
    this.element.innerHTML = 'Klik voor de vraag van vandaag'
    this.element.addEventListener('click', () => {
      this.element.innerHTML = this.getQuestion()
    })
  }

  getQuestion() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let question = Math.floor(Math.random() * (i + 1))
      return this.questions[question]
    }
  }
}
