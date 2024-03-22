let students = [
    {
        id: 1,
        name: "MuhammadAli",
        course: "Frontend",
        startDate: "2024-01-02",
        scores: [
            {
                theme: "HTML",
                score: 7
            },
            {
                theme: "CSS",
                score: 8
            },
            {
                theme: "JS",
                score: 4
            },
        ]
    },
    {
        id: 2,
        name: "Javohir",
        course: "Frontend",
        startDate: "1488-12-02",
        scores: [
            {
                theme: "HTML",
                score: 4
            },
            {
                theme: "CSS",
                score: 9
            },
            {
                theme: "JS",
                score: 6
            },
        ]
    },
    {
        id: 3,
        name: "Munir",
        course: "Frontend",
        startDate: "2023-10-29",
        scores: [
            {
                theme: "digital",
                score: 7
            },
            {
                theme: "HTML",
                score: 9
            },
            {
                theme: "CSS",
                score: 5
            },
            {
                theme: "JS",
                score: 7
            },
        ]
    },
    {
        id: 4,
        name: "Jahonbek",
        course: "Frontend",
        startDate: "2023-10-29",
        scores: [
            {
                theme: "digital",
                score: 6
            },
            {
                theme: "HTML",
                score: 7
            },
            {
                theme: "CSS",
                score: 6
            },
            {
                theme: "JS",
                score: 8
            },
        ]
    },
]

for(let itm of students){
    
    itm.scrCount = itm.scores.reduce((a, b) => a + b.score, 0)


    itm.averageScrore = itm.scrCount / itm.scores.length

    let variance = Date.parse(new Date()) - Date.parse(itm.startDate)


    itm.durationOfStudy = (variance / 1000) / 60 /60 / 24/ 30
}




//           ДЗ ОТСЮДА 





let smartest = 0
    for(let itm of students){
        if (itm.averageScrore > smartest) {
            smartest = itm.averageScrore
        }   
  
  
    }
console.log(smartest);

let oldest = students.reduce((a,b) => {
    return a.durationOfStudy > b.durationOfStudy ? a : b
   
  

  })
let youngest = students.reduce((a,b) => {
   return a.durationOfStudy < b.durationOfStudy ? a : b
  

  
})


  

  




console.table(students);

console.log(oldest);
console.log(youngest);