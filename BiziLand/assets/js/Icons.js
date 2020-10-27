function profile()
{
    var x = document.getElementById("welcome");
    var y = document.getElementById("profile")

  if (x.style.display === "none")
  {
    setTimeout(function()
    {
      x.style.display = "block";
    }, 300);
  } 
  else 
  {
    setTimeout(function()
    {
      x.style.display = "none";
    },200);
  }



  if (y.style.display === "block")
  {
    setTimeout(function()
    {
      y.style.display = "none";
    }, 300);
  } 
  else 
  {
    setTimeout(function()
    {
      y.style.display = "block";
    },200);
  } 
}