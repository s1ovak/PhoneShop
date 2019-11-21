import {User} from "./user.model";
import {Product} from "./product.model";

export interface Cart {
  readonly user: User;
  readonly products: Product[];
  readonly totalPrice: string;
}
