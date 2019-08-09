fetch('https://raw.githubusercontent.com/Marimariana/fetch/master/cv.json')
.then (res => res.json())
.then (res => console.log(res))