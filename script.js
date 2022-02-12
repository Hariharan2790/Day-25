var count = 0;
var products = ["HP", "LENEVO", "DELL", "ACER", "ASUS","APPLE","VAIO"]
var images = ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg"]
var prices = [200,250,300,200,275,325,400,350]
for(i=0;i<7;i++){
    var data = docoument.createElement("div")
    data.setAttribute("class","box1")

    var image = document.createElement("img")
    image.setAttribute("src",images[i])
    images.setAttribute("width","300px")
    images.setAttribute("height","300px")
    images.setAttribute("id","image1")
    data.appendChild(image)

    var product = document.createElement("div")
    product.innerText=products[i];
    product.setAttribute("id","product")
    data.appendChild(product)

    var price = document.createElement("div")
    price.innerText=prices[i]+"USD";
    price.setAttribute("id","price")
    data.appendChild(price)

    var buttons = document.createElement("button")
    buttons.innerText="Add to Cart";
    buttons.setAttribute("id",i)
    buttons.setAttribute("class","buttons")
    buttons.addEventListener("click",function(){
        this.disabled = "true";
        
        var cart = document.createElement("div")
        cart.innerText = products[this.id]+""+prices[this.id];

        cart.setAttribute("class","pops")
        cart.setAttribute("id",prices[this.id])
        addtocart.appendChild(cart)
        count=count+prices[this.id];
        var buttonbox = document.createElement("div")
        cart.appendChild(buttonbox)

        var final = document.createElement("button")
        final.innerText='x';
        final.setAttribute("class","finals")
        final.setAttribute("id",this.id)
        final.addEventListener("click",function(){
         
            document.getElementById(this.id).disabled = false;
          cart.style.display="none"
          
          document.getElementById("total").innerHTML="TOTAL :"+(count=count-prices[this.id]); 
        })
        buttonbox.appendChild(final)
        document.getElementById("total").innerHTML="TOTAL :"+count;
    })
    data.appendChild(buttons)
      box.appendChild(data)

    }

    


    
