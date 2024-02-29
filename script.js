const students = [
  {
    name: "Gustavo",
    n1: 9,
    n2: 7,
  },

  {
    name: "Davi",
    n1: 8,
    n2: 10,
  },

  {
    name: "Lucas",
    n1: 7,
    n2: 10,
  },

  {
    name: "Roque",
    n1: 5.5,
    n2: 5.5,
  }
]

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function printMedia(student) {
  let average = media(student.n1, student.n2);

  if (average >= 7) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average} 
    Parabéns ${student.name}, Você foi aprovado(a) no concurso! 
    `;
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average} 
    Não foi dessa vez, ${student.name}! Tente novamente!
    `;
  }
}

for (let student of students) {
  let media = printMedia(student)
  alert(media)
}