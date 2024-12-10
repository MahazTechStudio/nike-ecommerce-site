
       


    function placeimg() {
        var pictures = [
            'image/shoes1.png', 'image/shoes2.png', 'image/shoes3.png', 'image/shoes4.png',
            'image/shoes5.png', 'image/shoes6.png', 'image/shoes.png', 'image/shoes7.png'
        ];

        for (var i = 0; i < pictures.length; i++) 
            {
                
            var outputContainer = document.getElementById("output"+i);
            var content = document.createElement("div"); 
            content.classList.add("card"); 
    
            content.innerHTML = `
                <div class="small_card">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                </div>
                <div class="image">
                    <img src="${pictures[i]}" alt="Shoes ${i}">
                </div>
                <div class="products_text">
                    <h2>NIKE</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <h3>$100.99</h3>
            `;
            if(i==0){
                content.innerHTML+=`<div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <a href="#" class="btn">Add to cart</a>
                </div>`;
            }
            else if(i==1){
                content.innerHTML+=`<div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                    <a href="#" class="btn">Add to cart</a>
                </div>`;
            }
            else if(i==2){
                    content.innerHTML+=`<div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div>
                        <a href="#" class="btn">Add to cart</a>
                    </div>`;
            }
            else if(i==3){
                content.innerHTML+=`<div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div>
                    <a href="#" class="btn">Add to cart</a>
                </div>`;
            }
            else if(i==4){
                content.innerHTML+=`<div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                    <a href="#" class="btn">Add to cart</a>
                </div>`;
            }
            else if(i==5){
                content.innerHTML+=`<div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                    <a href="#" class="btn">Add to cart</a>
                </div>`;
            }
            else if(i==6){
                content.innerHTML+=`<div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div>
                    <a href="#" class="btn">Add to cart</a>
                </div>`;
            }
            else if(i==7){
                content.innerHTML+=`<div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div>
                    <a href="#" class="btn">Add to cart</a>
                   </div>`;
            }

            outputContainer.appendChild(content); // Add the product to the output container
        }
        
    }
    
    function start() 
    {
        placeimg();
    }
    
    window.addEventListener("load", start, false);
    
