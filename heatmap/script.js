const $output = document.getElementById('output')
const graph = document.getElementById('graph')
const legend = document.getElementById('bar')
const val1 = document.getElementById('val1')
const val2 = document.getElementById('val2')
const val3 = document.getElementById('val3')
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
let arr=[];
document.getElementById('file').onchange = function() {
  var file1 = this.files[0];
  var file2 = this.files[1];

  var reader1 = new FileReader();
  var reader2 = new FileReader();
  reader1.onload = function(progressEvent) {
    // Entire file
    const text = this.result;
    // $output.innerText = text

    // By lines
    var lines = text.split('\n');
    for (var line = 0; line < lines.length; line++) {
      arr.push(parseInt(lines[line].trim()));
    }
    reader2.readAsText(file2);
  };
  reader2.onload = function(progressEvent) {
    // Entire file
    const text = this.result;
    // $output.innerText = text

    // By lines
    var lines = text.split('\n');
    let max=0, exact=0;
    for (var line = 0; line < lines.length; line++) {
    //   console.log(lines[line]);
    if(line==0){
      exact = (lines[line]==="exact")
      continue
    }
      let num = parseInt(lines[line].trim());
      arr[line] = Math.abs(((arr[line]-num)*100)/((exact?num:arr[line])==0?1:(exact?num:arr[line])));
      arr[line]=Math.min(arr[line], 100);
      if(line<50) console.log(arr[line]);
      // max=Math.max(max, arr[line]);
    }

    arr=shuffle(arr);

    arr.forEach((e, i)=>{
        graph.innerHTML+=`<div style='background:hsla(330, 100%, ${90-(((e - 0) * 50) / 100)}%, 1)'></div>`;
    })
    legend.style.background=`linear-gradient(270deg, hsla(330, 100%, ${90-((((1)*100 - 0) * 50) / 100)}%, 1), hsla(330, 100%, ${90-((((0)*100 - 0) * 50) / 100)}%, 1))`;
    val1.innerText="0%";
    val2.innerText="50%";
    val3.innerText="100%";
  };
  
  reader1.readAsText(file1);
  
};
