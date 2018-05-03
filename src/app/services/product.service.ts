import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Product} from '../models/item';

@Injectable()
export class ProductService {
productCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(public afs: AngularFirestore) {
    this.products = this.afs.collection('products').valueChanges();
  }

  getProducts() {
    return this.products;
  }

}
