import React from 'react';

const Login=()=>{
return(
  <div class="dropdown m-lg-1">
    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
      login
    </button>
    <form class="dropdown-menu p-4">
      <div class="mb-3">
        <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck2"/>
          <label class="form-check-label" for="dropdownCheck2">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-success">Sign in</button>
    </form>
</div>
)
}

export default Login;