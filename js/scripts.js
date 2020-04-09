alert('A program built for determining age eligibility for a  party')
var age=parseInt(prompt('Enter your age:'));
if(age>=20 && age<=28 || age>=29) {
alert('You are going to the club( :');
} else if (age==18 || age==19) {
alert('You will be going to the club but no DRINKS for you');
} else{
alert('Underage!!Stay with your mom ) :');
}
