document.write(`
   <!-- Login Form -->
	<div class="modal fade" id="loginForm" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <form method="POST" action="">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Login Form</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
	            <div class="form-group">
	            	<label>Email</label>
	            	<input type="text" name="email" class="form-control" placeholder="Email address">
	            </div>
	            <div class="form-group">
	            	<label>Password</label>
	            	<input type="password" name="pass" class="form-control" placeholder="Your password">
	            	<p id="sign-up-text" class="text-center mt-1"><a href="#">Forgot your password?</a></p>
	            </div>
		      </div>
		      <div class="modal-footer">
		        <button type="submit" class="btn btn-warning form-control" id="loginBtn">LOGIN</button>
		        <p id="sign-up-text" class="mx-auto">Need account? <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#signupForm">Create now.</a></p>
		      </div>
	      </form>
	    </div>
	  </div>
	</div>

	<!-- Sign Up Form -->
	<div class="modal fade" id="signupForm" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <form method="POST" action="">
		      <div class="modal-header">
		        <h5 class="modal-title" id="staticBackdropLabel">Sign Up Form</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
	            <div class="form-group">
	                <div class="row">
					    <div class="col">
					      <input type="text" class="form-control" placeholder="First name" required>
					    </div>
					    <div class="col">
					      <input type="text" class="form-control" placeholder="Last name" required>
					    </div>
				    </div>
	            </div>
	            <div class="form-group">
	            	<div class="input-group">
				        <div class="input-group-prepend">
				           <div class="input-group-text">+63</div>
				        </div>
				        <input type="text" class="form-control" placeholder="Contact number" maxlength="10" required>
				    </div>
	            </div>
	            <div class="form-group">
	            	<input type="text" class="form-control" placeholder="Email address" required>
	            </div>
	            <div class="form-group">
	            	<input type="password" class="form-control" placeholder="Password" required>
	            </div>
	            <div class="form-group">
	            	<input type="password" class="form-control" placeholder="Re-type Password" required>
	            </div>
	            <div class="form-group">
	            	<div class="custom-control custom-radio custom-control-inline">
					  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" required>
					  <label class="custom-control-label" for="customRadioInline1">Male</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
					  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" required>
					  <label class="custom-control-label" for="customRadioInline2">Female</label>
					</div>
	            </div>
	            <p id="sign-up-text" class="text-center mt-1">Already have an account? <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#loginForm">Login now.</a></p>
		      </div>
		      <div class="modal-footer">
		        <button type="submit" class="btn btn-warning form-control" id="signupBtn">SIGN UP</button>
		        <p class="mx-auto" id="sign-up-text">By clicking "SIGN UP", you are agree to our <a href="#">Terms and Condition.</a></p>
		      </div>
	      </form>
	    </div>
	  </div>
	</div>

`);