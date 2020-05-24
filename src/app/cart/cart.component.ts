import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  checkoutForm;
  items;

  constructor(private cartService: CartService, private fb: FormBuilder) {
    this.checkForm();
  }

  ngOnInit() {
    this.getItem();
  }

  checkForm() {
    this.checkoutForm = this.fb.group({
      name: "",
      address: ""
    });
  }

  getItem() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
