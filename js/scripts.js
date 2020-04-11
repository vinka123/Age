alert('A program built for determining age eligibility for a  party')
var age=parseInt(prompt('Enter your age:'));
if(age>=20 && age<=28 || age>=29) {
alert('You are going to the club( :');
} else if (age==18 || age==19) {
alert('You will be going to the club but no DRINKS for you');
} else{
alert('Underage!!Stay with your mom ) :');
}
//Another program i created for determining your grade
alert('This is a simple app i created to determine your grade through your marks');
var marks=parseInt(prompt('Enter your marks from 0-100'));
if(marks<=20) {
alert('Terrible!Very poor!!Grade E');
} else if(marks>=21 && marks<=39) {
alert('Improvement needed!Grade D');
} else if(marks>=40 && marks<=59) {
alert('Fair-Grade C');
} else if(marks>=60 && marks<=79) {
alert('Good-Grade B');
} else if(marks>=80 && marks===100) {
alert('Excellent!!Grade A');
} else {
alert('Seriously??No such marks:)')
}
