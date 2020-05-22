import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          
 <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>


            <div class="col-lg-6">
                  <div id="ui">
                    <h1 class="text-center">Registration Form</h1>
                      <form class="form-group text-center">
                          <div class="row">
                                <div class="col-lg-6">
                                    <label>First Name:</label>
                                    <input type="text" name="prenon" class="form-control" placeholder="Enter your first name..."/>
                                </div>
                                <div class="col-lg-6">
                                  <label>Last Name:</label>
                                  <input type="text" name="nom" class="form-control" placeholder="Enter your last name ..."/>
                              </div>

                          </div>
                          <br/>
                          <label >Email:</label>
                          <input type="email" name="email" class="form-control" placeholder="Enter your Email ..."/>
                          <br/>
                          <div class="row">
                            <div class="col-lg-6">
                                <label>Password:</label>
                                <input type="password" class="form-control" placeholder="Enter your password..."/>
                            </div>
                            <div class="col-lg-6">
                              <label>Re-type password:</label>
                              <input type="password"  class="form-control" placeholder="Re-type again ..."/>
                          </div>

                      </div>
                       <br/>
                      <select class="form-control">
                              <option >Choose gender ...</option>
                              <option >Male</option>
                              <option >Female</option>
                      </select>
                      <br/>
                      <input type="submit" name="submit" value="submit" class="btn btn-primary btn-block btn-lg"/>

                      </form>


                  </div>    

            </div>




            <div class="col-lg-3"></div>
        </div>

 </div>


    </div>
  );
}

export default App;
