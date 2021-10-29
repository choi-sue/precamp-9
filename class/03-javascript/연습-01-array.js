const classmate =["철수","영희","훈이"]
// undefined
classmate
// (3) ['철수', '영희', '훈이']
classmate[0]
// '철수'
classmate[1]
// '영희'
classmate.includes("훈이")
// true
classmate.includes("맹구")
// false
classmate.push("맹구")
// 4
classmate
// (4) ['철수', '영희', '훈이', '맹구']
classmate.includes("맹구")
// true
classmate.pop()
// '맹구'
classmate
// (3) ['철수', '영희', '훈이']
classmate.length
// 3