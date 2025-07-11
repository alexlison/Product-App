import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav class="navbar navbar-expand-lg bg-success">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  Product App
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">
                      Add Product
                    </a>
                    <a class="nav-link" href="#">
                      View Product
                    </a>
                    <a class="nav-link" href="#">
                      Search Product
                    </a>
                    <a class="nav-link">
                      Delete Product
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
