
var spin = "|/-\\|";
var timer = 100;
function animate(index)
{

    if(index === spin.length)
    {

        return;
    }

    setTimeout(() => {
        process.stdout.write("\r" + spin[index++]);
        animate(index);
      }, 100);
      
}


  animate(0);
  console.log(spin.length);