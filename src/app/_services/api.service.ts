import { Injectable } from '@angular/core';

@Injectable()

export class apiService {

	//private api_url = "http://18.217.27.56:8082/api/";
  	private api_url = "https://admin.bbntrivias.com/api/";
	public magentoService = "https://payporte.com/lookbook/";
	public apiUrl$ = this.api_url;

  // public sk ="sk_test_05ec42a5b512b6f9e7c6a3128ae12c43a49e4ca9";
  // public pk ="pk_test_e4e6c649d2189b158a653d5e7f2675da0a1a96ee";
  public sk ="sk_live_27a9061db675bdfbb485a2b036af5afd6248100e";
  public pk ="pk_live_97deceef7861004cdfc89662ecdde5262a38b6c5";
  //public  dusuMerchantId  = "1000";
  //public  dusupayUrl  = "http://sandbox.dusupay.com/";
  public  dusuMerchantId  = 2093;
  public  dusupayUrl  = "https://dusupay.com/";

	constructor() {

	}

}

