import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/cart.css';
import keycap from '../img/keycap.png'

export function MyCart() {
  return (
    <section class="vh-100 shoppingcart" /*style=""*/>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <p><span class="h2">Shopping Cart </span><span class="h4">(2 item in your cart)</span></p>

        <div class="card mb-4">
          <div class="card-body p-4">

            <div class="row align-items-center pb-2">
              <div class="col-md-2">
                <img src="https://cdn.keycap-archivist.com/keycaps/7b37553a.jpg"
                     class="img-fluid" alt="Generic placeholder image"/>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Name</p>
                  <p class="lead fw-normal mb-0">Clifford</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Color</p>
                  <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2" /*style="color: #fdd8d2;"*/></i>
                  Hyperfuse</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Quantity</p>
                  <p class="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Price</p>
                  <p class="lead fw-normal mb-0">15€</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Total</p>
                  <p class="lead fw-normal mb-0">15€</p>
                </div>
              </div>
            </div>
            
            <div class="row align-items-center pb-2">
              <div class="col-md-2">
                <img src="https://cdn.keycap-archivist.com/keycaps/ca3d3011.jpg"
                     class="img-fluid" alt="Generic placeholder image"/>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Name</p>
                  <p class="lead fw-normal mb-0">Kolkraba</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Color</p>
                  <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2" /*style="color: #fdd8d2;"*/></i>
                  Leviathan (HP)</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Quantity</p>
                  <p class="lead fw-normal mb-0">1</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Price</p>
                  <p class="lead fw-normal mb-0">15€</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2">Total</p>
                  <p class="lead fw-normal mb-0">25€</p>
                </div>
              </div>
            </div>




          </div>
        </div>

        <div class="card mb-5">
          <div class="card-body p-4">

            <div class="float-end">
              <p class="mb-0 me-5 d-flex align-items-center">
                <span class="small text-muted me-2">Order total:</span> <span
                  class="lead fw-normal">40€</span>
              </p>
            </div>

          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-light btn-lg me-2">Continue shopping</button>
          <button type="button" class="btn btn-dark btn-lg">Add to cart</button>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}