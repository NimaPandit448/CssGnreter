   var ans = ''

    function clrChange(e) {
      document.getElementById('texsid').style.color = e.value 
      ans += "color:" + e.value + "<br>" 
      document.getElementById('result').innerHTML = ans
    }
    function changeColor(e) {
      document.getElementById('texsid').style.background = e.value 
      ans += "background:" + e.value + "<br>" 
      document.getElementById('result').innerHTML = ans
    }
    function changefontsize(e) {
      document.getElementById('texsid').style.fontSize = e.value
      ans += "font-Size:" + e.value + "<br>" 
      document.getElementById('result').innerHTML = ans

    }
    function changeTextbold(e) {
      document.getElementById('texsid').style.fontWeight = e.value
      ans += "font-Weight:" + e.value + "<br>" 
      document.getElementById('result').innerHTML = ans
    }
    function changefontfamliy(e) {
      document.getElementById('texsid').style.fontFamily = e.value
      ans += "font-Family:" + e.value + "<br>" 
      document.getElementById('result').innerHTML = ans
    }
    function changeBorderpandding(e) {
      document.getElementById("texsid").style.padding = e.value;
      ans += "padding:" + e.value + "<br>" 
      document.getElementById('result').innerHTML = ans
    }  
     
    
    function myFunction() {
        // Get the text field
        
        var text = document.getElementById("result").innerText;

        // Create a temporary input field to copy the text
        var tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
      
        // Select the text in the input field
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); /* For mobile devices */
      
        // Copy the selected text to the clipboard
        document.execCommand("copy");
      
        // Remove the temporary input field
        document.body.removeChild(tempInput);
      
        // Alert the user that the text has been copied
        alert("Copied the text: " + text);
    
    }
    

    function changetext(e)
    {      document.getElementById("texsid").innerHTML = e.value
        
    }
    function changenewborder(e)
    { 
      var clr = e.value 
      var bordertype =  document.getElementById('bordername').value  

      var bordersize = document.getElementById('bordersize').value  + "px"

      console.log(clr + bordertype + bordersize)  
      document.getElementById("texsid").style.border = `${bordersize} ${bordertype} ${clr}` 


      ans += "border:" +  `${bordersize} ${bordertype} ${clr}`   + "<br>" 
      document.getElementById('result').innerHTML = ans


    }function changeTextshadow(e)
    { 
      var color = e.value 
      var texthorizontal =  document.getElementById('horizontal').value  + "px"

      var textvertical= document.getElementById('vertical').value  + "px"

      var textradius = document.getElementById('radius').value  + "px"

      console.log(color + texthorizontal + textvertical + textradius)  
      document.getElementById("texsid").style.textShadow = `${texthorizontal} ${textvertical} ${textradius} ${color}` 


      ans += "textshadow:" +  `${texthorizontal} ${textvertical} ${textradius} ${color}`   + "<br>" 
      document.getElementById('result').innerHTML = ans


    }
    // 3px 3px 3px #000 

