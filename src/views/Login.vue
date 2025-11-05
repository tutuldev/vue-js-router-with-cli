<template>
  <div>
    <h3>This is Login Page</h3>
    <h2 style="text-align:center;">Simple Login Form</h2>

<form action="/action_page.php" method="post">
  <div class="container">
    <label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit" @click.prevent="Login()">Login</button>
    <button type="button" class="cancelbtn">Cancel</button>

    <div style="margin-top:10px;">
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </div>
</form>
   
  </div>
</template>

<script>
export default {
    name: 'Login',
    methods:{
        Login(){
            // eta url diye 
            // this.$router.push('/dashboard');

            // eta name route diye 
            // push use korle back asha jai 
            this.$router.push({ name: 'dashboard' });
            
            
            //replace use korle back asha jai na
            // this.$router.replace({ name: 'dashboard' });
        }
    }

}
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f2f2f2;
}

form {
  border: 3px solid #f1f1f1;
  width: 350px;
  margin: 100px auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* Input field style */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px;
  margin: 8px 0 16px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Login button */
button {
  background-color: #04AA6D;
  color: white;
  padding: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
}

button:hover {
  background-color: #038e5a;
}

/* Cancel button */
.cancelbtn {
  background-color: #f44336;
  margin-top: 10px;
}

.container {
  padding: 10px 0;
  text-align: left;
}

span.psw {
  float: right;
  padding-top: 10px;
}

@media screen and (max-width: 400px) {
  form {
    width: 90%;
  }
  span.psw {
    display: block;
    float: none;
    text-align: center;
  }
}
</style>
