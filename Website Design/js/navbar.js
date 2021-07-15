document.write(`
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
	   <div class="container">
	   	  <a href="shop.html"><img class="img-fluid" src="images/logo.gif" style="height: 40px;"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
       	     <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
       	     <ul class="navbar-nav mx-auto">	
       	  	    <li class="nav-item">
       	  	 	   <a href="shop.html" class="nav-link">Home</a>
       	  	    </li>
       	  	    <li class="nav-item">
       	  	 	   <a href="product.html" class="nav-link">Products</a>
       	  	    </li>
       	  	    <li class="nav-item">
       	  	 	   <a href="about.html" class="nav-link">About Us</a>
       	  	    </li>
       	  	    <li class="nav-item">
       	  	 	   <a href="contact.html" class="nav-link">Contact</a>
       	  	    </li>
       	     </ul>
       	     <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                 <a href="#" class="nav-link" data-toggle="modal" data-target="#orderForm">Order Form</a>
              </li>
       	     	<li class="nav-item">
       	  	 	   <a href="#" class="nav-link" data-toggle="modal" data-target="#loginForm">Login</a>
       	  	 	</li>
       	  	 	<li class="nav-item">
       	  	 	   <a href="#" class="nav-link" data-toggle="modal" data-target="#signupForm">Order</a>
       	  	 	</li>
       	     </ul>
       	     <form class="form-inline ml-auto">
          	  <div class="input-group input-group-sm">
          	    <input type="text" name="search" class="form-control" placeholder="Search products...">
          	    <div class="input-group-append">
          	  	  <button class="btn btn-primary" type="submit" id="searchbtn">
          	  		  <span class="fas fa-search"></span>
          	  	  </button>
          	    </div>
          	  </div>
            </form>
          </div>
	   </div>
	</nav>

`);