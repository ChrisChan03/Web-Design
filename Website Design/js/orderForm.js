document.write(`
    <div class="modal fade" id="orderForm" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="staticBackdropLabel">Order Form</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
            <form>
            	<div class="form-group">
            		<input type="text" name="name" placeholder="Your Fullname" class="form-control" required>
            	</div>
            	<div class="form-group">
            		<input type="email" name="email" placeholder="Email Address" class="form-control" required>
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
					<div class="custom-file">
						<input type="file" class="custom-file-input" id="customFile">
						<label class="custom-file-label" for="customFile">Add screenshot of product</label>
					</div>
	            </div>
	            <div class="form-group">
	            	<input type="submit" name="submitBtn" value="Continue" class="btn btn-md form-control" id="btn-red">
	            </div>
            </form>
	      </div>
	    </div>
	  </div>
	</div>
`);